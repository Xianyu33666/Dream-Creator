#!/bin/bash

# Dream Creator Skill 安装脚本 (Wrapper)
# 统一调用 bin/install.js 进行安装
# 支持 Linux, macOS, WSL

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo ""
    echo -e "${RED}==========================================${NC}"
    echo -e "${RED}  错误: 未找到 Node.js${NC}"
    echo -e "${RED}==========================================${NC}"
    echo ""
    echo -e "${YELLOW}Dream Creator 安装需要 Node.js 环境。${NC}"
    echo ""
    echo "请选择以下方式之一安装:"
    echo ""
    echo "1. 安装 Node.js (推荐):"
    echo "   • macOS:   brew install node"
    echo "   • Ubuntu:  sudo apt install nodejs npm"
    echo "   • 其他:    https://nodejs.org/ 下载安装包"
    echo ""
    echo "2. 或使用 npm 直接安装:"
    echo "   npm install -g dream-creator"
    echo ""
    echo "3. Windows 用户请使用 PowerShell:"
    echo "   .\\install.ps1"
    echo ""
    exit 1
fi

# 检查 install.js 是否存在
INSTALL_JS="$SCRIPT_DIR/bin/install.js"
if [ ! -f "$INSTALL_JS" ]; then
    echo -e "${RED}错误: 找不到安装脚本 $INSTALL_JS${NC}"
    exit 1
fi

# 传递所有参数给 install.js
exec node "$INSTALL_JS" "$@"
