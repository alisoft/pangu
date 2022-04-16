import type { TablePaginationConfig } from 'ant-design-vue/es/table/interface';
import type { ColumnType } from 'ant-design-vue/lib/table';
import type { FilterValue } from 'ant-design-vue/lib/table/interface';

export type Pagination = TablePaginationConfig;
export type TableFilters = Record<string, FilterValue>;
export type TableColumn = ColumnType;
export type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
