# Release Checklist

Use before promoting to staging or production.

## Build and artifact integrity
- [ ] Frontend and backend builds succeed from clean state.
- [ ] Dependencies are resolved deterministically.
- [ ] Container images are built from the committed source.

## Runtime and environment safety
- [ ] Production environment variables are present and validated.
- [ ] Mock data is disabled for production runtime.
- [ ] Health checks pass for all services.

## Verification and rollback
- [ ] Smoke tests pass against deployed services.
- [ ] Core dashboard KPIs/charts render with real backend data.
- [ ] Rollback procedure is documented and tested.

## Final approval
- [ ] CI checks are green on the release commit.
- [ ] Required reviewer/deployment approvals are complete.
