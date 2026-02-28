---
name: dream-creator
description: This skill should be used when the user wants to create a new application from scratch, develop new features for an existing project, or understand and document an existing project. It provides interactive project creation with multi-round requirement gathering, framework recommendation, automated environment setup, code review integration, testing, and iterative feature development.
allowed-tools: AskUserQuestion, Task, Glob, Grep, Read, Write, Bash
---

# Dream Creator

An AI application incubator skill that helps users create applications through interactive dialogues. It coordinates multiple specialized agents to complete project creation and feature iteration.

## Overview

This skill operates in two primary modes:

1. **New Project Mode**: Guide users through 2-5 rounds of requirement dialogue to create a new application
2. **Existing Project Mode**: Analyze existing projects and generate documentation

## Workflow

```
User calls /dream-creator
        │
        ▼
Detect Current Directory ─┬─ Has Project → Analyze Project → Generate/Update DREAM-PROJECTS.md
                          │
                          └─ Empty → Requirement Gathering (2-5 rounds)
                                         │
                                         ▼
                                  Provide 3-5 Suggestions
                                         │
                                         ▼
                                  Confirm Core Features
                                         │
                                         ▼
                                  Framework Recommendation (Progressive)
                                         │
                                         ▼
                                  Generate DREAM-PROJECTS.md
                                         │
                                         ▼
                                  Auto-install Dependencies + Environment Setup
                                         │
                                         ▼
                                  Enter Feature Iteration Mode
```

---

## Phase 1: Directory Detection

Start by checking the current working directory for existing project files.

### Check for Existing Project

Use Glob to scan for common project indicators:
- `package.json`, `Cargo.toml`, `go.mod`, `pom.xml`, `requirements.txt`, `pyproject.toml`
- `.git` directory
- Source code directories: `src/`, `lib/`, `app/`, `cmd/`
- Build configuration: `Makefile`, `CMakeLists.txt`, `webpack.config.js`, `vite.config.ts`

### Decision Point

**If project exists:**
- Read and analyze the existing project structure
- Generate or update `DREAM-PROJECTS.md` documentation
- Ask if user wants to add new features or make changes
- Skip to Feature Iteration Mode

**If directory is empty:**
- Start the requirement gathering conversation

---

## Phase 2: Requirement Gathering

If the directory is empty, engage in an interactive requirement gathering dialogue. Use `AskUserQuestion` to gather information over multiple rounds.

### Round 1: Project Type Understanding

Ask the user what type of application they want to build:

```
question: "你想开发什么类型的应用？"
header: "项目类型"
options:
  - label: "Web 应用"
    description: "前后端分离或全栈 Web 应用"
  - label: "移动应用"
    description: "iOS、Android 或跨平台移动应用"
  - label: "桌面应用"
    description: "Windows、Mac 或 Linux 桌面客户端"
  - label: "API/后端服务"
    description: "REST API、GraphQL 或微服务"
  - label: "命令行工具"
    description: "CLI 工具或终端应用"
```

If the user says they don't know or have no specific idea, ask about their work/life scenarios to help suggest ideas.

### Round 2: Scenario Deep Dive

Based on the user's background and chosen project type, recommend 3-5 specific application directions:

```
question: "基于你选择的 [项目类型]，我推荐以下方向。你对哪个最感兴趣？"
header: "功能方向"
options:
  - label: "用户系统"
    description: "登录注册、权限管理、个人资料"
  - label: "数据管理"
    description: "CRUD 操作、数据可视化、报表导出"
  - label: "实时通信"
    description: "聊天、通知、实时更新"
  - label: "自动化任务"
    description: "定时任务、工作流编排、集成第三方服务"
```

### Round 3: Feature Refinement

Ask about core feature requirements:

```
question: "对于这个应用，你最看重哪些核心功能？（可多选）"
header: "核心功能"
multiSelect: true
options:
  - label: "用户认证"
    description: "注册、登录、OAuth 第三方登录"
  - label: "数据持久化"
    description: "数据库存储、文件上传"
  - label: "API 接口"
    description: "提供 RESTful 或 GraphQL 接口"
  - label: "实时功能"
    description: "WebSocket、SSE 实时通信"
  - label: "后台管理"
    description: "管理员面板、数据管理"
```

### Round 4: Technical Preferences (Optional)

Ask about framework preferences:

```
question: "你对技术栈有什么偏好？"
header: "技术栈"
options:
  - label: "我有明确偏好"
    description: "告诉我你喜欢的框架/语言"
  - label: "建议我合适的"
    description: "根据你的需求推荐最佳选择"
  - label: "无所谓"
    description: "只要能完成功能即可"
```

