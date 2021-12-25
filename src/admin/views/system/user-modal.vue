<template>
  <a-modal
    title="用户编辑"
    :visible="visible"
    :width="600"
    :confirmLoading="loading"
    centered
    @ok="handleSubmit"
    @cancel="
      () => {
        resetFields();
        Object.assign(modelRef, initValues);
        $emit('cancel');
      }
    "
  >
    <a-form layout="vertical">
      <a-form-item
        label="唯一编号"
        v-show="modelRef.id > 0"
        v-bind="validateInfos.id"
      >
        <a-input :value="modelRef.id" disabled />
      </a-form-item>
      <a-form-item label="用户名称" v-bind="validateInfos.name">
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="邮箱" v-bind="validateInfos.email">
        <a-input v-model:value="modelRef.email" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input v-model:value="modelRef.password" />
      </a-form-item>
      <a-form-item label="角色权限表">
        <p
          v-for="permission in rolePermissions"
          :key="permission.id"
          style="margin-left: 12px"
        >
          <span :style="{ marginRight: '8px' }"
            >{{ permission.label || permission.name }}:</span
          >
          <template v-for="tag in tags" :key="tag.key">
            <a-checkable-tag
              :checked="isChecked(permission.actions, tag)"
              @change="
                (checked) => handleChange(permission.actions, tag, checked)
              "
            >
              {{ tag.describe }}
            </a-checkable-tag>
          </template>
        </p>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent, reactive, ref, watchEffect, watch } from "vue";
import { useForm } from "ant-design-vue/lib/form";
import type { Permission, Action } from "@/admin/store/modules/user/typing";
import { getPermissions } from "@/admin/api/user/role";
import { cloneDeep } from "lodash";
import { UserModel } from "@/common/types";
import { RoleTypes } from "@/common/types/roles";

type Tag = {
  key: string;
  describe: string;
};

const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 13 },
  },
};

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    model: {
      type: Object as PropType<UserModel | null>,
      default: () => null,
    },
  },
  emits: ["cancel"],
  setup(props) {
    const loading = ref(false);
    const modelRef = reactive<Partial<UserModel>>({
      id: undefined,
      name: undefined,
      email: undefined,
      password: undefined,
      role: RoleTypes.user,
    });
    const rulesRef = reactive({
      id: [{ required: true, type: "any" }],
      name: [{ required: true }],
      email: [{ required: true, type: "email" }],
      password: [{ required: true }],
    });
    // mock role permissions
    /* { id: 'roleManage', name: '角色管理', actions: [Action.ADD, Action.UPDATE] },
      { id: 'userManage', name: '用户管理', actions: [Action.ADD, Action.UPDATE, Action.QUERY] },
     */
    const rolePermissions = ref<Permission[]>([]);
    const tags: Tag[] = [
      { key: "add", describe: "新增" },
      { key: "update", describe: "修改" },
      { key: "delete", describe: "删除" },
      { key: "query", describe: "查询" },
      { key: "import", describe: "导入" },
      { key: "export", describe: "导出" },
    ];
    const selectedTags = ref<string[]>([]);
    const { validateInfos, resetFields } = useForm(modelRef, rulesRef);

    const loadPermissionList = () => {
      loading.value = true;
      getPermissions()
        .then((pages) => {
          rolePermissions.value = pages.data.map((item) => {
            return {
              id: item.roleId,
              name: item.name,
              label: item.label,
              actions: [],
            } as Permission;
          });
        })
        .finally(() => {
          loading.value = false;
        });
    };
    // 记录初始值
    const initValues = reactive({});
    watch(
      () => props.visible,
      () => {
        Object.assign(initValues, cloneDeep(props.model));
      }
    );
    watchEffect(() => {
      if (props.model && props.visible) {
        Object.assign(modelRef, props.model);
        // 这一步可以不用，直接传递 model.permissions 到页面进行渲染
        // 这里重新组装是为了演示结构不相同情况下可以按照下列方案组装结构
        rolePermissions.value = [];
        // rolePermissions.value = (props.model.role || []).map((item) => {
        //   return {
        //     id: item.roleId,
        //     name: item.name,
        //     label: item.label,
        //     actions: item.actions,
        //   } as Permission;
        // });
      } else {
        // 没有传递 model 属于新增
        rolePermissions.value = [];
        loadPermissionList();
      }
    });

    loadPermissionList();

    const handleSubmit = () => {};
    const handleChange = (actions: Action[], tag: Tag, checked: boolean) => {
      if (checked) {
        actions.push(tag.key as Action);
      } else {
        const index = actions.findIndex((item) => item === tag.key);
        actions.splice(index, 1);
      }
    };
    return {
      ...formLayout,

      loading,

      modelRef,
      validateInfos,
      resetFields,

      handleSubmit,
      handleChange,
      tags,
      selectedTags,

      rolePermissions,

      initValues,

      isChecked: (actions: Action[], tag: Tag) => {
        return actions.indexOf(tag.key as Action) > -1;
      },
    };
  },
});
</script>
