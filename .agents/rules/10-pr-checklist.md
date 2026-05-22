# Pull Request Checklist (Required)

Mark each item before requesting merge.

## Scope and architecture
- [ ] Change stays within frontend/backend boundaries.
- [ ] Cross-layer changes have matching updates on both sides.
- [ ] No hidden coupling added between UI and API internals.

## API and data contracts
- [ ] Endpoint request/response or data contract changes are documented.
- [ ] Error handling shape remains consistent (or includes migration notes).
- [ ] Frontend types are aligned with API responses.

## Testing and quality
- [ ] Backend route logic has success and failure tests.
- [ ] Frontend critical logic/state changes are tested.
- [ ] Lint, type-check, tests, and build pass locally or in CI.

## Documentation
- [ ] README/docs updated for new setup/run/test/env behavior.
- [ ] New env vars and defaults are documented.

## Operations and safety
- [ ] No production path depends on mock data.
- [ ] Docker/dev run path remains valid.
- [ ] Rollback notes included for risky changes.

## Merge gate
- [ ] CI is green.
- [ ] Reviewer confirmed architecture, contracts, tests, and docs.