If user chooses "I have a specific preference", ask them to specify.

If user chooses "Recommend for me", use the framework guide in `references/framework-guide.md` to make a recommendation.

### Round 5: Final Confirmation

Present the complete project plan:

```
question: "这是你的项目规划。确认后我将开始创建项目。"
header: "确认"
options:
  - label: "开始创建"
    description: "按照以上规划创建项目"
  - label: "调整需求"
    description: "我想修改某些需求"
  - label: "重新开始"
    description: "从头开始定义需求"
```

---

## Phase 3: Framework Recommendation

### Progressive Recommendation

Based on user's project type and preferences, recommend appropriate frameworks:

**Web 应用:**
- React + Next.js (Full-stack)
- Vue + Nuxt
- Svelte + SvelteKit

**移动应用:**
- React Native (跨平台)
- Flutter (跨平台)
- Swift (iOS) / Kotlin (Android)

**桌面应用:**
- Electron (跨平台)
- Tauri (轻量级)
- Flutter Desktop

**API/后端服务:**
- Node.js + Express/NestJS
- Python + FastAPI/Django
- Go + Gin/Echo
- Rust + Actix

### Decision Support

If user has no preference, make a recommendation based on:
- Project complexity
- Team experience
- Performance requirements
- Deployment considerations

---

## Phase 4: Project Generation

### Generate DREAM-PROJECTS.md

Create the project documentation using the template in `references/dream-template.md`:

```markdown
# DREAM-PROJECTS.md

## 项目概览
- 项目名称: [name]
- 创建日期: [date]
- 技术栈: [stack]
- 项目类型: [type]

## 功能列表

### 已完成
- [ ] 功能1 - 完成日期

### 进行中
- [ ] 功能2

### 计划中
- [ ] 功能3

## Dream Iterations

### Iteration 1 (2026-02-28)
**需求**: 用户登录功能
**方案**: 使用 JWT 实现 REST API 认证
**实施**:
- 创建 User 模型
- 实现注册/登录 API
- 添加中间件验证
**验证**: 代码审核通过 ✓, 测试通过 ✓
```

### Auto Environment Setup

After generating the project plan, automatically set up the environment:

1. Call the environment-setup agent to detect system environment
2. Install dependencies automatically
3. Handle common environment issues
4. Verify the project runs correctly

---

## Phase 5: Feature Iteration Mode

After project creation, enter feature iteration mode for ongoing development.

### Feature Request Workflow

```
User requests new feature
        │
        ▼
Call code-architect Agent (from feature-dev)
        │
        ▼
Design architecture and implementation plan
        │
        ▼
Implement feature (use Task tool directly)
        │
        ▼
Call code-reviewer Agent (from feature-dev)
        │
        ├─ Issues found → Fix → Re-review
        │
        └─ Passed → Run tests
                      │
                      ├─ Tests fail → Fix → Re-test
                      │
                      └─ Passed → Update DREAM-PROJECTS.md
```

### Calling External Agents

When you need specialized agents, use the Task tool with the agent type:

**Code Review:**
- Use Task tool with subagent_type="general-purpose"
- Load agent from the feature-dev plugin: `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/feature-dev/agents/code-reviewer.md`
- Or spawn an agent with the code-reviewer instructions

**Architecture Design:**
- Use Task tool with subagent_type="general-purpose"
- Load agent from the feature-dev plugin: `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/feature-dev/agents/code-architect.md`

**Code Implementation:**
- Use Task tool with subagent_type="general-purpose" for direct implementation

### Agent Coordination Pattern

For complex features requiring multiple agents:

1. **First**: Use code-architect to design the implementation
2. **Second**: Use Task with general-purpose agent to implement
3. **Third**: Use code-reviewer to validate the code
4. **Fourth**: Run tests to verify functionality
5. **Finally**: Update DREAM-PROJECTS.md with iteration details

---

## Danger Operations

Before executing any destructive operation (deleting files, dropping databases), always ask for confirmation:

```
question: "此操作不可逆。确认继续？"
header: "确认删除"
options:
  - label: "确认删除"
  - label: "取消"
```

---

## Project Index

Track all created projects in the global index:

Location: `~/.claude/dream-projects-index.md`

Format:
```markdown
# Dream Projects Index

## Active Projects
- [Project Name] - [Path] - [Status]
```

Update this index when creating new projects.

---

## Key Files

- **SKILL.md**: This file
- **agents/environment-setup.md**: Environment setup agent
- **references/dream-template.md**: DREAM-PROJECTS.md template
- **references/framework-guide.md**: Framework selection guide
