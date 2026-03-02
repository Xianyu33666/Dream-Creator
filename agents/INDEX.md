# Agent Quick Reference Index

This file provides a quick reference for all agents in Dream Creator.

---

## 📋 Index by Phase

| Phase | Primary Agent | Secondary Agents | Load From |
|-------|---------------|------------------|------------|
| **Phase 0: Welcome** | Welcome Agent | Product Manager | `welcome-agent.md` |
| **Phase 1: Requirements** | Product Manager | - | `product-manager.md` |
| **Phase 2: Design** | Architect | Product Manager | `code-architect.md` |
| **Phase 3: Generation** | Architect | Environment Setup | `code-architect.md`, `environment-setup.md` |
| **Phase 4: Iteration** | Product Manager | Full Team | See rotation below |

---

## 👥 Index by Role

### Primary (Communication)

| Agent | When to Use | File |
|-------|--------------|------|
| **Product Manager** | User communication, task coordination | `product-manager.md` |
| **Welcome Agent** | First-time detection, project scanning | `welcome-agent.md` |

### Design & Architecture

| Agent | When to Use | File |
|-------|--------------|------|
| **Architect** | Technical design, framework recommendation | `code-architect.md` |

### Implementation

| Agent | When to Use | File |
|-------|--------------|------|
| **Frontend Developer** | UI implementation, frontend logic | `frontend-developer.md` |
| **Backend Developer** | API development, server logic | `backend-developer.md` |

### Quality & Testing

| Agent | When to Use | File |
|-------|--------------|------|
| **QA Engineer** | Test creation, quality assurance | `qa-engineer.md` |
| **Code Reviewer** | Code validation, security check | `code-reviewer.md` |

### Operations

| Agent | When to Use | File |
|-------|--------------|------|
| **DevOps Engineer** | Deployment, CI/CD | `devops-engineer.md` |
| **Environment Setup** | Environment detection, dependency install | `environment-setup.md` |

### Support

| Agent | When to Use | File |
|-------|--------------|------|
| **Debugger** | Error diagnosis, bug fixing | `debugger.md` |
| **Tech Writer** | Documentation generation | `tech-writer.md` |
| **FAQ Agent** | Knowledge base, common issues | `faq-agent.md` |

---

## 🔍 Index by Problem Type

| Problem Type | Agent to Call |
|-------------|---------------|
| "How to start?" | Welcome Agent |
| "What features?" | Product Manager |
| "What tech stack?" | Architect |
| "Implement UI" | Frontend Developer |
| "Build API" | Backend Developer |
| "Write tests" | QA Engineer |
| "Review code" | Code Reviewer |
| "Deploy app" | DevOps Engineer |
| "Setup env" | Environment Setup |
| "Fix bug" | Debugger |
| "Write docs" | Tech Writer |
| "Common issue?" | FAQ Agent |

---

## 🔄 Agent Rotation Pattern

### Feature Iteration Flow

```
User Request
    │
    ▼
Product Manager (receive & clarify)
    │
    ▼
Architect (design)
    │
    ├─→ Frontend Developer
    └─→ Backend Developer
    │
    ▼
QA Engineer (test)
    │
    ▼
Code Reviewer (review)
    │
    ├─→ Fix Issues (loop back)
    └─→ Approve
    │
    ▼
DevOps (deploy)
    │
    ▼
Product Manager (update docs)
```

---

## 📞 Communication Protocol Quick Reference

### Message Format

```markdown
**From**: [Agent]
**To**: [Agent]
**Type**: Request|Response|Escalation|Feedback|Notification
**Priority**: Critical|High|Medium|Low
```

### Priority Response Time

| Priority | Response Time |
|----------|---------------|
| Critical | Immediate |
| High | < 1 hour |
| Medium | < 4 hours |
| Low | < 24 hours |

---

## ⚡ Quick Commands

| Task | Command |
|------|---------|
| Start new project | `/dream-creator` |
| Check status | Read `~/.claude/dream-creator/state.json` |
| Resume session | State file exists → Continue |
| Get help | Ask Product Manager |

---

## 📁 File Location Reference

```
~/.claude/dream-creator/
├── state.json          # Current session state
├── history/           # Conversation history
└── cache/            # Temporary cache

Project/
├── DREAM-PROJECTS.md  # Project documentation
└── docs/FAQ/         # Knowledge base
```

---

*Last updated: 2026-03-02*
