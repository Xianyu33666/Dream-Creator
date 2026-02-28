---
name: dream-creator
description: This skill should be used when the user wants to create a new application from scratch, develop new features for an existing project, or understand and document an existing project. It provides interactive project creation with multi-round requirement gathering, framework recommendation, automated environment setup, code review integration, testing, and iterative feature development. Supports Chinese and English languages.
allowed-tools: AskUserQuestion, Task, Glob, Grep, Read, Write, Bash
---

# Dream Creator

An AI application incubator skill that helps users create applications through interactive dialogues. It coordinates multiple specialized agents to complete project creation and feature iteration.

**Language Support**: This skill supports both Chinese and English. Detect user's language preference from their input and respond accordingly.

## Overview

This skill operates in three primary modes:

1. **Resume Mode**: Resume from existing DREAM-PROJECTS.md with progress tracking
2. **New Project Mode**: Guide users through 2-5 rounds of requirement dialogue to create a new application
3. **Existing Project Mode**: Analyze existing projects without documentation and generate DREAM-PROJECTS.md

## Workflow

```
User calls /dream-creator
        │
        ▼
Detect Current Directory
        │
        ├─ Has DREAM-PROJECTS.md → Resume Mode (梳理进度)
        │
        ├─ Has Project Files but No Documentation → Analyze & Generate → Ask: Continue or New Feature
        │
        └─ Empty Directory → New Project Mode
                                      │
                                      ▼
                               Requirement Gathering (2-5 rounds)
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

## Phase 1: Directory Detection & Progress Resume

**IMPORTANT**: Every time this skill is called, you MUST first check for existing project state.

### Step 1: Detect Project State

Use Glob and Read to check:

1. **Check for DREAM-PROJECTS.md**: `Glob` pattern `**/DREAM-PROJECTS.md`
2. **Check for project files**: `package.json`, `Cargo.toml`, `go.mod`, `project.config.json`, `app.json`, etc.
3. **Check source code directories**: `src/`, `lib/`, `app/`, `pages/`, `components/`, `miniprogram/`

### Step 2: Analyze & Present Progress (Resume Mode)

If DREAM-PROJECTS.md exists:

1. **Read DREAM-PROJECTS.md** completely
2. **Parse Dream Iterations** to understand:
   - What features are completed
   - What features are in progress
   - What features are planned
3. **Check actual project state** - verify which files actually exist vs what the documentation claims
4. **Present a summary to user** (in their language):

```
Chinese:
---
## 项目进度梳理

**项目名称**: [name]
**技术栈**: [tech-stack]

### ✅ 已完成
- [列出已完成的功能]

### 🔄 进行中
- [列出进行中的功能]

### 📋 计划中
- [列出计划中的功能]

### 最新 Dream Iteration
[显示最新的迭代内容和进度]

请问您想：
1. 继续开发 [下一个未完成的功能]
2. 添加新功能
3. 调整项目计划
---

English:
---
## Project Progress Summary

**Project Name**: [name]
**Tech Stack**: [tech-stack]

### ✅ Completed
- [list completed features]

### 🔄 In Progress
- [list in-progress features]

### 📋 Planned
- [list planned features]

### Latest Dream Iteration
[show latest iteration content and progress]

What would you like to:
1. Continue developing [next unfinished feature]
2. Add new feature
3. Adjust project plan
---
```

### Step 3: Handle Project Reality Gap

If project files exist but NOT in sync with DREAM-PROJECTS.md (user may have developed independently):

**Detect Gap By**:
- Compare documented files vs actual files
- Check for new files not in documentation
- Check for completed features not marked in documentation
- Check git history for recent commits

**If Gap Detected**, present to user:

```
Chinese:
---
⚠️ 检测到项目与文档不一致

我发现您可能在使用 Dream Creator 之外的方式进行了开发。以下是发现的变化：

[列出实际存在但文档未记录的内容]

是否需要我：
1. 更新文档以反映当前项目状态，然后继续开发
2. 重新分析项目，从头整理文档
3. 先看看我整理后的文档再决定
---

English:
---
⚠️ Project and Documentation Out of Sync

I noticed you might have been developing outside of Dream Creator. Here are the changes I found:

[List actual changes not in documentation]

