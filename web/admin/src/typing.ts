import type { VNodeChild, VNode } from "vue";

/* Table */
export interface PaginationItem {
  page?: number;
  type?: "page" | "prev" | "next";
  originalElement: HTMLElement;
}

export interface Pagination {
  current: number;
  pageSize: number;
  total?: number;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  itemRender?: (item: PaginationItem) => VNodeChild;
  pageSizeOptions?: string[] | number[];
  showLessItems?: boolean;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTotal?: (total: number, range: number) => VNodeChild | JSX.Element;
  simple?: boolean;
  size?: string;

  onChange?: (page?: number, pageSize?: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
}

export interface TableFilters {
  [key: string]: any;
}

export type TableColumnAlign = "left" | "right" | "center";

export type TableColumnFilterIcon = {
  filtered: boolean;
  column: TableColumn;
};

export type TableColumnFixed = boolean | "left" | "right";

export type TableColumnCustomRender = {
  text: string;
  record: any;
  index: number;
  column: TableColumn;
};

export type TableColumnSortDirections = "ascend" | "descend" | null;

export type TableColumnSortOrder = boolean | TableColumnSortDirections;

export interface TableColumn {
  key?: string;
  title?: string;
  align?: TableColumnAlign;
  ellipsis?: boolean;
  colSpan?: number;
  dataIndex: string;
  defaultFilteredValue?: string[];
  filterDropdown?: VNode;
  filterDropdownVisible?: boolean;
  filtered?: boolean;
  filteredValue?: string[];
  filterIcon?: VNode | (({ filtered, column }: TableColumnFilterIcon) => VNode);
  filterMultiple?: boolean;
  filters?: any[];
  fixed?: TableColumnFixed;
  customRender?: (item: TableColumnCustomRender) => any;
  sorter?: ((record: any) => any) | boolean;
  sortOrder?: TableColumnSortOrder;
  sortDirections?: TableColumnSortDirections[] | TableColumnSortDirections;
  width?: string | number;
  customCell?: (record: any, rowIndex: number) => VNode;
  customHeaderCell?: (column: TableColumn) => VNode;
  onFilter?: () => void;
  onFilterDropdownVisibleChange?: (visible: boolean) => void;
  slots?: Record<string, any>;
  [key: string]: any;
}

/* Menu */
export interface MenuInfo {
  key: string | number;
  keyPath: string[] | number[];
  item: VNodeChild | any;
  domEvent: MouseEvent;
}

export interface SelectInfo extends MenuInfo {
  selectedKeys: string[];
}
