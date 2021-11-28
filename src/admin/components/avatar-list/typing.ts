import type { CSSProperties, VNodeChild } from "vue";

export declare type SizeType = number | "small" | "default" | "large";

export interface AvatarListProps {
  Item?: VNodeChild | JSX.Element;
  size?: SizeType;
  maxLength?: number;
  excessItemsStyle?: CSSProperties;
}

export interface AvatarItemProps {
  tips: string | VNodeChild | JSX.Element;
  src: string;
  size?: SizeType;
  onClick?: () => void;
}
