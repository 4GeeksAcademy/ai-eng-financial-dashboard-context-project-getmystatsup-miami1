# Rule Validation Report

Date: 2026-05-22
Scope: Validate whether each rule in `00-core-rules.md` can guide real repository tasks.

## Commands executed
- Backend tests:
  - `cd backend && pytest -q`
  - Result: initially failed due to missing dependencies, then passed after `pip install -r requirements.txt`.
  - Final: `15 passed`.
- Frontend quality gates:
  - `cd frontend && npm install && npm run lint && npm run test && npm run build`
  - Final: lint passed, tests passed (`5 passed`), build passed.

## Rule-by-rule validation

### 1) Architecture boundaries
Status: PASS (actionable now)
- Real task guided: Validate separate frontend/backend runtime and integration path.
- Evidence:
  - frontend script entrypoints and build/test/lint tasks in `frontend/package.json`.
  - backend app and router wiring in `backend/app/main.py`.
  - frontend proxy to backend in `frontend/vite.config.ts`.
  - split service definitions in `docker-compose.yml`.

### 2) API contract integrity
Status: PARTIAL (actionable, but not fully enforced)
- Real task guided: Change an endpoint payload and verify typed usage and tests.
- Evidence:
  - response models defined with Pydantic in `backend/app/routes.py`.
  - frontend fetch typed as `Promise<FinancialMovement[]>` in `frontend/src/App.tsx`.
- Gap:
  - No explicit rule mechanism for standardized error shape/status documentation per endpoint outside implicit OpenAPI generation.

### 3) Documentation baseline
Status: PARTIAL (actionable, incomplete content)
- Real task guided: Contributor setup and runtime instructions for local execution.
- Evidence:
  - setup/run docs in `README.md` and env override in `frontend/.env.example`.
- Gap:
  - README does not currently include contribution workflow, testing commands section, or explicit dependency policy.

### 4) Testing guardrails
Status: PASS (actionable now)
- Real task guided: Extend route and utility behavior with required tests.
- Evidence:
  - backend tests for route filters and summaries in `backend/tests/test_routes.py`.
  - frontend unit tests in `frontend/src/lib/financial-utils.test.ts`.
  - executed test commands pass.

### 5) Mock data safety
Status: FAIL (high-value rule, currently violated)
- Real task guided: Prevent production from serving synthetic data.
- Evidence:
  - API endpoints call `generate_mock_movements(seed=42)` directly in runtime paths in `backend/app/routes.py`.
- Gap:
  - No runtime flag or environment switch limiting mock usage to development/test only.

### 6) CI/CD enforcement
Status: FAIL (rule exists, mechanism missing)
- Real task guided: Require lint/type-check/test/build on PR.
- Evidence:
  - No `.github/workflows` CI definition detected.
  - quality commands exist in `frontend/package.json`, but no automated PR enforcement currently in repository.

### 7) Container consistency
Status: PARTIAL (actionable, not fully testable yet)
- Real task guided: Ensure Docker and local workflows align and include health checks.
- Evidence:
  - both services have Dockerfiles and compose services in `backend/Dockerfile`, `frontend/Dockerfile`, `docker-compose.yml`.
- Gap:
  - no healthcheck directives in compose and no CI validation for service startup checks.

### 8) Modularity preservation
Status: PASS (actionable now)
- Real task guided: keep domain logic in utility modules and UI in components.
- Evidence:
  - financial calculations live in `frontend/src/lib/financial-utils.ts`.
  - presentation layer uses utility outputs in `frontend/src/components/dashboard/kpi-row.tsx` and `frontend/src/App.tsx`.
  - reusable UI components isolated under `frontend/src/components/ui`.

### 9) Review gate requirements
Status: PARTIAL (actionable in process, not tool-enforced)
- Real task guided: perform architecture/contract/test/docs checks on each PR.
- Evidence:
  - checklist exists in `.agents/rules/10-pr-checklist.md`.
- Gap:
  - no branch protection/required checks policy represented in repository files.

### 10) Definition of done
Status: PARTIAL (good policy, blocked by CI absence)
- Real task guided: complete code + tests + docs + checks before merge.
- Evidence:
  - codified in `.agents/rules/00-core-rules.md` and `.agents/rules/10-pr-checklist.md`.
- Gap:
  - cannot be fully verified automatically until CI checks are implemented.

## Summary
- PASS: 1, 4, 8
- PARTIAL: 2, 3, 7, 9, 10
- FAIL: 5, 6

## Immediate improvements to make all rules enforceable
1. Add CI workflow for frontend and backend lint/test/build on PR.
2. Add environment-gated mock data provider and disable mock generation in production paths.
3. Add health checks and startup verification to compose and CI.
4. Expand README with contribution workflow and explicit test commands.
5. Add PR template mirroring `.agents/rules/10-pr-checklist.md`.
