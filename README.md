**Language:** English | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md)

---

# Dream Creator

[![Claude Code Skill](https://img.shields.io/badge/Claude%20Code-Skill-4B58C7?style=flat&logo=anthropic)](https://claude.com/claude-code)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Xianyu33666/Dream-Creator?style=flat)](https://github.com/Xianyu33666/Dream-Creator/stargazers)
[![Forks](https://img.shields.io/github/forks/Xianyu33666/Dream-Creator?style=flat)](https://github.com/Xianyu33666/Dream-Creator/network/members)

AI Application Incubator - Claude Code Skill for interactive application creation.

## Introduction

Dream Creator is a Claude Code Skill that helps users create applications through interactive dialogue. It coordinates multiple specialized agents to complete project creation and feature iteration.

## Features

- **Interactive Project Creation** - 2-5 rounds of requirement gathering dialogue
- **Existing Project Analysis** - Understand and document existing projects
- **Smart Framework Recommendation** - Recommend the most suitable tech stack based on requirements
- **Automated Environment Setup** - Automatically detect environment and install dependencies
- **Feature Iteration** - Coordinate code review and testing for continuous development
- **DREAM Iteration Concept** - Every feature addition is a "Dream Iteration"

## Quick Start

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

## Directory Structure

```
dream-creator/
├── SKILL.md                    # Main Skill Definition
├── README.md                   # This file (English)
├── README.zh-CN.md           # Simplified Chinese
├── README.zh-TW.md           # Traditional Chinese
├── LICENSE                     # MIT License
├── install.sh                  # Linux/macOS Install Script
├── install.ps1                 # Windows Install Script
├── agents/
│   └── environment-setup.md   # Environment Setup Agent
└── references/
    ├── dream-template.md      # Project Documentation Template
    └── framework-guide.md     # Framework Selection Guide
```

## Supported AI Tools

- Claude Code
- Cursor
- OpenCode
- Other Claude-derived tools with Skills support

## Documentation

- [SKILL.md](./SKILL.md) - Complete Skill Definition
- [Framework Guide](./references/framework-guide.md) - Tech Stack Selection Reference
- [Project Template](./references/dream-template.md) - DREAM-PROJECTS.md Template

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

*Use Dream Creator to turn your ideas into reality!*
