# DREAM-PROJECTS.md 模板

这是 DREAM-PROJECTS.md 的标准模板，用于记录项目的完整信息、需求和迭代历史。

## 模板内容

```markdown
# [项目名称]

## 项目概览

| 属性 | 值 |
|------|-----|
| 项目名称 | [name] |
| 创建日期 | [YYYY-MM-DD] |
| 技术栈 | [tech-stack] |
| 项目类型 | [type] |
| 当前状态 | [active/completed/archived] |
| Git 仓库 | [repo-url] |

### 项目描述

[简要描述项目的目标、主要功能和业务价值 - 1-3 句话]

## 功能列表

### 已完成

- [ ] [功能名称] - [完成日期]

### 进行中

- [ ] [功能名称]

### 计划中

- [ ] [功能名称]

## 技术架构

### 前端

- 框架: [React/Vue/Svelte/Other]
- 状态管理: [Redux/Context/Zustand/Other]
- UI 库: [Material UI/Ant Design/Tailwind/Other]
- 构建工具: [Vite/Webpack/Other]

### 后端

- 运行时: [Node.js/Python/Go/Rust/Other]
- 框架: [Express/FastAPI/Gin/Other]
- 数据库: [PostgreSQL/MongoDB/Redis/Other]
- API 风格: [REST/GraphQL/gRPC]

### 基础设施

- 部署平台: [Vercel/AWS/Heroku/Other]
- CI/CD: [GitHub Actions/GitLab CI/Other]
- 监控: [Sentry/DataDog/Other]

## 项目结构

```
[项目名称]/
├── src/                  # 源代码目录
│   ├── components/      # 组件
│   ├── pages/           # 页面
│   ├── services/        # 服务层
│   ├── utils/           # 工具函数
│   └── ...
├── public/              # 静态资源
├── tests/               # 测试文件
├── docs/                # 文档
├── package.json         # 依赖配置
└── README.md            # 项目说明
```

## Dream Iterations

每个功能迭代都记录在这里。

### Iteration N (YYYY-MM-DD)

**需求**: [简述用户想要的功能]

**方案**: [描述采用的实现方案]

**实施**:
- [ ] 步骤1
- [ ] 步骤2
- [ ] 步骤3

**验证**: 代码审核通过 ✓, 测试通过 ✓

**备注**: [可选的补充说明]

## 环境配置

### 开发环境

| 工具 | 版本要求 | 安装命令 |
|------|---------|---------|
| Node.js | >= 18.0.0 | nvm install 18 |
| npm | >= 9.0.0 | npm install -g npm |
| PostgreSQL | >= 14.0 | [安装链接] |

### 启动命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 运行测试
npm test

# 构建生产版本
npm run build
```

## 常见问题

### Q1: [问题描述]

**A**: [解决方案]

### Q2: [问题描述]

**A**: [解决方案]

## 里程碑

- [ ] M1: [基础项目搭建完成]
- [ ] M2: [核心功能实现]
- [ ] M3: [Beta 版本发布]
- [ ] M4: [正式版本发布]

## 贡献指南

### 开发流程

1. 创建功能分支: `git checkout -b feature/xxx`
2. 开发并测试
3. 提交代码: `git commit -m "feat: 添加xxx功能"`
4. 推送分支: `git push origin feature/xxx`
5. 创建 Pull Request

### 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 格式化代码
- 提交信息遵循 Conventional Commits 规范

## 附录

### 参考资源

- [文档链接]
- [API 文档]
- [设计稿]

### 相关人员

| 角色 | 姓名 | 联系方式 |
|------|------|---------|
| 开发者 | [Name] | [Email] |
| 产品经理 | [Name] | [Email] |
```

## 使用说明

1. **创建时机**: 在用户确认项目规划后生成
2. **更新时机**: 每次完成一个功能迭代后更新
3. **保存位置**: 项目根目录 `DREAM-PROJECTS.md`

## 示例

以下是一个完整的示例:

```markdown
# TaskMaster Pro

## 项目概览

| 属性 | 值 |
|------|-----|
| 项目名称 | TaskMaster Pro |
| 创建日期 | 2026-02-28 |
| 技术栈 | React + Node.js + PostgreSQL |
| 项目类型 | Web 应用 |
| 当前状态 | active |
| Git 仓库 | https://github.com/user/taskmaster |

### 项目描述

一个面向团队的协作文档管理工具，支持实时协作、版本控制和权限管理。

## 功能列表

### 已完成

- [x] 用户注册登录 - 2026-02-28
- [x] 项目创建和管理 - 2026-03-01

### 进行中

- [ ] 文档实时协作

### 计划中

- [ ] 版本控制系统
- [ ] 权限管理模块

## Dream Iterations

### Iteration 1 (2026-02-28)

**需求**: 用户登录功能

**方案**: 使用 JWT 实现 REST API 认证

**实施**:
- [x] 创建 User 模型
- [x] 实现注册/登录 API
- [x] 添加中间件验证
- [x] 集成 JWT

**验证**: 代码审核通过 ✓, 测试通过 ✓

**备注**: 使用 bcrypt 进行密码哈希

### Iteration 2 (2026-03-01)

**需求**: 项目创建和管理

**方案**: 前后端分离实现 CRUD

**实施**:
- [x] 创建 Project 模型
- [x] 实现项目 CRUD API
- [x] 开发前端项目列表页面
- [x] 添加项目详情页面

**验证**: 代码审核通过 ✓, 测试通过 ✓
```