Would you like me to:
1. Update documentation to reflect current state, then continue
2. Re-analyze project and reorganize documentation
3. Let me show you the reorganized documentation first
---
```

---

## Phase 2: Requirement Gathering (New Project)

If the directory is empty or user wants new project, engage in an interactive requirement gathering dialogue.

### Language Detection

Detect language from user's input:
- If user writes in Chinese (中文), respond in Chinese
- If user writes in English, respond in English
- If unclear, default to English but can ask: "Would you prefer Chinese or English?"

### Round 1: Project Type Understanding

Ask the user what type of application they want to build:

**Chinese:**
```
question: "你想开发什么类型的应用？"
header: "项目类型"
options:
  - label: "Web 应用"
    description: "前后端分离或全栈 Web 应用"
  - label: "移动应用"
    description: "iOS、Android 或跨平台移动应用"
  - label: "小程序"
    description: "微信小程序、支付宝小程序、抖音小程序等"
  - label: "桌面应用"
    description: "Windows、Mac 或 Linux 桌面客户端"
  - label: "App 应用"
    description: "原生 iOS/Android App"
  - label: "API/后端服务"
    description: "REST API、GraphQL 或微服务"
  - label: "命令行工具"
    description: "CLI 工具或终端应用"
```

**English:**
```
question: "What type of application do you want to build?"
header: "Project Type"
options:
  - label: "Web Application"
    description: "Full-stack or frontend-backend separated web app"
  - label: "Mobile App"
    description: "iOS, Android, or cross-platform mobile app"
  - label: "Mini Program"
    description: "WeChat Mini Program, Alipay Mini Program, etc."
  - label: "Desktop Application"
    description: "Windows, Mac or Linux desktop client"
  - label: "Native App"
    description: "Native iOS/Android App"
  - label: "API/Backend Service"
    description: "REST API, GraphQL or microservices"
  - label: "CLI Tool"
    description: "Command-line tool or terminal application"
```

If the user says they don't know or have no specific idea, ask about their work/life scenarios to help suggest ideas.

### Round 2: Scenario Deep Dive

Based on the user's background and chosen project type, recommend 3-5 specific application directions:

**Chinese:**
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
  - label: "内容发布"
    description: "文章、媒体内容发布与管理"
  - label: "电商功能"
    description: "商品展示、购物车、订单管理"
```

**English:**
```
question: "Based on your choice of [project type], I recommend the following directions. Which interests you most?"
header: "Feature Direction"
options:
  - label: "User System"
    description: "Registration, login, permissions, profile"
  - label: "Data Management"
    description: "CRUD operations, data visualization, report export"
  - label: "Real-time Communication"
    description: "Chat, notifications, real-time updates"
  - label: "Automation Tasks"
    description: "Scheduled tasks, workflow orchestration, third-party integration"
  - label: "Content Publishing"
    description: "Articles, media content publishing and management"
  - label: "E-commerce"
    description: "Product display, shopping cart, order management"
```

### Round 3: Feature Refinement

Ask about core feature requirements:

**Chinese:**
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
  - label: "支付功能"
    description: "微信支付、支付宝、银联支付"
  - label: "消息推送"
    description: "App 推送、短信、邮件"
```

**English:**
```
question: "What core features are most important to you? (Multi-select)"
header: "Core Features"
multiSelect: true
options:
  - label: "User Authentication"
    description: "Registration, login, OAuth third-party login"
  - label: "Data Persistence"
    description: "Database storage, file upload"
  - label: "API Interface"
    description: "RESTful or GraphQL API"
  - label: "Real-time Features"
    description: "WebSocket, SSE real-time communication"
  - label: "Admin Panel"
    description: "Admin dashboard, data management"
  - label: "Payment"
    description: "WeChat Pay, Alipay, UnionPay"
  - label: "Push Notifications"
    description: "App push, SMS, email"
```

### Round 4: Technical Preferences (Optional)

Ask about framework preferences:

**Chinese:**
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

**English:**
```
question: "What are your technology preferences?"
header: "Tech Stack"
options:
  - label: "I have a specific preference"
    description: "Tell me your preferred framework/language"
  - label: "Recommend for me"
    description: "Suggest the best choice based on my needs"
  - label: "Doesn't matter"
    description: "As long as it gets the job done"
