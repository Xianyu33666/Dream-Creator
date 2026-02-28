<!-- Language Selector (Works in browsers with JS enabled) -->
<!-- For GitHub: use the links below -->
<p align="right">
  <strong>Language:</strong>
  <a href="README.md">English</a> |
  <a href="README-zh-CN.md">简体中文</a> |
  <a href="README-zh-TW.md">繁體中文</a>
</p>

<!-- Local viewer language switcher (works in browsers) -->
<details id="lang-switcher" style="display: none;">
  <summary>🌐 Switch Language / 切换语言 / 切換語言</summary>
  <div style="padding: 10px; margin-top: 10px;">
    <button onclick="showLang('en')" style="padding: 5px 10px; margin: 2px; cursor: pointer;">English</button>
    <button onclick="showLang('zh-CN')" style="padding: 5px 10px; margin: 2px; cursor: pointer;">简体中文</button>
    <button onclick="showLang('zh-TW')" style="padding: 5px 10px; margin: 2px; cursor: pointer;">繁體中文</button>
  </div>
</details>

<!-- English Content (Default) -->
<div id="content-en">

# Dream Creator

<p align="center">
  <a href="https://claude.com/claude-code">
    <img src="https://img.shields.io/badge/Claude%20Code-Skill-4B58C7?style=flat&logo=anthropic" alt="Claude Code Skill">
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
  <img src="https://img.shields.io/github/stars/yourusername/dream-creator" alt="Stars">
  <img src="https://img.shields.io/github/forks/yourusername/dream-creator" alt="Forks">
</p>

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
git clone https://github.com/yourusername/dream-creator.git
cd dream-creator

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
├── README.md                   # This file
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

Use Dream Creator to turn your ideas into reality!

</div>

<!-- Chinese Simplified -->
<div id="content-zh-CN" style="display: none;">

# Dream Creator

<p align="center">
  <a href="https://claude.com/claude-code">
    <img src="https://img.shields.io/badge/Claude%20Code-Skill-4B58C7?style=flat&logo=anthropic" alt="Claude Code Skill">
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

AI 应用孵化器 - Claude Code Skill，帮助用户交互式地创建应用。

## 简介

Dream Creator 是一个 Claude Code Skill，通过交互式对话帮助用户创建应用。它协调多个专业代理完成项目创建和功能迭代。

## 功能特性

- **交互式项目创建** - 2-5 轮需求引导对话
- **现有项目分析** - 理解和文档化现有项目
- **框架智能推荐** - 根据需求推荐最合适的技术栈
- **自动环境搭建** - 自动检测环境并安装依赖
- **功能迭代** - 协调代码审核和测试进行持续开发
- **DREAM 迭代概念** - 每次功能添加都是一次 "Dream Iteration"

## 快速开始

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/dream-creator.git
cd dream-creator

# 运行安装脚本
# Linux/macOS
chmod +x install.sh
./install.sh

# Windows
.\install.ps1
```

### 使用

在 Claude Code 中调用：

```
/dream-creator
```

## 工作流

```
用户调用 /dream-creator
        │
        ▼
检测当前目录 ─┬─ 有项目 → 项目分析 → 生成/更新 DREAM-PROJECTS.md
            │
            └─ 空目录 → 需求引导对话 (2-5轮)
                           │
                           ▼
                    提供 3-5 个建议
                           │
                           ▼
                    确认功能需求
                           │
                           ▼
                    框架推荐 (渐进式)
                           │
                           ▼
                    生成 DREAM-PROJECTS.md
                           │
                           ▼
                    自动安装依赖 + 环境搭建
                           │
                           ▼
                    进入功能迭代模式
```

## 目录结构

```
dream-creator/
├── SKILL.md                    # 主 Skill 定义
├── README.md                   # 本文件
├── LICENSE                     # MIT 许可证
├── install.sh                  # Linux/macOS 安装脚本
├── install.ps1                 # Windows 安装脚本
├── agents/
│   └── environment-setup.md   # 环境搭建代理
└── references/
    ├── dream-template.md      # 项目文档模板
    └── framework-guide.md     # 框架选择指南
