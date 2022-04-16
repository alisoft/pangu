<template>
  <page-container>
    <div class="ant-pro-table">
      <div class="ant-pro-table-search">
        <a-form layout="horizontal">
          <a-row :gutter="16" type="flex" justify="start">
            <a-col :xs="24" :sm="24" :md="12" :lg="7">
              <a-form-item label="规则名称">
                <a-input v-model:value="queryParam.ruleName" placeholder="please enter" />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="7">
              <a-form-item label="描述">
                <a-input v-model:value="queryParam.desc" placeholder="please enter" />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="7">
              <a-form-item label="服务调用次数">
                <a-input v-model:value="queryParam.callNo" placeholder="please enter" />
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="3">
              <a-form-item>
                <a-button @click="handleSearch" type="primary">搜索</a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <a-card :body-style="{ padding: 0 }" ref="elRef">
        <div class="ant-pro-table-list-toolbar">
          <div class="ant-pro-table-list-toolbar-container">
            <div class="ant-pro-table-list-toolbar-left">
              <div class="ant-pro-table-list-toolbar-title">查询表格</div>
            </div>
            <div class="ant-pro-table-list-toolbar-right">
              <a-space align="center">
                <a-button type="primary" @click="modalVisible = true">
                  <plus-outlined />
                  新建
                </a-button>
                <div class="ant-pro-table-list-toolbar-setting-item">
                  <a-tooltip title="表格斑马纹">
                    <a-switch
                      checked-children="开"
                      un-checked-children="关"
                      v-model:checked="state.stripe"
                    />
                  </a-tooltip>
                </div>
              </a-space>
              <div class="ant-pro-table-list-toolbar-divider">
                <a-divider type="vertical" />
              </div>
              <div class="ant-pro-table-list-toolbar-setting-item">
                <a-tooltip title="刷新">
                  <reload-outlined @click="() => handleTableChange({ current: 1, pageSize: 10 })" />
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
                        @drop="({ removedIndex, addedIndex }) => move(removedIndex, addedIndex)"
                      >
                        <draggable :key="column.key" v-for="column in dynamicColumnItems">
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
          :row-class-name="stripe"
          :size="state.tableSize"
          :loading="state.loading"
          :columns="dynamicColumns"
          :data-source="state.dataSource"
          :pagination="{
            current: state.current,
            pageSize: state.pageSize,
            total: state.total,
          }"
          ref="tableRef"
          :getPopupContainer="_trigger => tableRef.$el"
          @change="handleTableChange"
        >
          <template #rowIndex="{ index }">
            {{ index }}
          </template>
          <template #bodyCell="{ text, column }">
            <template v-if="column.dataIndex === 'status'">
              <a-badge :status="statusMap[text].status" :text="statusMap[text].text" />
            </template>
            <template v-else-if="column.dataIndex === 'action'">
              <a :title="text">编辑</a>
            </template>
          </template>
        </a-table>
      </a-card>
    </div>
    <a-modal
      title="Basic Modal"
      :getContainer="() => elRef && elRef.$el"
      v-model:visible="modalVisible"
      @ok="handleModalOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue';
import {
  PlusOutlined,
  ReloadOutlined,
  ColumnHeightOutlined,
  SettingOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons-vue';
import { Container as DragContainer, Draggable } from '@/components/draggable';
import { queryRule } from '@/api/list/table-list';
import type { Pagination, TableFilters, TableColumn } from '@/typing';
import { useFetchData } from '@/utils/hooks/useFetchData';
import { useFullscreen } from '@/utils/hooks/useFullscreen';
import { useTableDynamicColumns } from '@/utils/hooks/useTableColumn';
import DragIcon from '@/components/table/drag-icon.vue';

export default defineComponent({
  name: 'TableList',
  setup() {
    const tableRef = ref();

    const statusMap = {
      0: { text: '关闭', status: 'default' },
      1: { text: '运行中', status: 'processing' },
      2: { text: '已上线', status: 'success' },
      3: { text: '异常', status: 'error' },
    };
    const status = ['关闭', '运行中', '已上线', '异常'];

    const baseColumns: TableColumn[] = [
      {
        title: '规则名称',
        dataIndex: 'name',
      },
      {
        title: '描述',
        dataIndex: 'desc',
      },
      {
        title: '服务调用次数',
        dataIndex: 'callNo',
        sorter: true,
        align: 'right',
        customRender: ({ text }) => `${text} 万`,
      },
      {
        title: '状态',
        dataIndex: ['status'],
        filters: [
          {
            text: status[0],
            value: '0',
          },
          {
            text: status[1],
            value: '1',
          },
          {
            text: status[2],
            value: '2',
          },
          {
            text: status[3],
            value: '3',
          },
        ],
      },
      {
        title: '上次调度时间',
        dataIndex: 'updatedAt',
        sorter: true,
      },
      {
        title: '操作',
        dataIndex: 'action',
      },
    ];
    const needRowIndex = ref(true);
    const {
      state: columnState,
      dynamicColumns,
      dynamicColumnItems,
      handleColumnAllClick,
      handleColumnChange,
      reset,
      move,
    } = useTableDynamicColumns(baseColumns, { needRowIndex });

    const [elRef, screenState, { setFull, exitFull }] = useFullscreen();

    const {
      stripe,
      reload,
      setPageInfo,
      context: state,
    } = useFetchData(queryRule, {
      current: 1,
      pageSize: 10,
      tableSize: 'middle', // 'default' | 'middle' | 'small'
      stripe: false,
    });
    const handleTableChange = ({ current, pageSize }: Pagination, filters?: TableFilters) => {
      setPageInfo({
        current,
        pageSize,
        ...filters,
      });

      reload();
    };
    const queryParam = reactive({
      ruleName: undefined,
      desc: undefined,
      callNo: undefined,
    });

    const handleSearch = () => {
      setPageInfo({
        ...toRaw(queryParam),
      });
      reload();
    };

    // modal
    const modalVisible = ref(false);
    const handleModalOk = () => {};

    return {
      statusMap,
      state,
      stripe,
      columnState,
      dynamicColumns,
      dynamicColumnItems,

      queryParam,
      handleSearch,
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

      // modal controls
      modalVisible,
      handleModalOk,

      tableRef,
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
  },
});
</script>
