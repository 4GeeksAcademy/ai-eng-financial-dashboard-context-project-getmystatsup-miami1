# Component Breakdown: Financial Dashboard

This document describes the main UI components and their responsibilities for the financial dashboard, based on the design and requirements.

---

## 1. DashboardHeader
- **Role:** Displays the dashboard title and selected period.
- **Inputs:**
  - `period: string` (e.g., "2024 - Full Year")
- **Notes:**
  - Sits at the top of the dashboard.

---

## 2. KPIRow
- **Role:** Shows key performance indicators (KPIs) such as total income, total outcome, profit, and profit percent.
- **Inputs:**
  - `metrics: KPIMetrics | null`
  - `loading: boolean`
- **Notes:**
  - Uses the KPIMetrics type from `financial-types.ts`.
  - Displays loading skeletons if data is not ready.

---

## 3. IncomeOutcomeChart
- **Role:** Visualizes income and outcome trends over time.
- **Inputs:**
  - `data: MonthlyDataPoint[]`
  - `loading: boolean`
- **Notes:**
  - Uses MonthlyDataPoint type from `financial-types.ts`.

---

## 4. ProfitPercentChart
- **Role:** Shows profit percent trend over time.
- **Inputs:**
  - `data: MonthlyDataPoint[]`
  - `loading: boolean`
- **Notes:**
  - Uses MonthlyDataPoint type from `financial-types.ts`.

---

## 5. TopCategoriesTable (Planned)
- **Role:** Displays a table of top categories for B2B/B2C comparison.
- **Inputs:**
  - `categories: TopCategoriesResponse`
  - `loading: boolean`
  - `operationType: OperationType`
  - `businessType: BusinessType`
- **Notes:**
  - Uses TopCategoriesResponse from `api-types.ts`.
  - Allows filtering by operation type and business type.

---

## 6. AnomalyAlertsTable (Planned)
- **Role:** Shows detected anomaly alerts in a table.
- **Inputs:**
  - `alerts: AlertsResponse`
  - `loading: boolean`
  - `threshold: number`
- **Notes:**
  - Uses AlertsResponse from `api-types.ts`.
  - Allows adjusting the anomaly threshold.

---

## 7. FacetsFilter (Planned)
- **Role:** Provides UI for selecting operation type, business type, category, and date range.
- **Inputs:**
  - `facets: FacetsResponse`
  - `onChange: (filters) => void`
- **Notes:**
  - Uses FacetsResponse from `api-types.ts`.
  - Drives filtering for the dashboard.

---

## Component Relationships
- `App.tsx` composes `DashboardHeader`, `KPIRow`, `IncomeOutcomeChart`, and `ProfitPercentChart`.
- Planned tables and filters will be added for advanced features (top categories, anomaly alerts, facets).

---

## TypeScript Types Reference
- See `financial-types.ts` and `api-types.ts` for all referenced types.
