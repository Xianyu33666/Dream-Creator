#!/usr/bin/env node

/**
 * Dream Creator Skill 安装器
 * 支持跨平台: Windows, macOS, Linux
 *
 * 使用方式:
 *   npx dream-creator
 *   npm install -g dream-creator
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// 获取包目录
const pkgDir = path.dirname(__dirname);

// 颜色定义
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`  ✓ ${message}`, 'green');
}

function logSkip(message) {
  log(`  - ${message}`, 'gray');
}

function logError(message) {
  log(`  ✗ ${message}`, 'red');
}

function logInfo(message) {
  log(`  ${message}`, 'yellow');
}

// 获取用户主目录
function getHomeDir() {
  return os.homedir();
}

// 检测操作系统
function getPlatform() {
  return os.platform();
}

// 检查目录是否存在
function dirExists(dir) {
  try {
    return fs.existsSync(dir) && fs.statSync(dir).isDirectory();
  } catch {
    return false;
  }
}

// 创建目录
function ensureDir(dir) {
  if (!dirExists(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 复制目录
function copyDir(src, dest) {
  ensureDir(dest);

  // 需要复制的文件和目录
  const includeItems = [
    'SKILL.md',
    'agents',
    'references',
    'README.md',
    'README-zh-CN.md',
    'README-zh-TW.md',
    'README.install.md',
    'LICENSE'
  ];

  // 排除的文件和目录
  const excludeItems = [
    '.git',
    '.github',
    'node_modules',
    'bin',
    'install.ps1',
    'install.sh',
    'package.json',
    '.gitignore'
  ];

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    // 跳过排除的项目
    if (excludeItems.includes(entry.name)) {
      continue;
    }

    // 只复制包含的项目
    if (!includeItems.includes(entry.name)) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 安装到指定工具
function installToTool(toolName, toolDir) {
  logInfo(`检测到: ${toolName}`);

  // 确保目录存在
  if (!dirExists(toolDir)) {
    try {
      ensureDir(toolDir);
    } catch (err) {
      logError(`${toolName}: 无法创建目录 - ${err.message}`);
      return false;
    }
  }

  const skillDir = path.join(toolDir, 'dream-creator');

  if (dirExists(skillDir)) {
    logSkip(`${toolName}: 已安装，跳过`);
    return true;
  } else {
    try {
      copyDir(pkgDir, toolDir);
      logSuccess(`${toolName}: 安装成功`);
      return true;
    } catch (err) {
      logError(`${toolName}: 安装失败 - ${err.message}`);
      return false;
    }
  }
}

// 主安装函数
function install() {
  const platform = getPlatform();
  const homeDir = getHomeDir();

  log('==========================================', 'cyan');
  log('  Dream Creator Skill 安装器', 'cyan');
  log('==========================================', 'cyan');
  log('');

  let installed = 0;
  let skipped = 0;

  // 定义安装目录映射
  const tools = [];

  // Claude Code 支持两个目录：
  // 1. ~/.claude/skills/dream-creator (新建目录)
  // 2. ~/.claude/plugins/skills/dream-creator (plugins 目录)

  const claudeCodeDirs = [
    path.join(homeDir, '.claude', 'skills', 'dream-creator'),
    path.join(homeDir, '.claude', 'plugins', 'skills', 'dream-creator')
  ];

  if (platform === 'win32') {
    // Windows
    // Claude Code - 两个目录都安装
    for (const dir of claudeCodeDirs) {
      tools.push({ name: 'Claude Code', dir: dir });
    }
    tools.push({
      name: 'Cursor',
      dir: path.join(homeDir, '.cursor', 'plugins', 'skills')
    });
    tools.push({
      name: 'OpenCode',
      dir: path.join(homeDir, '.opencode', 'plugins', 'skills')
    });
  } else {
    // macOS / Linux
    // Claude Code - 两个目录都安装
    for (const dir of claudeCodeDirs) {
      tools.push({ name: 'Claude Code', dir: dir });
    }
    tools.push({
      name: 'Cursor',
      dir: path.join(homeDir, '.cursor', 'plugins', 'skills')
    });
    tools.push({
      name: 'OpenCode',
      dir: path.join(homeDir, '.opencode', 'plugins', 'skills')
    });
    tools.push({
      name: 'VS Code (Claude)',
      dir: path.join(homeDir, '.vscode', 'extensions', 'claude.skills')
    });
  }

  log('正在安装 Dream Creator Skill...');
  log('');

  for (const tool of tools) {
    if (installToTool(tool.name, tool.dir)) {
      installed++;
    } else {
      skipped++;
    }
  }

  log('');
  log('==========================================', 'cyan');
  log('安装完成!', 'green');
  log('==========================================', 'cyan');
  log('');
  log('使用方法:');
  log('  在支持 Skills 的 AI 工具中输入: /dream-creator');
  log('');
  log('支持的工具:');
  log('  - Claude Code');
  log('  - Cursor');
  log('  - OpenCode');
  log('');
}

// 执行安装
install();
