<template>
    <div class="calendar">
        <div style="width: 100%; border: 1px solid #d9d9d9; border-radius: 4px">
            
                <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange">
                  <template #headerRender="{ value: current, type, onChange, onTypeChange }">
                    <div style="padding: 10px">
                      <!-- <div style="margin-bottom: 10px">Custom header</div> -->
                      <a-row type="flex" justify="space-between">
                        <a-col>
                          <a-radio-group size="small" :value="type" @change="e => onTypeChange(e.target.value)">
                            <a-radio-button value="month">Month</a-radio-button>
                            <a-radio-button value="year">Year</a-radio-button>
                          </a-radio-group>
                        </a-col>
                        <a-col>
                          <a-select
                            size="small"
                            :dropdown-match-select-width="false"
                            class="my-year-select"
                            :value="String(current.year())"
                            @change="
                              newYear => {
                                onChange(current.year(newYear));
                              }
                            "
                          >
                            <a-select-option
                              v-for="val in getYears(current)"
                              :key="String(val)"
                              class="year-item"
                            >
                              {{ val }}
                            </a-select-option>
                          </a-select>
                        </a-col>
                        <a-col>
                          <a-select
                            size="small"
                            :dropdown-match-select-width="false"
                            :value="String(current.month())"
                            @change="
                              selectedMonth => {
                                onChange(current.month(parseInt(selectedMonth, 10)));
                              }
                            "
                          >
                            <a-select-option
                              v-for="(val, index) in getMonths(current)"
                              :key="String(index)"
                              class="month-item"
                            >
                              {{ val }}
                            </a-select-option>
                          </a-select>
                        </a-col>
                      </a-row>
                    </div>
                  </template>
                </a-calendar>
              
        </div>
      </div>
</template>

<script>
 import { ref } from "vue"

export default {
  props: {

  },
  setup() {
    const value = ref();
    const getMonths = (value) => {
      const localeData = value.localeData();
      const months = [];

      for (let i = 0; i < 12; i++) {
        months.push(localeData.monthsShort(value.month(i)));
      }
      return months;
    };
    const getYears = (value) => {
      const year = value.year();
      const years = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        years.push(i);
      }
      return years;
    };
    const onPanelChange = (value, mode) => {
      console.log(value, mode);
    };

    return {
        value,
        onPanelChange,
        getYears,
        getMonths
    }
  }
}
</script>