// API query parameter contract types for financial dashboard features.
// All types are strict, snake_case, and fully documented per data contract spec.

import type { OperationType } from "../src/lib/financial-types";

/**
 * DateRangeFilter
 * Common filter for endpoints supporting date range queries.
 */
export interface DateRangeFilter {
  /**
   * Start date (inclusive, YYYY-MM-DD). Optional.
   */
  start_date?: string;
  /**
   * End date (inclusive, YYYY-MM-DD). Optional.
   */
  end_date?: string;
}

/**
 * AlertsParams
 * Query params for /api/metrics/alerts endpoint.
 */
export interface AlertsParams extends DateRangeFilter {
  /**
   * Threshold for anomaly detection (e.g., 0.3 for 30% increase). Default: 0.3
   */
  threshold?: number;
  /**
   * Grouping for periods ("day", "week", "month"). Default: "month"
   */
  group_by?: "day" | "week" | "month";
}

/**
 * TopCategoriesParams
 * Query params for /api/metrics/categories/top endpoint.
 */
export interface TopCategoriesParams extends DateRangeFilter {
  /**
   * Operation type to filter ("income" or "outcome"). Default: "outcome"
   */
  operation_type?: OperationType;
  /**
   * Max number of categories to return (1-20). Default: 5
   */
  limit?: number;
  /**
   * Business type to filter ("B2B" or "B2C"). Optional.
   */
  business_type?: "B2B" | "B2C";
}
