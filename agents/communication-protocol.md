# Agent Communication Protocol

This document defines how different agents communicate and collaborate with each other.

---

## Communication Principles

1. **Clear Roles**: Each agent knows its responsibilities
2. **Structured Messages**: Use standardized message formats
3. **Escalation Rules**: Know when to escalate to another agent
4. **Feedback Loops**: Always close the communication loop
5. **State Awareness**: Pass context along with requests

---

## Message Format

### Standard Message Structure

```markdown
## Agent Communication

**From**: [Source Agent]
**To**: [Target Agent]
**Type**: [Request/Response/Escalation/Feedback/Notification]
**Priority**: [High/Medium/Low]
**Context**:
- Project: [name]
- Phase: [current phase]
- Iteration: [number]

---

### Message Content

**Subject**: [Brief description]

**Details**:
[Detailed information]

**Required Action**:
[What the receiver needs to do]

**Attachments**:
- [Link to files/logs/context]
```

---

## Interaction Scenarios

### Scenario 1: DevOps → Developer → Code Reviewer → QA → DevOps

**Workflow**: Incident Response

```
┌────────────┐     ┌────────────┐     ┌──────────────┐     ┌───────┐     ┌──────────┐
│  DevOps    │────▶│ Developer  │────▶│ Code Reviewer│────▶│  QA   │────▶│ DevOps   │
│  Engineer  │     │            │     │              │     │Engineer│     │ Engineer │
└────────────┘     └────────────┘     └──────────────┘     └───────┘     └──────────┘
     │                   │                   │                  │               │
     │ Found error      │ Fixed code         │ Approved        │ Tests pass    │ Deploy
     │ logs            │                    │ / Rejected      │              │
     ▼                  ▼                   ▼                 ▼               ▼
```

**Example Message 1** (DevOps → Developer):

```markdown
## Agent Communication

**From**: DevOps Engineer
**To**: Backend Developer
**Type**: Escalation
**Priority**: High

---

### Subject: Production API Error - High Priority

### Details
- **Error Time**: 2026-03-02 10:30:00
- **Endpoint**: /api/users
- **Error Rate**: 500 errors, 15% of requests
- **Error Message**: "Connection refused to database"

**Error Logs**:
```
[2026-03-02 10:30:15] ERROR: Database connection timeout
[2026-03-02 10:30:16] ERROR: Connection pool exhausted
```

### Required Action
Please investigate and fix this critical issue ASAP.

### Context
- Project: User Management API
- Recent Changes: Deployed v1.2.0 2 hours ago
```

---

**Example Message 2** (Developer → Code Reviewer):

```markdown
## Agent Communication

**From**: Backend Developer
**To**: Code Reviewer
**Type**: Request
**Priority**: High

---

### Subject: Hotfix for Database Connection Issue

### Details
**Problem**: Database connection pool was exhausted due to missing connection cleanup

**Solution Applied**:
1. Added proper connection cleanup in finally block
2. Increased pool size from 10 to 20
3. Added connection health check

**Files Changed**:
- `src/db/connection.ts`
- `src/services/userService.ts`

### Required Action
Please review this hotfix and approve/reject.

### Test Results
- Unit tests: ✅ Pass
- Local integration: ✅ Pass
```

---

**Example Message 3** (Code Reviewer → QA):

```markdown
## Agent Communication

**From**: Code Reviewer
**To**: QA Engineer
**Type**: Approval
**Priority**: High

---

### Subject: Hotfix Approved - Database Connection

### Details
**Status**: ✅ APPROVED

**Changes**:
- `src/db/connection.ts` - Fixed connection cleanup
- `src/services/userService.ts` - Added error handling

**Review Notes**:
- Code quality: Good
- Security: No issues
- Performance: Improved (connection pool better managed)

### Required Action
Please run regression tests, especially:
- User login flow
- User profile update
- Concurrent requests test
```

---

### Scenario 2: Developer → Architect → Developer

**Workflow**: Architecture Consultation

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│  Developer │────▶│  Architect │────▶│  Developer │
│            │     │            │     │            │
└────────────┘     └────────────┘     └────────────┘
     │                   │                   │
     │ Need architecture│ Design solution   │ Implement
     │ clarification    │                   │
     ▼                  ▼                   ▼
