<template>
  <page-container>
    <div class="ant-pro-table">
      <div class="ant-pro-table-search">
        <a-form layout="horizontal">
          <a-row :gutter="16" type="flex" justify="start">
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="用户名(邮箱)">
                <a-input placeholder="please enter" />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12">
              <a-form-item label="描述">
                <a-input placeholder="please enter" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <a-card :body-style="{ padding: 0 }" ref="elRef">
        <div class="ant-pro-table-list-toolbar">
          <div class="ant-pro-table-list-toolbar-container">
            <div class="ant-pro-table-list-toolbar-left">
              <div class="ant-pro-table-list-toolbar-title">菜单列表</div>
            </div>
            <div class="ant-pro-table-list-toolbar-right">
              <a-space align="center">
                <a-button
                  type="primary"
                  @click="
                    () => {
                      modalVisible = true;
                      menuModalRef = null;
                    }
                  "
                >
                  <plus-outlined />
                  新增用户
                </a-button>
              </a-space>
              <div class="ant-pro-table-list-toolbar-divider">
                <a-divider type="vertical" />
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip title="刷新">
                  <reload-outlined
                    @click="
                      () => handleTableChange({ current: 1, pageSize: 10 })
                    "
                  />
                </a-tooltip>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip title="密度">
                  <a-dropdown :trigger="['click']" placement="bottomRight">
                    <column-height-outlined />
                    <template #overlay>
                      <a-menu
                        style="width: 80px"
                        :selected-keys="[state.tableSize]"
                        @click="
                          ({ key }) => {
                            state.tableSize = key;
                          }
                        "
                      >
                        <a-menu-item key="default">
                          <a href="javascript:;">默认</a>
                        </a-menu-item>
                        <a-menu-item key="middle">
                          <a href="javascript:;">中等</a>
                        </a-menu-item>
                        <a-menu-item key="small">
                          <a href="javascript:;">紧凑</a>
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown>
                </a-tooltip>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-popover
                  placement="bottomRight"
                  arrowPointAtCenter
                  trigger="click"
                  overlayClassName="ant-pro-table-column-setting-overlay"
                >
                  <template #title>
                    <div class="ant-pro-table-column-setting-title">
                      <a-checkbox
                        v-model:checked="columnState.checkAll"
                        :indeterminate="columnState.indeterminate"
                        @change="handleColumnAllClick"
                      >
                        列展示 / 排序
                      </a-checkbox>
                      <a @click="reset">重置</a>
                    </div>
                  </template>
                  <template #content>
                    <span class="ant-pro-table-column-setting-list">
                      <drag-container
                        lockAxis="y"
                        dragClass="ant-pro-table-drag-ghost"
                        dropClass="ant-pro-table-drop-ghost"
                        @drop="
                          ({ removedIndex, addedIndex }) =>
                            move(removedIndex, addedIndex)
                        "
                      >
                        <draggable
                          :key="column.key"
                          v-for="column in dynamicColumnItems"
                        >
                          <div class="ant-pro-table-column-setting-list-item">
                            <drag-icon />
                            <a-checkbox
                              :checked="column.checked"
                              @change="handleColumnChange($event, column)"
                            >
                              {{ column.label }}
                            </a-checkbox>
                          </div>
                        </draggable>
                      </drag-container>
                    </span>
                  </template>
                  <a-tooltip title="列设置">
                    <setting-outlined />
                  </a-tooltip>
                </a-popover>
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip :title="screenState ? '退出全屏' : '全屏'">
                  <fullscreen-outlined v-if="!screenState" @click="setFull" />
                  <fullscreen-exit-outlined v-else @click="exitFull" />
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
        <a-table
          row-key="id"
          :size="state.tableSize"
          :loading="state.loading"
          :columns="dynamicColumns"
          :data-source="generatorMenus(state.dataSource, undefined)"
          :pagination="{
            current: state.current,
            pageSize: state.pageSize,
            total: state.total,
          }"
          @change="handleTableChange"
        >
          <template #action="{ record }">
            <template v-if="record.children && record.children.length > 0">
              <a>新增</a>
              <a-divider type="vertical" />
            </template>
            <a
              @click="
                () => {
                  menuModalRef = record;
                  modalVisible = true;
                }
              "
            >
              编辑
            </a>
            <a-divider type="vertical" />
            <a>删除</a>
          </template>
        </a-table>
      </a-card>
    </div>
    <user-modal
      :model="menuModalRef"
      :visible="modalVisible"
      @cancel="modalVisible = false"
    />
  </page-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  PlusOutlined,
  ReloadOutlined,
  ColumnHeightOutlined,
  SettingOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";
import { Container as DragContainer, Draggable } from "@/components/draggable";
import type { Pagination, TableFilters, TableColumn } from "@/typing";
import { useFetchData } from "@/utils/hooks/useFetchData";
import { useFullscreen } from "@/utils/hooks/useFullscreen";
import { useTableDynamicColumns } from "@/utils/hooks/useTableColumn";
import DragIcon from "@/components/table/drag-icon.vue";
import UserModal from "./user-modal.vue";
import { UserModel } from "@/utils/types";
import { getMenus } from "@/api/user/menu";
import { generatorMenus } from "@/router/generator-routers";

const baseColumns: TableColumn[] = [
  {
    title: "编号",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "路由名",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "路由title",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "跳转路由",
    key: "redirect",
    dataIndex: "redirect",
  },
  {
    title: "异步组件",
    key: "async",
    dataIndex: "async",
  },
  {
    title: "路由路径",
    key: "path",
    dataIndex: "path",
  },
  {
    title: "组件路径",
    key: "component",
    dataIndex: "component",
  },
  {
    title: "图标",
    key: "icon",
    dataIndex: "icon",
  },
  {
    title: "操作",
    dataIndex: "action",
    slots: { customRender: "action" },
  },
];
export default defineComponent({
  name: "MenuList",
  setup() {
    const menuModalRef = ref<UserModel>({} as UserModel);
    const {
      state: columnState,
      dynamicColumns,
      dynamicColumnItems,
      handleColumnAllClick,
      handleColumnChange,
      reset,
      move,
    } = useTableDynamicColumns(baseColumns, {
      checkAll: true,
      needRowIndex: false,
    });
    const [elRef, screenState, { setFull, exitFull }] = useFullscreen();

    // 表格数据和加载
    const {
      reload,
      setPageInfo,
      context: state,
    } = useFetchData(getMenus, {
      current: 1,
      pageSize: 100000,
      tableSize: "middle", // 'default' | 'middle' | 'small'
    });
    const handleTableChange = (
      { current, pageSize }: Pagination,
      filters?: TableFilters
    ) => {
      setPageInfo({
        current,
        pageSize,
        ...filters,
      });

      reload();
    };
    // 新增修改表单
    const modalVisible = ref<boolean>(false);
    console.log(state.dataSource, generatorMenus(state.dataSource, undefined));

    return {
      state,
      columnState,
      dynamicColumns,
      dynamicColumnItems,
      generatorMenus,

      // fullscreen
      elRef,
      screenState,
      setFull,
      exitFull,

      handleTableChange,

      handleColumnChange,
      handleColumnAllClick,
      reset,
      move,

      // 表单
      modalVisible,

      menuModalRef,
    };
  },
  components: {
    DragIcon,
    PlusOutlined,
    ReloadOutlined,
    ColumnHeightOutlined,
    SettingOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    Draggable,
    DragContainer,
    UserModal,
  },
});
</script>