```

If user chooses "I have a specific preference", ask them to specify.

If user chooses "Recommend for me", use the framework guide in `references/framework-guide.md` to make a recommendation.

### Round 5: Final Confirmation

Present the complete project plan:

**Chinese:**
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

**English:**
```
question: "This is your project plan. Should I start creating the project?"
header: "Confirm"
options:
  - label: "Start Creating"
    description: "Create project according to the plan above"
  - label: "Adjust Requirements"
    description: "I want to modify some requirements"
  - label: "Start Over"
    description: "Define requirements from scratch"
```

---

## Phase 3: Framework Recommendation

### Progressive Recommendation

Based on user's project type and preferences, recommend appropriate frameworks:

**Web 应用 / Web Application:**
- React + Next.js (Full-stack)
- Vue + Nuxt
- Svelte + SvelteKit

**移动应用 / Mobile App:**
- React Native (跨平台/cross-platform)
- Flutter (跨平台/cross-platform)
- Swift (iOS) / Kotlin (Android)

**小程序 / Mini Program:**
- Taro (React/Vue)
- Uni-app (Vue)
- 原生小程序开发 (Native)
- 微信小程序云开发 (WeChat Cloud Development)

**App 应用 / Native App:**
- Swift (iOS)
- Kotlin (Android)
- React Native (跨平台/cross-platform)
- Flutter (跨平台/cross-platform)

**桌面应用 / Desktop Application:**
- Electron (跨平台/cross-platform)
- Tauri (轻量级/lightweight)
- Flutter Desktop

**API/后端服务 / API/Backend Service:**
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
# [项目名称 / Project Name]

## 项目概览 / Project Overview

| 属性 / Property | 值 / Value |
|------|-----|
| 项目名称 / Project Name | [name] |
| 创建日期 / Created Date | [YYYY-MM-DD] |
| 技术栈 / Tech Stack | [tech-stack] |
| 项目类型 / Project Type | [type] |
| 当前状态 / Current Status | [active/completed/archived] |
| Git 仓库 / Git Repo | [repo-url] |

### 项目描述 / Project Description

[简要描述项目的目标、主要功能和业务价值 / Brief description of project goals, main features and business value]

## 功能列表 / Feature List

### 已完成 / Completed

- [ ] [功能名称 / Feature Name] - [完成日期 / Completed Date]

### 进行中 / In Progress

- [ ] [功能名称 / Feature Name]

### 计划中 / Planned

- [ ] [功能名称 / Feature Name]

## Dream Iterations

### Iteration N (YYYY-MM-DD)

**需求 / Requirement**: [简述用户想要的功能]

**方案 / Solution**: [描述采用的实现方案]

**实施 / Implementation**:
- [ ] 步骤1
- [ ] 步骤2
- [ ] 步骤3

**验证 / Verification**: 代码审核通过 ✓, 测试通过 ✓

**备注 / Notes**: [可选的补充说明]
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

### Resume Previous Development

When user wants to continue from where they left off:

1. **Read DREAM-PROJECTS.md** to find the latest incomplete iteration
2. **Check current project state** to see what's already implemented
3. **Present what's done vs what's pending** to user
4. **Ask for confirmation** before proceeding:

**Chinese:**
```
根据文档记录，您上次的 [功能名称] 开发进行到：

✅ 已完成:
- [列出已完成的部分]

🔄 待完成:
- [列出未完成的部分]

请问继续开发这个功能，还是有新功能要开发？
```

**English:**
```
According to the documentation, your previous [feature name] development was at:

✅ Completed:
- [list completed parts]

🔄 Pending:
- [list remaining parts]

Would you like to continue developing this feature, or work on a new feature?
```

### Calling External Agents

When you need specialized agents, use the Task tool with the agent type:

**Code Review:**
- Use Task tool with subagent_type="general-purpose"
- Load agent from the feature-dev plugin: `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/feature-dev/agents/code-reviewer.md`

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

**Chinese:**
```
question: "此操作不可逆。确认继续？"
header: "确认删除"
options:
  - label: "确认删除"
  - label: "取消"
```

**English:**
```
question: "This operation cannot be undone. Confirm to continue?"
header: "Confirm Delete"
options:
  - label: "Confirm Delete"
  - label: "Cancel"
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