```

**Example Message** (Developer → Architect):

```markdown
## Agent Communication

**From**: Frontend Developer
**To**: Architect
**Type**: Request
**Priority**: Medium

---

### Subject: Architecture Question - State Management

### Details
**Context**: Building a real-time dashboard with WebSocket updates

**Question**:
We're building a real-time dashboard that updates stock prices every second via WebSocket. Currently using React Context but experiencing performance issues.

**Options Considered**:
1. Redux - might be overkill
2. Zustand - looks promising
3. React Query - good for data fetching

**Data Flow**:
- WebSocket receives updates every 1 second
- 50+ stock symbols to track
- Multiple components need the data
- Historical data needed for charts

### Required Action
Please recommend:
1. Best state management approach
2. Architecture pattern for real-time data
3. Performance optimization strategies
```

**Response** (Architect → Developer):

```markdown
## Agent Communication

**From**: Architect
**To**: Frontend Developer
**Type**: Response
**Priority**: Medium

---

### Subject: RE: Architecture Question - State Management

### Recommendation: Zustand + Custom Hook

**Solution**:
1. **State Management**: Use Zustand
   - Lightweight (2KB)
   - Good performance
   - Easy to use with WebSocket

2. **Architecture Pattern**:
```
src/
├── stores/
│   └── useStockStore.ts    # Zustand store
├── hooks/
│   └── useWebSocket.ts    # WebSocket connection
└── components/
    └── StockDashboard/
        ├── StockList.tsx
        └── StockChart.tsx
```

3. **Performance Optimizations**:
   - Use `subscribe` selector to prevent unnecessary re-renders
   - Implement throttling for chart updates (max 10/sec)
   - Use React.memo for list items
   - Virtual scrolling for large lists

### Additional Notes
Consider using TanStack Query for historical data (separate from real-time)

### Required Action
Proceed with implementation. Let me know if you need further clarification.
```

---

### Scenario 3: Developer → Product Manager → User → PM → Developer

**Workflow**: Requirement Clarification

```
┌────────────┐     ┌─────────────┐     ┌─────────┐     ┌────────────┐     ┌───────────┐
│  Developer │────▶│    PM       │────▶│  User   │────▶│    PM      │────▶│ Developer │
│            │     │             │     │         │     │            │     │           │
└────────────┘     └─────────────┘     └─────────┘     └────────────┘     └───────────┘
     │                   │                  │                │                   │
     │ Unclear          │ Clarify with     │ Get answer    │ Clarified         │ Implement
     │ requirement      │ user             │               │ requirement       │
     ▼                  ▼                  ▼               ▼                   ▼
```

**Example Message 1** (Developer → PM):

```markdown
## Agent Communication

**From**: Backend Developer
**To**: Product Manager
**Type**: Escalation
**Priority**: Medium

---

### Subject: Requirement Clarification Needed - User Export Feature

### Details
**Context**: Working on "User Export" feature

**Unclear Points**:
1. **File Format**: Should export be CSV, Excel, or PDF?
2. **Data Scope**: All users or filtered by date/role?
3. **File Size**: Any limit on number of records?
4. **Delivery**: Download directly or email?
5. **Scheduling**: One-time or recurring?

**Current Understanding**:
- Admin wants to export user list
- Need user data (name, email, role, created date)

**Impact
- API design depends on this
- Frontend UI depends on this
- Can't proceed without clarification

### Required Action
Please clarify these questions with the user.
```

---

**Example Message 2** (PM → User):

```markdown
## Product Manager - Requirement Clarification

Hi! I need some clarification about the User Export feature you're requesting.

**Questions**:

1. **What file format do you prefer?**
   - CSV (simplest, works with Excel)
   - Excel (formatted, larger file)
   - PDF (for printing)

2. **Which users should be included?**
   - All users
   - Users by date range
   - Users by role/status

3. **How many users are we expecting?**
   - < 1000
   - 1000 - 10000
   - > 10000 (may need pagination)

