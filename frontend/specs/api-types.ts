// API response contract types for financial dashboard features.
// All types are strict, snake_case, and fully documented per data contract spec.

import type { OperationType, Category, BusinessType } from "../src/lib/financial-types";

/**
 * FacetsResponse
 * Response for /api/metrics/facets endpoint.
 * Provides available filter options and date range for the dashboard.
 */
export interface FacetsResponse {
  /**
   * List of allowed operation types (e.g., ["income", "outcome"])
   */
  operation_types: OperationType[];
  /**
   * List of allowed business types (e.g., ["B2B", "B2C"])
   */
  business_types: BusinessType[];
  /**
   * List of allowed categories (e.g., ["suppliers", "sales", ...])
   */
  categories: Category[];
  /**
   * Earliest date in the dataset (YYYY-MM-DD)
   */
  min_date: string;
  /**
   * Latest date in the dataset (YYYY-MM-DD)
   */
  max_date: string;
}

/**
 * AlertEntry
 * One anomaly alert for the anomaly table feature.
 */
export interface AlertEntry {
  /**
   * Period label (YYYY-MM or YYYY-MM-DD, depending on group_by)
   */
  period: string;
  /**
   * Total outcome for the period
   */
  outcome_total: number;
  /**
   * Baseline average for comparison
   */
  baseline_average: number;
  /**
   * Ratio of increase over baseline (e.g., 0.25 for 25% increase)
   */
  increase_ratio: number;
}

/**
 * AlertsResponse
 * List of anomaly alerts for the anomaly table feature.
 */
export type AlertsResponse = AlertEntry[];

/**
 * CategoryEntry
 * One top category for the B2B/B2C comparison table feature.
 */
export interface CategoryEntry {
  /**
   * Category name (see Category type)
   */
  category: Category;
  /**
   * Operation type ("income" or "outcome")
   */
  operation_type: OperationType;
  /**
   * Total amount for this category and operation type
   */
  total_amount: number;
}

/**
 * TopCategoriesResponse
 * List of top categories for the B2B/B2C comparison table feature.
 */
export type TopCategoriesResponse = CategoryEntry[];
