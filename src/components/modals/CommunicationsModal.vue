<template>
  <a-modal width="1000px" title="Communications" centered>
    <a-form :model="messageForm" layout="vertical" @finish="sendMessage">
      <a-row :gutter="24">
        <!-- <a-col :sm="12" :xs="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.from')" name="from">
              <a-input v-model:value="messageForm.from" size="large" readonly />
            </a-form-item>
          </div>
        </a-col> -->
        <a-col :sm="12" :xs="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.from')" name="from" :rules="[{ required: true, message: $t('communications.communicationsModal.from')+' '+$t('global.validation')  }]">
              <a-select
                ref="select"
                v-if="staffList"
                v-model:value="messageForm.from"
                style="width: 100%"
                size="large">
                <a-select-option value="" disabled>{{'Select Staff'}}</a-select-option>
                <a-select-option v-for="staff in staffList" :key="staff.id" :value="staff.id">{{ staff.name }}</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </a-col>
        <a-col :sm="12" :xs="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.to')" name="to">
              <div class="btn toggleButton" :class="toggleTo ? 'active' : ''" @click="toggleTo = !toggleTo">
                <span class="btn-content">{{ $t('communications.communicationsModal.patient') }}</span>
              </div>
              <div class="btn toggleButton" :class="toggleTo ? '' : 'active'" @click="toggleTo = !toggleTo">
                <span class="btn-content">{{ $t('communications.communicationsModal.staff') }}</span>
              </div>
              <a-input type="hidden" id="entityType" v-model="messageForm.entityType" :value="toggleTo ? 'patient' : 'staff'" />
            </a-form-item>
          </div>
        </a-col>
        <a-col :sm="12" :xs="24" v-show="toggleTo">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.patient')" name="referenceId" :rules="[{ required: true, message: $t('communications.communicationsModal.patient')+' '+$t('global.validation')  }]">
              <a-select
                ref="select"
                v-if="patientsList"
                v-model:value="messageForm.referenceId"
                style="width: 100%"
                size="large">
                <a-select-option value="" disabled>{{'Select Patient'}}</a-select-option>
                <a-select-option v-for="patient in patientsList" :key="patient.id" :value="patient.id">{{ patient.firstName+' '+patient.middleName+' '+patient.lastName }}</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </a-col>
        <a-col :sm="12" :xs="24" v-show="!toggleTo">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.staff')" name="referenceId" :rules="[{ required: true, message: $t('communications.communicationsModal.staff')+' '+$t('global.validation')  }]">
              <a-select
                ref="select"
                v-if="staffList"
                v-model:value="messageForm.referenceId"
                style="width: 100%"
                size="large">
                <a-select-option value="" disabled>{{'Select Staff'}}</a-select-option>
                <a-select-option v-for="staff in staffList" :key="staff.id" :value="staff.id">{{ staff.name }}</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </a-col>
        <a-col :sm="12" :xs="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.messageCategory')" name="messageCategoryId" :rules="[{ required: true, message: $t('communications.communicationsModal.messageCategory')+' '+$t('global.validation')  }]">
              <a-select
                v-if="messageCategories"
                ref="select"
                v-model:value="messageForm.messageCategoryId"
                style="width: 100%"
                size="large">
                <a-select-option value="" disabled>{{'Select Message Category'}}</a-select-option>
                <a-select-option v-for="messageCategory in messageCategories.globalCode" :key="messageCategory.id" :value="messageCategory.id">{{ messageCategory.name }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </a-col>
        <a-col :sm="12" :xs="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.priority')" name="priorityId" :rules="[{ required: true, message: $t('communications.communicationsModal.priority')+' '+$t('global.validation')  }]">
              <a-select
                v-if="taskPriority"
                ref="select"
                v-model:value="messageForm.priorityId"
                style="width: 100%"
                size="large">
                <a-select-option value="" disabled>{{'Select Priority'}}</a-select-option>
                <a-select-option v-for="priority in taskPriority.globalCode" :key="priority.id" :value="priority.id">{{ priority.name }}</a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </a-col>
        <a-col :sm="12" :xs="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.messageType')" name="messageTypeId" :rules="[{ required: true, message: $t('communications.communicationsModal.messageType')+' '+$t('global.validation')  }]">
              <a-select
                ref="select"
                v-model:value="messageForm.messageTypeId"
                style="width: 100%"
                size="large">
                  <a-select-option value="" disabled>{{'Select Message Type'}}</a-select-option>
                  <template v-for="type in messageType.globalCode">
                    <a-select-option v-if="type.name == 'SMS' || type.name == 'Email'" :key="type.id" :value="type.id">{{ type.name }}</a-select-option>
                  </template>
              </a-select>
            </a-form-item>
          </div>
        </a-col>
        <a-col :span="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.subject')" name="subject" :rules="[{ required: true, message: $t('communications.communicationsModal.subject')+' '+$t('global.validation')  }]">
              <a-input v-model:value="messageForm.subject" size="large" />
            </a-form-item>
          </div>
        </a-col>
        <a-col :span="24">
          <div class="form-group">
            <a-form-item :label="$t('communications.communicationsModal.message')" name="message" :rules="[{ required: true, message: $t('communications.communicationsModal.message')+' '+$t('global.validation')  }]">
              <a-textarea v-model:value="messageForm.message" allow-clear />
            </a-form-item>
          </div>
        </a-col>
        <a-col :span="24">
          <div class="steps-action">
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button @click="handleCancel" html-type="reset">{{$t('global.cancel')}}</a-button>
              <a-button type="primary" html-type="submit">{{$t('global.ok')}}</a-button>
            </a-form-item>
          </div>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script>
  import { ref, reactive, watchEffect, computed } from "vue";
  import { useStore } from "vuex"
  export default {
    setup(props, {emit}) {
      const store = useStore()
      const toggleTo = ref(true);

      const handleCancel = () => {
        emit('is-visible', false);
      };
      
      watchEffect(() => {
        store.dispatch("globalCodes")
        store.dispatch("patientsList")
        store.dispatch("staffList")
      })
      
      const taskPriority = computed(() => {
        return store.state.common.taskPriority;
      }) 
      const messageCategories = computed(() => {
        return store.state.common.messageCategories;
      }) 
      const messageType = computed(() => {
        return store.state.common.messageType;
      })

      const patientsList = computed(() => {
        return store.state.communications.patientsList
      })
      const staffList = computed(() => {
        return store.state.communications.staffList
      })

      const messageForm = reactive({
        from: '',
        entityType: '',
        referenceId: '',
        subject: '',
        messageCategoryId: '',
        priorityId: '',
        messageTypeId: '',
        message: '',
      });

      const sendMessage = () => {
        messageForm.entityType = document.getElementById("entityType").value
        // console.log('entityType', document.getElementById("entityType").value)
        // console.log('Message Form', messageForm)
        store.dispatch('addCommunication', messageForm).then(() => {
          store.dispatch('communicationsList', 1)
        })
        emit('is-visible', false);
      }

     /*  const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      }; */

      const patientChange = (value) => {
        store.dispatch('patientDetails', value);
        // const patientDetails = computed(() => {
        //   return store.state.communications.patientDetails;
        // });
        // console.log('Patient Email', patientDetails.value);
        // messageForm.to = patientDetails.value.email;
      };
      
      return {
        toggleTo,
        patientChange,
        handleCancel,
        sendMessage,
        // onFinishFailed,
        patientsList,
        staffList,
        taskPriority,
        messageCategories,
        messageType,
        messageForm,
      };
    },
  };
</script>

<style>
.ant-modal-footer {
  display: none;
}
.toggleButton {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 6px 16px;
  display: inline-block;
  cursor: pointer;
  width: 100px;
}
.toggleButton.active {
  background-color: #777;
  color: #fff;
}
</style>