4. **How would you like to receive the file?**
   - Direct download
   - Email attachment
   - Both

Please let me know your preferences so we can proceed with the best solution!
```

---

**Example Message 3** (PM → Developer):

```markdown
## Agent Communication

**From**: Product Manager
**To**: Backend Developer
**Type**: Response
**Priority**: Medium

---

### Subject: RE: Requirement Clarification - User Export

### Clarified Requirements

**User confirmed**:
1. **Format**: CSV (for simplicity)
2. **Scope**: All users, with optional date filter
3. **Size**: Up to 10,000 records (add pagination if > 1000)
4. **Delivery**: Direct download (email as v2)

**API Design**:
```
GET /api/users/export
Query params:
  - format: 'csv' (default)
  - startDate?: string
  - endDate?: string
  - role?: string
```

**Response**:
```csv
id,name,email,role,created_at
1,John Doe,john@example.com,admin,2025-01-01
...
```

### Required Action
Please proceed with implementation based on these requirements.

### Notes
- User wants this for weekly reports
- Consider adding export history in admin panel later
```

---

### Scenario 4: QA → Developer (Bug Report)

**Workflow**: Bug Reporting

```
┌───────────┐     ┌────────────┐
│    QA     │────▶│  Developer │
│  Engineer │     │            │
└───────────┘     └────────────┘
     │                   │
     │ Found bug          │ Fix and respond
     ▼                   ▼
```

**Example Message**:

```markdown
## Agent Communication

**From**: QA Engineer
**To**: Backend Developer
**Type**: Escalation
**Priority**: Medium

---

### Subject: Bug Report - User Login Returns 500

### Bug Details
**Issue**: User login returns 500 error when password contains special characters

**Steps to Reproduce**:
1. Register user with password "Test@123"
2. Log out
3. Try to log in with "Test@123"
4. Get 500 Internal Server Error

**Expected**: Login successful, return JWT token
**Actual**: 500 error

**Test Environment**:
- Node.js v20
- PostgreSQL 15
- API: POST /api/auth/login

**Error Logs**:
```
Error: Invalid password
    at hashPassword (src/utils/auth.ts:45)
    at comparePasswords (src/utils/auth.ts:52)
```

### Required Action
Please investigate and fix this bug.

### Priority
High - Affects user login
```

---

### Scenario 5: Code Reviewer → Developer (Review Feedback)

**Workflow**: Code Review Feedback

```
┌──────────────┐     ┌────────────┐
│ Code Reviewer│────▶│  Developer │
│              │     │            │
└──────────────┘     └────────────┘
     │                   │
     │ Feedback          │ Fix and re-submit
     ▼                   ▼
```

**Example Message**:

```markdown
## Agent Communication

**From**: Code Reviewer
**To**: Frontend Developer
**Type**: Feedback
**Priority**: Medium

---

### Subject: Code Review - Feature: User Profile Page

### Review Status: ⚠️ NEEDS CHANGES

### Issues Found

#### 🔴 Critical (Must Fix)
| File | Line | Issue | Suggestion |
|------|------|-------|------------|
| ProfilePage.tsx | 45 | XSS vulnerability | Sanitize user input |
| ProfilePage.tsx | 78 | No loading state | Add loading indicator |

#### 🟡 Warning (Should Fix)
| File | Line | Issue | Suggestion |
|------|------|-------|------------|
| ProfilePage.tsx | 23 | Magic numbers | Extract to constants |
| ProfilePage.tsx | 56 | Duplicate code | Extract to helper |

### Positive Notes
- Good component structure
- Proper TypeScript usage
- Nice UI design

### Required Action
1. Fix critical security issue (XSS)
2. Add loading state
3. Address warnings (optional)

### Next Steps
Fix issues and re-submit for review
```

---

### Scenario 6: Environment Setup → Architect (Tech Selection)

**Workflow**: Technology Consultation

```
┌──────────────────┐     ┌────────────┐
│ Environment Setup│────▶│  Architect │
│      Agent      │     │            │
└──────────────────┘     └────────────┘
     │                        │
     │ Need tech advice       │ Recommend solution
     ▼                        ▼
