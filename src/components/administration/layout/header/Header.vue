<template>
  <div>
    <div class="header-wrapper">
      <div class="logo">
        <div class="logoInner">
          <img src="@/assets/images/logo.png" alt="image" />
        </div>
        <div class="icon" @click="barMenu">
          <MenuOutlined />
        </div>
      </div>
      <div class="header-control">
        <div class="header-inner">
          <div class="location d-flex align-items-center">
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link" @click.prevent>
                <div class="name">Location <DownOutlined /></div>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <a href="javascript:void(0)">Organisation 1</a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a href="javascript:void(0)">Organisation 2</a>
                  </a-menu-item>
                  <a-menu-item key="3">
                    <a href="javascript:void(0)">Organisation 3</a></a-menu-item
                  >
                  <a-menu-item key="4">
                    <a href="javascript:void(0)">Organisation 4</a></a-menu-item
                  >
                </a-menu>
              </template>
            </a-dropdown>
          </div>
          <div class="bar-menu">
            <div class="search-icon" @click="toggle = !toggle"><SearchOutlined /></div>
            <div class="ellipse-icon" @click="ellipse = !ellipse"><MoreOutlined /></div>
          </div>
          <div class="search" :class="toggle ? 'show' : ''">
            <a-input v-model="value" size="large" placeholder="Enter search" />
          </div>
          <div class="profile" :class="ellipse ? 'show' : ''">
            <div class="quick-actions d-flex align-items-center">
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click.prevent>
                  <div class="name">Quick Action <DownOutlined /></div>
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="0">
                      <a href="javascript:void(0)" @click="showModal">Add Appointment</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="javascript:void(0)" @click="addPatient">Add Patient</a>
                    </a-menu-item>
                    <!-- <a-menu-item key="3">
                      <a href="javascript:void(0)" @click="addCare"
                        >Add Care Coordinator</a
                      ></a-menu-item
                    > -->
                    <a-menu-item key="4">
                      <a href="javascript:void(0)" @click="addTask"
                        >Add Task</a
                      ></a-menu-item
                    >
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
            <div class="notifications">
              <a-dropdown :trigger="['click']" overlayClassName="notifications">
                <a class="ant-dropdown-link" @click.prevent>
                  <div class="icon"><NotificationOutlined /></div>
                </a>
                <template #overlay>
                  <a-menu>
                    <li class="title">Notification</li>
                    <li class="listing">
                      <a class="d-flex align-items-center" href="#">
                        <div class="flex-shrink-0 imgProfile">
                          <img src="@/assets/images/user-2.jpg" alt="image" width="50" />
                        </div>
                        <div class="flex-grow-1 ms-3 summary">
                          <p>Just a reminder that you have appoinment</p>
                          <span class="date">40 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="listing">
                      <a class="d-flex align-items-center" href="#">
                        <div class="flex-shrink-0 imgProfile">
                          <img src="@/assets/images/user-1.jpg" alt="image" width="50" />
                        </div>
                        <div class="flex-grow-1 ms-3 summary">
                          <p>Just a reminder that you have appoinment</p>
                          <span class="date">20 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li class="allNotication"><a href="#">Check all notifications</a></li>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
            <div class="profile-menu">
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click.prevent>
                  <div class="name">Jane Doe <strong>Admin</strong></div>
                  <div class="image">
                    <img src="@/assets/images/profile-1.jpg" alt="image" />
                  </div>
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="0">
                      <a href="javascript:void(0)">My Profile</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="javascript:void(0)">Settings</a>
                    </a-menu-item>
                    <a-menu-item key="3"> <a href="#">Logout</a></a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <AddAppointment v-model:visible="appointmentModal" @ok="apptOk" />
    <TasksModal v-model:visible="TasksModal" @ok="taskOk" />
    <PatientsModal v-model:visible="PatientsModal" @ok="patientOk" />
    <CoordinatorsModal v-model:visible="CoordinatorsModal" @ok="handleOk" />
    <!---->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import AddAppointment from "@/components/modals/AddAppointment";
import TasksModal from "@/components/modals/TasksModal";
import PatientsModal from "@/components/modals/PatientsModal";
import CoordinatorsModal from "@/components/modals/CoordinatorsModal";
import {
  NotificationOutlined,
  DownOutlined,
  MenuOutlined,
  SearchOutlined,
  MoreOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    NotificationOutlined,
    DownOutlined,
    MenuOutlined,
    SearchOutlined,
    MoreOutlined,
    AddAppointment,
    TasksModal,
    PatientsModal,
    CoordinatorsModal,
  },
  setup() {
    const toggle = ref(false);
    const ellipse = ref(false);
    function barMenu() {
      document.body.classList.toggle("show");
    }

    const appointmentModal = ref(false);
    const addAppt = () => {
      appointmentModal.value = true;
    };
    const apptOk = (e) => {
      console.log(e);
      appointmentModal.value = false;
    };

    const TasksModal = ref(false);
    const addTask = () => {
      TasksModal.value = true;
    };
    const taskOk = (e) => {
      console.log(e);
      TasksModal.value = false;
    };

    const PatientsModal = ref(false);
    const addPatient = () => {
      PatientsModal.value = true;
    };
    const patientOk = (e) => {
      console.log(e);
      PatientsModal.value = false;
    };

    const CoordinatorsModal = ref(false);
    const addCare = () => {
      CoordinatorsModal.value = true;
    };
    const handleOk = (e) => {
      console.log(e);
      CoordinatorsModal.value = false;
    };

    return {
      barMenu,
      toggle,
      ellipse,

      appointmentModal,
      apptOk,
      addAppt,

      TasksModal,
      addTask,
      taskOk,

      PatientsModal,
      addPatient,
      patientOk,

      CoordinatorsModal,
      addCare,
      handleOk,
    };
  },
});
</script>
