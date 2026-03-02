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

// 根目录需要复制的文件和目录（仅 Skill 所需内容）
const ROOT_INCLUDE_ITEMS = [
  'SKILL.md',      // 核心技能定义（必需）
  'agents',        // 代理定义目录
  'references'     // 参考资料目录
];

// 排除的文件和目录
const EXCLUDE_ITEMS = [
  '.git',
  '.github',
  'node_modules',
  'bin',
  'install.ps1',
  'install.sh',
  'package.json',
  '.gitignore',
  '.claude',
  '.vscode'
];

// 复制目录
// rootLevel: 是否只在根级别应用 includeItems 过滤
function copyDir(src, dest, rootLevel = true) {
  ensureDir(dest);

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    // 跳过排除的项目
    if (EXCLUDE_ITEMS.includes(entry.name)) {
      continue;
    }

    // 只在根级别应用 includeItems 过滤
    // 子目录内容全部复制
    if (rootLevel && !ROOT_INCLUDE_ITEMS.includes(entry.name)) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // 子目录递归复制时，不再应用 includeItems 过滤
      copyDir(srcPath, destPath, false);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 删除目录
function removeDir(dir) {
  if (dirExists(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// 安装到指定工具
function installToTool(toolName, toolDir, forceUpdate = false) {
  logInfo(`检测到: ${toolName}`);

  // 确保目录存在
  if (!dirExists(toolDir)) {
    try {
      ensureDir(toolDir);
    } catch (err) {
      logError(`${toolName}: 无法创建目录 - ${err.message}`);
      return { success: false, action: 'error' };
    }
  }

  // 处理 Claude Code 的特殊情况：toolDir 已经包含 skill 名称
  const skillDir = toolDir.endsWith('dream-creator') 
    ? toolDir 
    : path.join(toolDir, 'dream-creator');

  if (dirExists(skillDir)) {
    if (forceUpdate) {
      try {
        removeDir(skillDir);
        copyDir(pkgDir, skillDir);
        logSuccess(`${toolName}: 更新成功`);
        return { success: true, action: 'updated' };
      } catch (err) {
        logError(`${toolName}: 更新失败 - ${err.message}`);
        return { success: false, action: 'error' };
      }
    } else {
      logSkip(`${toolName}: 已安装，跳过 (使用 -Force 强制更新)`);
      return { success: true, action: 'skipped' };
    }
  } else {
    try {
      copyDir(pkgDir, skillDir);
      logSuccess(`${toolName}: 安装成功`);
      return { success: true, action: 'installed' };
    } catch (err) {
      logError(`${toolName}: 安装失败 - ${err.message}`);
      return { success: false, action: 'error' };
    }
  }
}

// 解析命令行参数
function parseArgs() {
  const args = process.argv.slice(2);
  return {
    force: args.includes('-Force') || args.includes('--force') || args.includes('-f'),
    update: args.includes('-Update') || args.includes('--update') || args.includes('-u')
  };
}

// 主安装函数
function install() {
  const platform = getPlatform();
  const homeDir = getHomeDir();
  const { force, update } = parseArgs();
  const forceUpdate = force || update;

  log('==========================================', 'cyan');
  log('  Dream Creator Skill 安装器', 'cyan');
  log('==========================================', 'cyan');
  log('');

  if (forceUpdate) {
    log('🔄 强制更新模式', 'cyan');
    log('');
  }

  let installed = 0;
  let skipped = 0;

  // 定义安装目录映射
  const tools = [];

  // Claude Code 个人级目录: ~/.claude/skills/
  const claudeCodeDir = path.join(homeDir, '.claude', 'skills', 'dream-creator');

  if (platform === 'win32') {
    // Windows
    // 个人级 (Claude Code)
    tools.push({ name: 'Claude Code', dir: claudeCodeDir });
    // 用户级 (Cursor)
    tools.push({
      name: 'Cursor',
      dir: path.join(homeDir, '.cursor', 'skills')
    });
    // 全局配置 (OpenCode - XDG规范)
    tools.push({
      name: 'OpenCode',
      dir: path.join(homeDir, '.config', 'opencode', 'skills')
    });
  } else {
    // macOS / Linux
    // 个人级 (Claude Code)
    tools.push({ name: 'Claude Code', dir: claudeCodeDir });
    // 用户级 (Cursor)
    tools.push({
      name: 'Cursor',
      dir: path.join(homeDir, '.cursor', 'skills')
    });
    // 全局配置 (OpenCode - XDG规范)
    tools.push({
      name: 'OpenCode',
      dir: path.join(homeDir, '.config', 'opencode', 'skills')
    });
    tools.push({
      name: 'VS Code (Claude)',
      dir: path.join(homeDir, '.vscode', 'extensions', 'claude.skills')
    });
  }

  log('正在安装 Dream Creator Skill...');
  log('');

  for (const tool of tools) {
    const result = installToTool(tool.name, tool.dir, forceUpdate);
    if (result.success && result.action === 'installed') {
      installed++;
    } else if (result.success && result.action === 'updated') {
      installed++;
    } else if (result.action === 'skipped') {
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
