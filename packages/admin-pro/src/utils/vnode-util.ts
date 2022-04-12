import type { VNode } from 'vue';
import { Fragment, isVNode } from 'vue';

export function isEmptyElement(c: VNode) {
  return (
    c.type === Comment ||
    (c.type === Fragment && c.children && c.children.length === 0) ||
    (c.type === Text && c.children && (c.children as string).trim() === '')
  );
}

export function isStringElement(c: VNode) {
  return c && c.type === Text;
}

export function filterEmpty(children: VNode[] = []) {
  const res: VNode[] = [];
  children.forEach((child: any) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if (child.type === Fragment) {
      res.push(...child.children);
    } else {
      res.push(child);
    }
  });
  return res.filter(c => !isEmptyElement(c));
}
const isValid = (value: any): boolean => {
  return value !== undefined && value !== null && value !== '';
};
export default isValid;

export const flattenChildren = (children: VNode[] = [], filterEmpty = true) => {
  const temp = Array.isArray(children) ? children : [children];
  const res: VNode[] = [];
  temp.forEach((child: VNode) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty));
    } else if (child && child.type === Fragment) {
      res.push(...flattenChildren((child as any).children, filterEmpty));
    } else if (child && isVNode(child)) {
      if (filterEmpty && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty) {
        res.push(child);
      }
    } else if (isValid(child)) {
      res.push(child);
    }
  });
  return res;
};
