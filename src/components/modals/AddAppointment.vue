<template>
  <a-modal width="1000px" :title="$t('appointmentCalendar.addAppointment.appointmentDetail')" centered>
    <a-row :gutter="24">
      <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('appointmentCalendar.addAppointment.patient')}}</label>
          <a-input v-model="value" size="large" />
        </div>
      </a-col>
      <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('appointmentCalendar.addAppointment.staff')}}</label>
          <a-input v-model="value" size="large" />
        </div>
      </a-col>
      <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('appointmentCalendar.addAppointment.startDate')}}</label>
          <a-date-picker v-model:value="value1" :size="size" style="width: 100%" />
        </div>
      </a-col>
      <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('global.startTime')}}</label>
            <a-time-picker v-model:value="value2" :size="size" style="width: 100%" />
        </div>
      </a-col>
      <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('global.time')}}</label>
          <a-select
            ref="select"
            v-model="value1"
            style="width: 100%"
            size="large"
            @focus="focus"
            @change="handleChange"
            placeholder="Select Time"
          >
            <a-select-option value="Yiminghe">10 Mins</a-select-option>
            <a-select-option value="Yiminghe">20 Mins</a-select-option>
            <a-select-option value="Yiminghe">30 Mins</a-select-option>
            <a-select-option value="Yiminghe">1 Hour</a-select-option>
            <a-select-option value="Yiminghe">2 Hour</a-select-option>
            <a-select-option value="Yiminghe">4 Hour</a-select-option>
            <a-select-option value="Yiminghe">Full Day</a-select-option>
          </a-select>
        </div>
      </a-col>
       <a-col :sm="12" :xs="24">
        <div class="form-group">
          <label>{{$t('appointmentCalendar.addAppointment.typeOfVisit')}}</label>
          <a-select
            ref="select"
            v-model="value1"
            style="width: 100%"
            size="large"
            @focus="focus"
            @change="handleChange"
            placeholder="Select Type"
          >
            <a-select-option value="Yiminghe1">Type 1</a-select-option>
            <a-select-option value="Yiminghe2">Type 2</a-select-option>
            <a-select-option value="Yiminghe3">Type 3</a-select-option>
            <a-select-option value="Yiminghe4">Type 4</a-select-option>
          </a-select>
        </div>
      </a-col>
      <a-col :span="24">
        <div class="form-group">
          <label>{{$t('appointmentCalendar.addAppointment.note')}}</label>
          <a-textarea v-model="value2" allow-clear />
        </div>
      </a-col>
    </a-row>
  </a-modal>
</template>
<script>
import { ref } from "vue";
// import moment from 'moment';

export default {
  setup() {
    // const value = ref(moment('08:00:00', 'HH:mm:ss'));
    return {
      size: ref("large"),
    };
  },
};
</script>
