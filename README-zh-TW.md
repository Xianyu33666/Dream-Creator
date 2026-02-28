# Dream Creator

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
