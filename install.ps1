# Dream Creator Skill 安装脚本
# Windows PowerShell

$ErrorActionPreference = "Stop"

# 颜色定义
$Red = "`e[31m"
$Green = "`e[32m"
$Yellow = "`e[33m"
$Reset = "`e[0m"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  Dream Creator Skill 安装器" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 获取脚本所在目录
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$SkillName = "dream-creator"

function Install-ToTool {
    param (
        [string]$ToolName,
        [string]$SkillDir
    )

    Write-Host "检测到: $ToolName" -ForegroundColor $Yellow

    if (Test-Path $SkillDir) {
        $TargetPath = Join-Path $SkillDir $SkillName

        if (Test-Path $TargetPath) {
            Write-Host "  $ToolName : 已安装，跳过" -ForegroundColor DarkGray
        } else {
            New-Item -ItemType Directory -Force -Path $SkillDir | Out-Null
            Copy-Item -Path $ScriptDir -Destination $SkillDir -Recurse -Force
            Write-Host "  ✓ $ToolName : 安装成功" -ForegroundColor Green
        }
    } else {
        Write-Host "  ✗ $ToolName : 未找到安装目录" -ForegroundColor Red
    }
}

# 定义安装目录
$ClaudeCodeDir = "$env:USERPROFILE\.claude\plugins\skills"
$CursorDir = "$env:USERPROFILE\.cursor\plugins\skills"
$OpenCodeDir = "$env:USERPROFILE\.opencode\plugins\skills"

Write-Host "正在安装 Dream Creator Skill..."
Write-Host ""

# 安装到各个工具
Install-ToTool "Claude Code" $ClaudeCodeDir
Install-ToTool "Cursor" $CursorDir
Install-ToTool "OpenCode" $OpenCodeDir

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "安装完成!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "使用方法:"
Write-Host "  在支持 Skills 的 AI 工具中输入: /dream-creator"
Write-Host ""
Write-Host "支持的工具:"
Write-Host "  - Claude Code"
Write-Host "  - Cursor"
Write-Host "  - OpenCode"
Write-Host ""
