<!--
Tags: ai-assistant, ai-coding, claude-code, multi-agent-system, virtual-team, development-team, ai-development
-->

**Language:** English | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

---

# Dream Creator

[![Claude Code Skill](https://img.shields.io/badge/Claude%20Code-Skill-4B58C7?style=flat&logo=anthropic)](https://claude.com/claude-code)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Xianyu33666/Dream-Creator?style=flat)](https://github.com/Xianyu33666/Dream-Creator/stargazers)
[![Forks](https://img.shields.io/github/forks/Xianyu33666/Dream-Creator?style=flat)](https://github.com/Xianyu33666/Dream-Creator/network/members)
[![GitHub Release](https://img.shields.io/github/v/release/Xianyu33666/Dream-Creator)](https://github.com/Xianyu33666/Dream-Creator/releases)
[![Last Commit](https://img.shields.io/github/last-commit/Xianyu33666/Dream-Creator)](https://github.com/Xianyu33666/Dream-Creator/commits/main)

---

## 📖 Project Description

**Dream Creator** is an **AI Application Incubator** powered by a **Virtual Development Team** of 12 specialized AI agents. It enables users to create applications through intelligent multi-agent collaboration—just like working with a real development team.

Whether you're a beginner or an experienced developer, Dream Creator helps you:
- 🚀 **Build applications from scratch** with interactive AI guidance
- 📝 **Document and analyze existing projects** automatically
- 🔄 **Iterate and develop features** with code review and testing
- 🧠 **Get architectural recommendations** from AI experts

### Who is this for?

| User Type | How Dream Creator Helps |
|-----------|----------------------|
| �beginner | No coding experience needed - AI guides you through everything |
| 🚀Startup | Fast MVP development with a virtual team |
| 👨‍💻Developer | Accelerate development with AI assistance |
| 📋PM | Easily communicate requirements to AI team |
| 🏢Enterprise | Standardize development process with AI |

---

## 🔑 Key Features

### 🤖 Multi-Agent System
- **12 Specialized AI Agents** working together
- **Product Manager, Architect, Developers, QA, DevOps** - all in one
- **Intelligent communication** between agents

### 💬 Interactive Development
- **2-5 rounds of requirement dialogue** to understand your needs
- **Real-time clarification** when requirements are unclear
- **Continuous feedback** throughout development

### 🧠 Smart Automation
- **Auto environment setup** - installs dependencies automatically
- **Framework recommendations** based on your requirements
- **Code review** - automated quality checks
- **Knowledge base** - learns from past issues

---

### ⭐ Why Dream Creator?

| Traditional AI Assistants | Dream Creator |
|-------------------------|---------------|
| Single AI responds | 12 AI agents collaborate |
| You must specify everything | AI asks clarifying questions |
| No team structure | Real development team workflow |
| No learning | FAQ learns from issues |
| Manual testing | Automated QA process |

---

**AI Application Incubator** - A virtual development team powered by AI, enabling interactive application creation through intelligent multi-agent collaboration.

---

## Introduction

Dream Creator is not just a tool—it's your **virtual development team**. When you invoke `/dream-creator`, you're not just getting a single AI assistant; you're getting a complete team of specialized agents working together to bring your ideas to life.

### What Makes Dream Creator Unique?

Unlike traditional AI coding assistants that work in isolation, Dream Creator implements a **Multi-Agent System** where different specialized agents collaborate, communicate, and hand off tasks to each other—just like a real development team.

---

## 🤖 Meet Your Virtual Team

Dream Creator consists of **12 specialized agents**, each with distinct responsibilities:

| Agent | Role | Description |
|-------|------|-------------|
| 👤 **Product Manager** | Primary | Your main point of contact. Gathers requirements, coordinates the team, and keeps you informed |
| 🏗️ **Architect** | Design | Designs technical architecture and recommends frameworks |
| 💻 **Frontend Developer** | Development | Implements UI components and frontend logic |
| ⚙️ **Backend Developer** | Development | Builds APIs, databases, and server-side logic |
| 🧪 **QA Engineer** | Quality | Creates test cases and ensures quality |
| 🔍 **Code Reviewer** | Quality | Reviews code for quality and security |
| 🚀 **DevOps Engineer** | Operations | Handles deployment, CI/CD, and infrastructure |
| 🔧 **Environment Setup** | Operations | Detects environment and installs dependencies |
| 🐛 **Debugger** | Support | Diagnoses and fixes bugs |
| 📝 **Tech Writer** | Support | Generates documentation |
| 📚 **FAQ Agent** | Support | Manages knowledge base and common issues |
| 👋 **Welcome Agent** | Support | First-time user guidance and project detection |

---

## ✨ Features

- **Interactive Project Creation** - 2-5 rounds of requirement gathering dialogue
- **Smart Framework Recommendation** - AI-powered tech stack recommendations
- **Automated Environment Setup** - Auto-detect and install dependencies
- **Multi-Agent Collaboration** - 12 specialized agents working together
- **Intelligent Communication** - Agents communicate, escalate, and collaborate
- **Knowledge Base** - FAQ system that learns from past issues
- **Feature Iteration** - Continuous development with code review and testing
- **DREAM Iteration** - Every feature addition is a tracked "Dream Iteration"

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Xianyu33666/Dream-Creator.git
cd Dream-Creator

# Run the install script
# Linux/macOS
chmod +x install.sh
./install.sh

# Windows
.\install.ps1
```

### Usage

Invoke in Claude Code:

```
/dream-creator
```

---

## 🔄 How Agents Collaborate

Dream Creator implements intelligent **agent-to-agent communication**. Here are some key scenarios:

### Scenario 1: Incident Response (DevOps → Developer → Reviewer → QA → DevOps)

```
🐛 DevOps finds error → 💻 Developer fixes → 🔍 Reviewer approves → 🧪 QA tests → 🚀 DevOps deploys
```

### Scenario 2: Architecture Consultation (Developer ↔ Architect)

```
💻 Developer has a question → 🏗️ Architect provides solution → 💻 Developer implements
```

### Scenario 3: Requirement Clarification (Developer → PM → User → PM → Developer)

```
💻 Unclear requirement → 👤 PM asks user → 👤 PM clarifies → 💻 Developer implements
```

### Scenario 4: Bug Reporting (QA → Developer)

```
🧪 QA finds bug → 💻 Developer fixes → 🔍 Reviewer re-checks → 🧪 QA verifies
```

### Scenario 5: Knowledge Building (Developer → FAQ)

```
💻 Solves a problem → 📚 FAQ Agent documents → Future: Instant answers
```

---

## 📊 Workflow

```
User calls /dream-creator
        │
        ▼
┌───────────────────────────────────┐
│  Phase 0: Welcome & Detection     │
│  👋 Welcome Agent + 👤 PM        │
└────────────────┬──────────────────┘
                 │
                 ▼
┌───────────────────────────────────┐
│  Phase 1: Requirement Gathering  │
│  👤 Product Manager (Primary)    │
└────────────────┬──────────────────┘
                 │
                 ▼
┌───────────────────────────────────┐
│  Phase 2: Technical Design        │
│  🏗️ Architect + 👤 PM           │
└────────────────┬──────────────────┘
                 │
                 ▼
┌───────────────────────────────────┐
│  Phase 3: Project Generation      │
│  🏗️ Architect + 🔧 Environment  │
└────────────────┬──────────────────┘
                 │
                 ▼
┌───────────────────────────────────┐
│  Phase 4: Feature Iteration       │
│  Full Team Rotation              │
│  👤 PM → 🏗️ → 💻 → 🧪 → 🔍    │
│  → 🚀 → 📚 → 👤 (cycle)         │
└───────────────────────────────────┘
```

---

## 📁 Directory Structure

```
dream-creator/
├── SKILL.md                         # Main Skill Definition
├── README.md                        # English Documentation
├── README.zh-CN.md                  # Simplified Chinese
├── README.zh-TW.md                  # Traditional Chinese
├── LICENSE                          # MIT License
├── install.sh                       # Linux/macOS Install Script
├── install.ps1                      # Windows Install Script
├── agents/
│   ├── welcome-agent.md             # Welcome & Detection
│   ├── product-manager.md          # Product Manager (Primary)
│   ├── code-architect.md            # Architecture Design
│   ├── frontend-developer.md        # Frontend Development
│   ├── backend-developer.md         # Backend Development
│   ├── qa-engineer.md              # QA & Testing
│   ├── code-reviewer.md             # Code Review
│   ├── devops-engineer.md          # DevOps & Deployment
│   ├── environment-setup.md         # Environment Setup
│   ├── debugger.md                  # Debugging
│   ├── tech-writer.md               # Documentation
│   ├── faq-agent.md                # Knowledge Base
│   └── communication-protocol.md    # Agent Communication
└── references/
    ├── dream-template.md            # Project Documentation Template
    └── framework-guide.md           # Tech Stack Selection Guide
```

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [SKILL.md](./SKILL.md) | Complete Skill Definition with all workflows |
| [Communication Protocol](./agents/communication-protocol.md) | Agent-to-agent collaboration patterns |
| [Framework Guide](./references/framework-guide.md) | Tech Stack Selection Reference |
| [Project Template](./references/dream-template.md) | DREAM-PROJECTS.md Template |

---

## 🛠️ Supported AI Tools

- Claude Code
- Cursor
- OpenCode
- Other Claude-derived tools with Skills support

---

## 🔐 Communication Protocol

All agents communicate using a standardized protocol:

```markdown
## Agent Communication

**From**: [Source Agent]
**To**: [Target Agent]
**Type**: [Request/Response/Escalation/Feedback/Notification]
**Priority**: [Critical/High/Medium/Low]

---
### Subject: [Brief Description]

### Details
[Detailed information]

### Required Action
[What the receiver needs to do]
```

### Priority Levels

| Priority | Use Case | Response Time |
|----------|----------|---------------|
| **Critical** | Production bugs, security | Immediate |
| **High** | Blocking issues | < 1 hour |
| **Medium** | Questions, clarifications | < 4 hours |
| **Low** | Knowledge sharing | < 24 hours |

---

## 💡 Why Multi-Agent?

Traditional AI assistants work alone. Dream Creator works as a **team**:

1. **Specialization**: Each agent is an expert in its domain
2. **Collaboration**: Agents communicate and hand off tasks
3. **Escalation**: Questions flow to the right expert
4. **Knowledge Sharing**: Solutions are documented for future reference
5. **Quality Assurance**: Multiple agents review and test each change

---

## 🤝 Contributing

Contributions welcome! Please feel free to submit issues and pull requests.

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

*Turn your ideas into reality with Dream Creator — Your AI Development Team* 🚀
