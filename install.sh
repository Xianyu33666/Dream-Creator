#!/bin/bash

# Dream Creator Skill 安装脚本
# 支持 Linux, macOS, WSL

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_NAME="dream-creator"

echo "=========================================="
echo "  Dream Creator Skill 安装器"
echo "=========================================="
echo ""

# 检测是否有 -Force 或 -Update 参数
FORCE_UPDATE=false
for arg in "$@"; do
    if [ "$arg" = "-Force" ] || [ "$arg" = "-Update" ] || [ "$arg" = "-u" ]; then
        FORCE_UPDATE=true
    fi
done

if [ "$FORCE_UPDATE" = true ]; then
    echo -e "\033[36m🔄 强制更新模式\033[0m"
    echo ""
fi

# 检测 AI 工具并安装
install_to_tool() {
    local tool_name=$1
    local skill_dir=$2

    echo -e "${YELLOW}检测到: ${tool_name}${NC}"

    if [ -d "$skill_dir" ]; then
        # 检查 Skill 是否已安装
        if [ -d "$skill_dir/$SKILL_NAME" ]; then
            if [ "$FORCE_UPDATE" = true ]; then
                # 删除旧目录并重新安装
                rm -rf "$skill_dir/$SKILL_NAME"
                mkdir -p "$skill_dir"
                cp -r "$SCRIPT_DIR" "$skill_dir/"
                # 排除不需要的文件
                rm -rf "$skill_dir/$SKILL_NAME/bin"
                rm -f "$skill_dir/$SKILL_NAME/install.ps1"
                rm -f "$skill_dir/$SKILL_NAME/install.sh"
                rm -f "$skill_dir/$SKILL_NAME/package.json"
                echo -e "${GREEN}  ↻ $tool_name: 更新成功${NC}"
            else
                echo -e "${YELLOW}  $tool_name: 已安装${NC}"
                echo -e "${YELLOW}    如需更新，请使用: ./install.sh -Force${NC}"
            fi
        else
            # 创建符号链接或复制
            mkdir -p "$skill_dir"
            cp -r "$SCRIPT_DIR" "$skill_dir/"
            echo -e "${GREEN}  ✓ $tool_name: 安装成功${NC}"
        fi
    else
        echo -e "${RED}  ✗ $tool_name: 未找到安装目录${NC}"
    fi
}

# 定义安装目录
CLAUDE_CODE_DIR="$HOME/.claude/plugins/skills"
CURSOR_DIR="$HOME/.cursor/plugins/skills"
OPENCODE_DIR="$HOME/.opencode/plugins/skills"
VS_CODED_DIR="$HOME/.vscode/extensions/claude.skills"
WINDOWN_USERPROFILE="$USERPROFILE"

echo "正在安装 Dream Creator Skill..."
echo ""

# 安装到各个工具
install_to_tool "Claude Code" "$CLAUDE_CODE_DIR"
install_to_tool "Cursor" "$CURSOR_DIR"
install_to_tool "OpenCode" "$OPENCODE_DIR"

# Windows 目录检查
if [ -d "$USERPROFILE/.cursor" ]; then
    WINDOWS_CURSOR_DIR="$USERPROFILE/.cursor/plugins/skills"
    install_to_tool "Cursor (Windows)" "$WINDOWS_CURSOR_DIR"
fi

echo ""
echo "=========================================="
echo -e "${GREEN}安装完成！${NC}"
echo "=========================================="
echo ""
echo "使用方法:"
echo "  在支持 Skills 的 AI 工具中输入: /dream-creator"
echo ""
echo "支持的工具:"
echo "  - Claude Code"
echo "  - Cursor"
echo "  - OpenCode"
echo ""
