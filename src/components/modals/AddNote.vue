<template>
  <a-modal width="1000px" title="Add Note" centered>
    <a-row :gutter="24">
      <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('global.date')}}</label>
          <a-date-picker v-model:value="value1" :size="size" style="width: 100%" />
        </div>
      </a-col>

      <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('global.category')}}</label>
          <a-select
            ref="select"
            v-model="value1"
            style="width: 100%"
            size="large"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="lucy">Clinical</a-select-option>
            <a-select-option value="Yiminghe">Admin</a-select-option>
            <a-select-option value="Yiminghe">General</a-select-option>
          </a-select>
        </div>
      </a-col>
      <a-col :sm="24" :xs="24">
        <div class="form-group">
          <label>{{$t('global.note')}}</label>
          <a-input v-model="value" size="large" />
        </div>
      </a-col>
    </a-row>
  </a-modal>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    return {
      size: ref("large"),
    };
  },
});
</script>
