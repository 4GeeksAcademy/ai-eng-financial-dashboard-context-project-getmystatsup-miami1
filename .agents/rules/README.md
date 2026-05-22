# Rules Overview

This directory defines day-to-day engineering rules for this repository.

## How to use these rules
- Read this folder before making code changes.
- Treat "MUST" rules as merge blockers.
- Use the PR checklist for every pull request.
- Use the release checklist before staging/production deployments.

## Files
- `00-core-rules.md`: Mandatory engineering and architecture rules.
- `10-pr-checklist.md`: Required checks for pull requests.
- `20-release-checklist.md`: Deployment and runtime safety checks.

## Enforcement model
- CI checks enforce test/build/lint gates.
- Code reviews enforce architecture, API contract, and documentation gates.
- Releases enforce environment and mock-data safety gates.
