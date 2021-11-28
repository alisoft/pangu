<template>
  <a-result
    v-if="!auth && noMatch"
    :staus="403"
    title="403"
    sub-title="无权限"
  />
  <slot v-else-if="auth" />
</template>

<script lang="ts">
import type { Permission, Role } from "../../store/modules/user/typing";
import type { PropType, VNodeChild } from "vue";
import { computed, ref, defineComponent } from "vue";
import { useStore } from "vuex";

export type AuthorityType =
  | string
  | string[]
  | ((authority: Permission[]) => boolean);

export default defineComponent({
  name: "Authority",
  props: {
    authority: {
      type: [String, Array, Function] as PropType<AuthorityType>,
      default: () => true,
    },
    noMatch: {
      type: [String, Boolean, Object] as PropType<
        string | boolean | VNodeChild
      >,
      default: () => undefined,
    },
  },
  setup(props) {
    const store = useStore();
    const role = computed<Role>(() => store.getters["user/role"]);
    const auth = ref(false);
    if (role.value.permissions) {
      const permissions = role.value.permissions;
      const isArr = Array.isArray(props.authority);

      if (typeof props.authority === "string" || isArr) {
        auth.value = permissions.some((value) => {
          return isArr
            ? (props.authority as string[]).includes(value.name)
            : props.authority === value.name;
        });
      } else if (typeof props.authority === "function") {
        auth.value = props.authority(permissions);
      }
    }

    return {
      auth,
    };
  },
});
</script>
