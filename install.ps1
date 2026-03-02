# Dream Creator Skill 安装脚本 (Wrapper)
# 统一调用 bin/install.js 进行安装
# Windows PowerShell / PowerShell 7+

$ErrorActionPreference = "Stop"

# 检测 PowerShell 版本
$IsWindowsPowerShell = $PSVersionTable.PSVersion.Major -lt 7

# 颜色定义
if ($IsWindowsPowerShell) {
    # Windows PowerShell: 使用内置颜色
    $Red = "Red"
    $Green = "Green"
    $Yellow = "Yellow"
    $Cyan = "Cyan"
    $Reset = "White"
} else {
    # PowerShell 7+: 使用 ANSI 颜色
    $Red = "`e[31m"
    $Green = "`e[32m"
    $Yellow = "`e[33m"
    $Cyan = "`e[36m"
    $Reset = "`e[0m"
}

# 获取脚本所在目录
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# 检查 Node.js 是否安装
$NodePath = Get-Command node -ErrorAction SilentlyContinue

if (-not $NodePath) {
    Write-Host ""
    Write-Host "==========================================" -ForegroundColor $Red
    Write-Host "  错误: 未找到 Node.js" -ForegroundColor $Red
    Write-Host "==========================================" -ForegroundColor $Red
    Write-Host ""
    Write-Host "Dream Creator 安装需要 Node.js 环境。" -ForegroundColor $Yellow
    Write-Host ""
    Write-Host "请选择以下方式之一安装:"
    Write-Host ""
    Write-Host "1. 安装 Node.js (推荐):"
    Write-Host "   • 官网下载: https://nodejs.org/"
    Write-Host "   • Windows: winget install OpenJS.NodeJS"
    Write-Host "   • Chocolatey: choco install nodejs"
    Write-Host ""
    Write-Host "2. 或使用 npm 直接安装:"
    Write-Host "   npm install -g dream-creator"
    Write-Host ""
    exit 1
}

# 检查 install.js 是否存在
$InstallJs = Join-Path $ScriptDir "bin\install.js"
if (-not (Test-Path $InstallJs)) {
    Write-Host "错误: 找不到安装脚本 $InstallJs" -ForegroundColor $Red
    exit 1
}

# 传递所有参数给 install.js
& node "$InstallJs" @args
