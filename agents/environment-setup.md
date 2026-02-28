# Environment Setup Agent

This agent is responsible for detecting system environment, analyzing project dependencies, and automatically setting up the development environment.

## Responsibilities

1. **Environment Detection**: Detect installed tools (Node.js, Python, Go, Rust, Java, etc.)
2. **Dependency Analysis**: Analyze project dependencies from package files
3. **Auto Installation**: Automatically install required dependencies
4. **Problem Resolution**: Handle common environment issues
5. **Verification**: Verify the project runs correctly after setup

## Usage

This agent is called by the dream-creator skill when setting up a new project or checking existing project environment.

## Environment Detection

### Check System Tools

Run commands to detect installed tools:

```bash
# Check Node.js
node --version
npm --version

# Check Python
python --version
pip --version

# Check Go
go --version

# Check Rust
rustc --version
cargo --version

# Check Java
java -version

# Check Docker
docker --version
docker-compose --version
```

### Project Type Detection

Detect project type from dependency files:

| File | Project Type |
|------|-------------|
| package.json | Node.js/JavaScript project |
| requirements.txt | Python project |
| pyproject.toml | Python project (modern) |
| Cargo.toml | Rust project |
| go.mod | Go project |
| pom.xml | Java Maven project |
| build.gradle | Java Gradle project |
| composer.json | PHP project |
| Gemfile | Ruby project |

## Dependency Installation

### Node.js Projects

```bash
# Install dependencies
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### Python Projects

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# or
venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Or with poetry
poetry install
```

### Go Projects

```bash
go mod download
go mod tidy
```

### Rust Projects

```bash
cargo build
```

## Common Issues and Solutions

### Node.js Issues

1. **Permission errors**: Use `npm install --legacy-peer-deps` or fix npm permissions
2. **Version mismatch**: Use `nvm` to switch Node.js versions
3. **Module not found**: Clear cache with `npm ci` or delete node_modules

### Python Issues

1. **Missing virtual environment**: Create and activate venv first
2. **Package conflicts**: Use `pipenv` or `poetry` for dependency management
3. **Wrong Python version**: Use `pyenv` or specify version explicitly

### General Issues

1. **Slow installation**: Use mirror registries (e.g., npm.taobao.org)
2. **Network issues**: Check proxy settings
3. **Missing system dependencies**: Install required system packages

## Verification

After installation, verify the project works:

### Node.js

```bash
# Check if project runs
npm run dev
# or
npm start
```

### Python

```bash
# Run a simple test
python -c "import [module]; print('OK')"
```

### Test Commands

Provide users with the correct test command based on project type:

- Node.js: `npm test`, `npm run test`, or `npx jest`
- Python: `pytest`, `python -m pytest`, or `tox`
- Go: `go test ./...`
- Rust: `cargo test`

## Output Format

Return results in this format:

```markdown
## Environment Setup Report

### Detected Environment
- Node.js: v20.x.x
- npm: 10.x.x
- Python: Not detected

### Project Analysis
- Project Type: Node.js Web Application
- Framework: Express.js
- Dependencies: 45 packages

### Installation Results
- ✓ Dependencies installed successfully
- ✓ Development server can start
- ✓ Basic functionality verified

### Test Command
Run `npm test` to execute tests

### Next Steps
1. Run `npm run dev` to start development server
2. Access http://localhost:3000 to verify
3. Start implementing your first feature
```

## Error Handling

If installation fails:

1. **Capture error message**: Save the full error output
2. **Identify root cause**: Determine if it's a network, permission, or compatibility issue
3. **Attempt fix**: Try alternative approaches
4. **Report to user**: Explain the issue and suggest manual fixes if automatic resolution fails
