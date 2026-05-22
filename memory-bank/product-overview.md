# Product Overview

## Product identity
Financial Metrics Dashboard is a two-service web application with a React + TypeScript frontend and a FastAPI backend.

Evidence:
- [README.md](README.md#L18)
- [docker-compose.yml](docker-compose.yml#L1)

## Core purpose
The product presents financial metrics through KPI cards and charts, with data loaded from backend API endpoints.

Evidence:
- Frontend fetches `/api/metrics`: [frontend/src/App.tsx](frontend/src/App.tsx#L16)
- KPI and chart sections rendered in UI: [frontend/src/App.tsx](frontend/src/App.tsx#L57), [frontend/src/App.tsx](frontend/src/App.tsx#L61)
- Backend exposes metrics APIs: [backend/app/routes.py](backend/app/routes.py#L248), [backend/app/routes.py](backend/app/routes.py#L268)

## Product architecture
- Frontend service runs on port 5173.
- Backend service runs on port 8000.
- Frontend depends on backend via Docker Compose.
- Backend is a FastAPI app with CORS middleware enabled and a shared router.

Evidence:
- Service topology and ports: [docker-compose.yml](docker-compose.yml#L2), [docker-compose.yml](docker-compose.yml#L14)
- Local endpoints documented: [README.md](README.md#L48)
- FastAPI app wiring and CORS: [backend/app/main.py](backend/app/main.py#L6), [backend/app/main.py](backend/app/main.py#L7)

## Functional capabilities (current)
### 1) Health monitoring
- Endpoint: `/health`
- Returns status payload.

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L243)

### 2) Financial movements dataset
- Endpoint: `/api/metrics`
- Supports filtering by `start_date`, `end_date`, `category`, and `operation_type`.

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L248)
- [backend/app/routes.py](backend/app/routes.py#L250)

### 3) Available filter facets
- Endpoint: `/api/metrics/facets`
- Returns operation types, business types, categories, and date bounds.

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L262)
- Facets model fields: [backend/app/routes.py](backend/app/routes.py#L30)

### 4) Aggregated summary time series
- Endpoint: `/api/metrics/summary`
- Supports grouping by day/week/month and optional business type + other filters.

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L268)
- Grouping literal options: [backend/app/routes.py](backend/app/routes.py#L15)

### 5) Top categories analysis
- Endpoint: `/api/metrics/categories/top`
- Supports operation type, date range, business type, and bounded limit.

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L287)
- Limit constraints (`ge=1`, `le=20`): [backend/app/routes.py](backend/app/routes.py#L290)

### 6) Period comparison metrics
- Endpoint: `/api/metrics/comparison`
- Returns current period, previous period, and deltas.

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L305)
- Comparison model fields: [backend/app/routes.py](backend/app/routes.py#L51)

### 7) Outcome alert detection
- Endpoint: `/api/metrics/alerts`
- Detects anomalous outcome increases based on threshold and grouping.

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L342)
- Alert model fields: [backend/app/routes.py](backend/app/routes.py#L58)

### 8) Business-segment specific feeds
- Endpoints: `/api/metrics/b2b`, `/api/metrics/b2c`

Evidence:
- [backend/app/routes.py](backend/app/routes.py#L362)
- [backend/app/routes.py](backend/app/routes.py#L378)

## Data model summary
Core movement entity includes:
- `create_date`
- `amount`
- `operation_type` (`income` or `outcome`)
- `category` (suppliers, sales, operational, administrative, others)
- `business_type` (`B2B` or `B2C`)

Evidence:
- Movement model: [backend/app/routes.py](backend/app/routes.py#L22)
- Enumerated types: [backend/app/routes.py](backend/app/routes.py#L11)

## Runtime behavior and environment
- Local run command uses Docker Compose.
- Frontend can use Vite proxy for `/api` by default.
- Optional override variable for backend origin is `VITE_API_BASE_URL`.

Evidence:
- Run command: [README.md](README.md#L41)
- Proxy/env guidance: [README.md](README.md#L45)

## Current data source note
The backend endpoints currently generate mock movements using a fixed seed in request handlers.

Evidence:
- Mock generator function: [backend/app/routes.py](backend/app/routes.py#L94)
- Usage in endpoints (example): [backend/app/routes.py](backend/app/routes.py#L255)

## Scope boundaries of this overview
This document intentionally includes only facts verifiable from repository files and does not infer external business requirements beyond implemented behavior.
