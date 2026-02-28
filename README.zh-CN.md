**Language:** [English](README.md) | 简体中文 | [繁體中文](README.zh-TW.md)

---

# Dream Creator

[![Claude Code Skill](https://img.shields.io/badge/Claude%20Code-Skill-4B58C7?style=flat&logo=anthropic)](https://claude.com/claude-code)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Xianyu33666/Dream-Creator?style=flat)](https://github.com/Xianyu33666/Dream-Creator/stargazers)
[![Forks](https://img.shields.io/github/forks/Xianyu33666/Dream-Creator?style=flat)](https://github.com/Xianyu33666/Dream-Creator/network/members)

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
git clone https://github.com/Xianyu33666/Dream-Creator.git
cd Dream-Creator

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
├── README.md                   # English
├── README.zh-CN.md            # 本文件
├── README.zh-TW.md            # 繁体中文
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

*使用 Dream Creator，让你的创意变为现实！*
