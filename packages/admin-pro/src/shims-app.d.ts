declare module '*.vue' {
  import { defineComponent } from 'vue';
  export default defineComponent;
}
declare module '*.json' {
  const obj: Record<string | number, any>;
  export default obj;
}
declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'ant-design-vue/lib/locale/*' {
  import type { Locale } from 'ant-design-vue/lib/locale-provider';
  const locale: Locale & { readonly [key: string]: string };
  export default locale;
}
