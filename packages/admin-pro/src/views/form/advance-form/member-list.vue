<template>
  <a-card :bordered="false" title="成员管理">
    <a-table
      :pagination="false"
      :columns="columns"
      :data-source="state.dataSource"
      :loading="state.loading"
    >
      <template #bodyCell="{ text, record, column }">
        <template v-if="['name', 'workId', 'department'].includes(column.key)">
          <a-input
            :key="column.key"
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            :placeholder="column.title"
            @change="e => handleChange(e.target.value, record.key, column.key)"
          />
          <template v-else>{{ text }}</template>
        </template>
        <template v-else-if="column.key === 'action'">
          <template v-if="record.editable">
            <template v-if="record.isNew">
              <span key="add">
                <a @click="saveRow(record)">添加</a>
                <a-divider type="vertical" />
                <a-popconfirm title="是否要删除此行？" @confirm="handleRemove(record.key)">
                  <a>删除</a>
                </a-popconfirm>
              </span>
            </template>
            <template v-else>
              <span key="save">
                <a @click="saveRow(record)">保存</a>
                <a-divider type="vertical" />
                <a @click="handleCancel(record.key)">取消</a>
              </span>
            </template>
          </template>
          <template v-else>
            <span key="edit">
              <a @click="toggleEdit(record.key)">编辑</a>
              <a-divider type="vertical" />
              <a-popconfirm
                title="是否要删除此行？"
                :ok-text="t('confirm.ok')"
                :cancel-text="t('confirm.cancel')"
                @confirm="handleRemove(record.key)"
              >
                <a>删除</a>
              </a-popconfirm>
            </span>
          </template>
        </template>
      </template>
    </a-table>
    <a-button
      style="width: 100%; margin-top: 16px; margin-bottom: 8px"
      type="dashed"
      @click="handleNewMember"
    >
      <plus-outlined />
      新增成员
    </a-button>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { message } from 'ant-design-vue/lib';
import { PlusOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';

export interface DataFields {
  key: string;
  name?: string;
  workId?: string;
  editable?: boolean;
  department?: string;
  isNew?: boolean;
  _originalData?: DataFields;
}

const columns = [
  {
    title: '成员姓名',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: '工号',
    dataIndex: 'workId',
    key: 'workId',
    width: '20%',
  },
  {
    title: '所属部门',
    dataIndex: 'department',
    key: 'department',
    width: '40%',
  },
  {
    title: '操作',
    key: 'action',
  },
];
const dataSource: DataFields[] = [
  {
    key: '1',
    name: '小明',
    workId: '001',
    editable: false,
    department: '行政部',
  },
  {
    key: '2',
    name: '李莉',
    workId: '002',
    editable: false,
    department: 'IT部',
  },
  {
    key: '3',
    name: '王小帅',
    workId: '003',
    editable: false,
    department: '财务部',
  },
];

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const state = reactive({
      loading: false,
      dataSource,
    });
    const handleSubmit = (e: Event) => {
      e.preventDefault();
    };
    const handleChange = (value: string, key: string, columnKey: string) => {
      const newData: DataFields[] = [...state.dataSource];
      const target = newData.find(item => key === item.key);
      if (target) {
        target[columnKey] = value;
        state.dataSource = newData;
      }
    };
    const handleNewMember = () => {
      const length = state.dataSource.length;
      const newMember: DataFields = {
        key: length === 0 ? '1' : (parseInt(state.dataSource[length - 1].key) + 1).toString(),
        name: '',
        workId: '',
        department: '',
        editable: true,
        isNew: true,
      };
      state.dataSource.push(newMember);
    };
    const saveRow = (record: DataFields) => {
      state.loading = true;
      const { key, name, workId, department } = record;
      if (!name || !workId || !department) {
        state.loading = false;
        message.error('请填写完整成员信息。');
        return;
      }
      // 模拟网络请求、卡顿 800ms
      new Promise(resolve => {
        setTimeout(() => {
          resolve({ loop: false });
        }, 800);
      }).then(() => {
        const target = state.dataSource.find(item => item.key === key);
        if (target) {
          target.editable = false;
          target.isNew = false;
          message.success('保存成功。');
        }
        state.loading = false;
      });
    };
    const handleRemove = (key: string) => {
      const newData = state.dataSource.filter(item => item.key !== key);
      state.dataSource = newData;
    };
    const handleCancel = (key: string) => {
      const target = state.dataSource.find(item => item.key === key);
      if (target) {
        Object.assign(target, { ...target._originalData });
        target._originalData = undefined;
      }
    };
    const toggleEdit = (key: string) => {
      const target: DataFields = state.dataSource.find(item => item.key === key) || { key: '-1' };
      if (target) {
        target._originalData = { ...target };
        target.editable = !target.editable;
        // state.dataSource = [...state.dataSource];
      }
    };
    return {
      t,

      state,
      columns,

      handleSubmit,
      handleNewMember,
      handleChange,
      toggleEdit,
      saveRow,
      handleRemove,
      handleCancel,
    };
  },
  components: {
    PlusOutlined,
  },
});
</script>

<style scoped></style>
