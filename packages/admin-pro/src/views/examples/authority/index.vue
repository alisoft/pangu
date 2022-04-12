<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card title="拥有 `admin` 权限用户可看">
          <authority authority="admin" :no-match="true">
            <span>admin</span>
          </authority>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="拥有 `admin`, `form` 权限的用户可看">
          <authority :authority="['admin', 'form']">
            <span>form | admin</span>
            <a-form>
              <a-form-item label="用户名">
                <a-input />
              </a-form-item>
            </a-form>
          </authority>
        </a-card>
      </a-col>
      <a-col :span="12"></a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