```

**Example Message**:

```markdown
## Agent Communication

**From**: Environment Setup Agent
**To**: Architect
**Type**: Request
**Priority**: Low

---

### Subject: Technology Recommendation Needed

### Context
Setting up new project but need architecture input:

**Project Requirements**:
- Type: Real-time chat application
- Users: 10,000 concurrent
- Features: WebSocket, file upload, video calls (future)

**Detected Environment**:
- Node.js: ✅ v20 installed
- Python: ✅ v3.11 installed
- Database: PostgreSQL available

### Questions
1. Which backend framework for WebSocket?
   - Node.js + Socket.io
   - Node.js + ws (native)
   - Python + FastAPI

2. Should we add Redis for caching?

### Required Action
Please recommend technology stack for this project.
```

---

### Scenario 7: FAQ Agent → Developer (Knowledge Update)

**Workflow**: Knowledge Base Update

```
┌──────────┐     ┌────────────┐
│ FAQ Agent │────▶│  Developer │
│          │     │            │
└──────────┘     └────────────┘
     │                   │
     │ New solution      │ Confirm/Edit
     ▼                   ▼
```

**Example Message**:

```markdown
## Agent Communication

**From**: FAQ Agent
**To**: Backend Developer
**Type**: Notification
**Priority**: Low

---

### Subject: New Solution Available for FAQ

### Details
I've documented the solution for "Database Connection Timeout" issue you fixed yesterday.

**FAQ Entry**:
```
ID: DB-001
Title: Database Connection Timeout
Category: Database
Keywords: connection, timeout, pool, database
Solution: Added connection cleanup and increased pool size
```

### Required Action
Please review and confirm this solution is accurate.
- If correct: I'll publish to knowledge base
- If needs edits: Please provide corrections

### Note
This will help future debugging of similar issues.
```

---

### Scenario 8: Tech Writer → Product Manager (Documentation Review)

**Workflow**: Documentation Approval

```
┌────────────┐     ┌─────────────┐
│ Tech Writer│────▶│   PM        │
│            │     │             │
└────────────┘     └─────────────┘
     │                   │
     │ Review request     │ Approve/Feedback
     ▼                   ▼
```

---

## Agent Communication Matrix

| From / To | Product Manager | Architect | Developer | QA | Code Reviewer | DevOps | FAQ |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Product Manager** | - | 📋 | 📋 | 📋 | - | - | 📋 |
| **Architect** | 📋 | - | 📋 | - | - | 📋 | - |
| **Developer** | 📋 | 📋 | - | 📋 | 📋 | 📋 | 📋 |
| **QA** | 📋 | - | 📋 | - | - | 📋 | 📋 |
| **Code Reviewer** | - | - | 📋 | 📋 | - | - | - |
| **DevOps** | 📋 | 📋 | 📋 | - | - | - | 📋 |
| **FAQ** | - | - | 📋 | - | - | - | - |

**Legend**:
- 📋 = Can communicate
- (blank) = No direct communication needed

---

## Priority Levels

| Priority | Use Case | Response Time |
|----------|----------|---------------|
| **Critical** | Production bugs, security issues | Immediate |
| **High** | Blocking issues, feature blocks | < 1 hour |
| **Medium** | Questions, clarifications | < 4 hours |
| **Low** | Knowledge sharing, notifications | < 24 hours |

---

## Message Types

| Type | Description | Example |
|------|-------------|---------|
| **Request** | Ask for help/action | "Please review this code" |
| **Response** | Reply to request | "Here's the solution..." |
| **Escalation** | Hand off issue | "Need help with architecture" |
| **Feedback** | Review results | "Approved with comments" |
| **Notification** | Informational | "New FAQ entry added" |
| **Approval** | Final confirmation | "Ready for deployment" |

---

## Best Practices

1. **Always include context**: Pass relevant project/state info
2. **Be specific**: Clear subject and required action
3. **Set expectations**: Include priority and timeline
4. **Close the loop**: Confirm when task is complete
5. **Learn from interactions**: Update processes as needed

---

*This protocol enables intelligent collaboration between agents.*