```

## 支持的 AI 工具

- Claude Code
- Cursor
- OpenCode
- 其他支持 Claude Skills 的衍生工具

## 文档

- [SKILL.md](./SKILL.md) - 完整 Skill 定义
- [框架选择指南](./references/framework-guide.md) - 技术栈选择参考
- [项目模板](./references/dream-template.md) - DREAM-PROJECTS.md 模板

## 许可证

MIT License - see [LICENSE](./LICENSE) for details.

---

使用 Dream Creator，让你的创意变为现实！

</div>

<!-- Chinese Traditional -->
<div id="content-zh-TW" style="display: none;">

# Dream Creator

<p align="center">
  <a href="https://claude.com/claude-code">
    <img src="https://img.shields.io/badge/Claude%20Code-Skill-4B58C7?style=flat&logo=anthropic" alt="Claude Code Skill">
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

AI 應用孵化器 - Claude Code Skill，幫助使用者互動式地建立應用。

## 簡介

Dream Creator 是一個 Claude Code Skill，透過互動對話幫助使用者建立應用。它協調多個專業代理完成專案建立和功能迭代。

## 功能特性

- **互動式專案建立** - 2-5 輪需求引導對話
- **現有專案分析** - 理解和文件化現有專案
- **框架智慧推薦** - 根據需求推薦最合適的技術棧
- **自動環境搭建** - 自動檢測環境並安裝依賴
- **功能迭代** - 協調程式碼審核和測試進行持續開發
- **DREAM 迭代概念** - 每次功能添加都是一次 "Dream Iteration"

## 快速開始

### 安裝

```bash
# 複製儲存庫
git clone https://github.com/yourusername/dream-creator.git
cd dream-creator

# 執行安裝腳本
# Linux/macOS
chmod +x install.sh
./install.sh

# Windows
.\install.ps1
```

### 使用

在 Claude Code 中呼叫：

```
/dream-creator
```

## 工作流程

```
使用者呼叫 /dream-creator
        │
        ▼
檢測當前目錄 ─┬─ 有專案 → 專案分析 → 生成/更新 DREAM-PROJECTS.md
            │
            └─ 空目錄 → 需求引導對話 (2-5輪)
                           │
                           ▼
                    提供 3-5 個建議
                           │
                           ▼
                    確認功能需求
                           │
                           ▼
                    框架推薦 (漸進式)
                           │
                           ▼
                    生成 DREAM-PROJECTS.md
                           │
                           ▼
                    自動安裝依賴 + 環境搭建
                           │
                           ▼
                    進入功能迭代模式
```

## 目錄結構

```
dream-creator/
├── SKILL.md                    # 主 Skill 定義
├── README.md                   # 本文件
├── LICENSE                     # MIT 授權
├── install.sh                  # Linux/macOS 安裝腳本
├── install.ps1                 # Windows 安裝腳本
├── agents/
│   └── environment-setup.md   # 環境搭建代理
└── references/
    ├── dream-template.md      # 專案文件模板
    └── framework-guide.md     # 框架選擇指南
```

## 支援的 AI 工具

- Claude Code
- Cursor
- OpenCode
- 其他支援 Claude Skills 的衍生工具

## 文件

- [SKILL.md](./SKILL.md) - 完整 Skill 定義
- [框架選擇指南](./references/framework-guide.md) - 技術棧選擇參考
- [專案模板](./references/dream-template.md) - DREAM-PROJECTS.md 模板

## 授權

MIT License - see [LICENSE](./LICENSE) for details.

---

使用 Dream Creator，讓你的創意變為現實！

</div>

<!-- Language Switcher Script -->
<script>
function showLang(lang) {
  // Hide all language sections
  document.getElementById('content-en').style.display = 'none';
  document.getElementById('content-zh-CN').style.display = 'none';
  document.getElementById('content-zh-TW').style.display = 'none';

  // Show selected language
  const selectedLang = document.getElementById('content-' + lang);
  if (selectedLang) {
    selectedLang.style.display = 'block';
  }

  // Save preference
  localStorage.setItem('dream-creator-lang', lang);
}

// Initialize language switcher visibility
document.addEventListener('DOMContentLoaded', function() {
  // Show language switcher in browser (hide on GitHub)
  if (window.location.protocol !== 'file:' && !window.location.hostname.includes('github.com')) {
    document.getElementById('lang-switcher').style.display = 'block';
  }

  // Load saved language preference
  const savedLang = localStorage.getItem('dream-creator-lang') || 'en';
  showLang(savedLang);
});
</script>
