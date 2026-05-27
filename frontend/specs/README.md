# Financial Dashboard Data Contract & Component Spec

This document defines the data contract and component breakdown for the three main dashboard features. It covers endpoints, request/response types, parameter constraints, and UI edge cases for each feature.

---

## 1. Date Range Reference & B2B vs B2C View (Facets)

- **Endpoint:** `GET /api/metrics/facets`
- **Response Type:** `FacetsResponse` (see `api-types.ts`)
- **Description:** Provides available filter options and the valid date range for the dashboard.
- **Parameters:** None
- **Component Responsibilities:**
  - Fetches and displays available operation types, business types, categories, and date range.
  - Drives filter UI and enables B2B/B2C toggling.
- **Edge Cases:**
  1. If the response lists only one business type, the B2B/B2C toggle is hidden.
  2. If min_date equals max_date, the date range picker is disabled.

---

## 2. Anomaly Table (Alerts)

- **Endpoint:** `GET /api/metrics/alerts`
- **Request Params:** `AlertsParams` (see `param-types.ts`)
- **Response Type:** `AlertsResponse` (see `api-types.ts`)
- **Description:** Returns a list of periods with outcome anomalies above a threshold.
- **Parameter Constraints:**
  - `threshold`: number, default 0.3, must be >= 0
  - `group_by`: "day" | "week" | "month", default "month"
  - `start_date`, `end_date`: YYYY-MM-DD, optional
- **Component Responsibilities:**
  - Renders a table of anomaly alerts with period, outcome_total, baseline_average, and increase_ratio.
  - Allows user to adjust threshold and grouping.
- **Edge Cases:**
  1. If the response is empty, show a "No anomalies detected" message.
  2. If increase_ratio is exactly 0, highlight the row as "no change".

---

## 3. B2B vs B2C Comparison Table (Top Categories)

- **Endpoint:** `GET /api/metrics/categories/top`
- **Request Params:** `TopCategoriesParams` (see `param-types.ts`)
- **Response Type:** `TopCategoriesResponse` (see `api-types.ts`)
- **Description:** Returns the top categories by total amount for a given operation type and business type.
- **Parameter Constraints:**
  - `operation_type`: "income" | "outcome", default "outcome"
  - `limit`: number, default 5, min 1, max 20
  - `business_type`: "B2B" | "B2C", optional
  - `start_date`, `end_date`: YYYY-MM-DD, optional
- **Component Responsibilities:**
  - Renders a comparison table of top categories for the selected filters.
  - Allows user to change operation type, business type, and limit.
- **Edge Cases:**
  1. If limit is set to 1, show only the top category row and disable pagination.
  2. If the response is empty, display a "No data available" state.

---

## TypeScript Types Reference

- See `api-types.ts` and `param-types.ts` in this folder for all request/response type definitions, with full JSDoc and value constraints.

---

## Verification Checklist

- [x] All endpoints, params, and response fields match backend contract.
- [x] All types are strict (no any/object) and fully documented.
- [x] Each feature section includes at least 2 UI edge cases.
- [x] Component responsibilities and data dependencies are mapped for each feature.
