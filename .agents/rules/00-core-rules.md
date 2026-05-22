# Core Rules

These rules preserve useful patterns in the codebase and reduce the main identified risks.

## 1) Architecture boundaries
- Frontend and backend MUST remain independently runnable and testable.
- Cross-layer behavior MUST be expressed through explicit API contracts.
- PRs that change cross-layer behavior MUST update both layers in the same PR or include a documented migration path.

## 2) API contract integrity
- Every API endpoint MUST define request schema, response schema, status codes, and error format.
- Frontend network handling MUST use typed models matching the backend contract.
- Breaking API changes MUST be versioned or guarded by a rollout plan.

## 3) Documentation baseline
- Repository documentation MUST include setup, run, test, environment variables, and contribution workflow.
- Any new command, dependency, service, or environment variable MUST be documented in the same PR.

## 4) Testing guardrails
- Backend route changes MUST include tests for success and failure paths.
- Frontend changes to financial logic or critical states MUST include tests.
- Failing tests MUST block merge.

## 5) Mock data safety
- Mock data MUST be limited to development/test contexts.
- Production runtime MUST NOT rely on mock data fallbacks.
- Environment switching between mock and real data MUST be explicit and documented.

## 6) CI/CD enforcement
- Each PR MUST run lint, type-check, tests, and build for frontend and backend.
- Main branch merges MUST require green checks.
- Deployment steps MUST be automated and reproducible.

## 7) Container consistency
- Docker and local workflows MUST produce equivalent behavior.
- Service startup commands and health checks MUST be validated in CI.

## 8) Modularity preservation
- Reusable UI primitives MUST stay separate from dashboard domain components.
- Financial calculations MUST live in utility modules, not directly inside rendering components.

## 9) Review gate requirements
- Reviewers MUST verify architecture impact, contract impact, test impact, and docs impact.
- Undocumented behavior, hidden coupling, or untested critical paths MUST block merge.

## 10) Definition of done
A change is done only when:
- Code is complete.
- Tests are added/updated and passing.
- Documentation is updated.
- CI checks pass.
