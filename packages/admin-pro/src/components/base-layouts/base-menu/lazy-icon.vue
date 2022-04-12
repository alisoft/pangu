<template>
  <component v-if="icon !== undefined" :is="icon" :class="`${prefixCls}--sider-menu-icon`" />
</template>
<script>
import { defineComponent } from 'vue';

// export interface LazyIconProps {
//   icon: string | Function | VNodeChild | JSX.Element;
// }

export default defineComponent({
  name: 'ALazyIcon',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro',
    },
    icon: {
      // type: [String, Function, Object] as PropType<string|Function|VNodeChild|JSX.Element>,
      type: [String, Function, Object],
      default: undefined,
    },
  },
  setup() {
    // if (typeof props.icon === 'string' && props.icon !== '') {
    //   if (isUrl(props.icon) || isImg(props.icon)) {
    //     return <img src={props.icon} alt="icon" class={`${props.prefixCls}-sider-menu-icon`} />
    //   }
    //   if (props.icon.startsWith('icon-')) {
    //     return <IconFont type={props.icon}  />
    //   }
    // }
    // console.log('unref(props.icon)', unref(props.icon))
    // if (isVNode(unref(props.icon))) {
    //   return props.icon
    // }
    // const ALazyIcon = resolveComponent(`${props.icon}`)
    // return ALazyIcon && ALazyIcon
    // return ALazyIcon && (() => (
    //   <ALazyIcon />
    // )) || null
    return {};
  },
});
</script>
