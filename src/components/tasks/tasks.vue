<template>
  <div>
    <a-layout>

      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <Header />
      </a-layout-header>

      <a-layout>
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, }">
          <Sidebar />
        </a-layout-sider>

        <a-layout-content>
          <div class="tasks">
            <a-row>
              <a-col :span="24">
                <h2 class="pageTittle">
                  {{$t('tasks.tasks')}}
                  <div class="addtaskButton">
                    <Button :name="buttonName" @click="showModal" />
                  </div>
                  <div class="filter">
                    <button class="btn" :class="toggle ? 'active' : ''" @click="toggle = !toggle">
                      <span class="btn-content">{{$t('tasks.dashboardView')}}</span>
                    </button>
                    <button class="btn" :class="toggle ? '' : 'active'" @click="toggle = !toggle">
                      <span class="btn-content">{{$t('global.listView')}}</span>
                    </button>
                  </div>
                </h2>
              </a-col>
            </a-row>

              <!-- Dashboard View -->
            <div class="dashboard-view" v-show="toggle">
                <TasksDashboardView/>
            </div>

              <!-- List View -->
            <div class="list-view" v-show="!toggle">
                <TasksListView @isEdit="showModal"/>
            </div>

          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <!---->
    <TasksModal v-model:visible="visible" @ok="handleOk" @is-visible="handleOk" />
    <!---->
  </div>
</template>

<script>
import Header from "../layout/header/Header";
import Sidebar from "../layout/sidebar/Sidebar";
import TasksModal from "@/components/modals/TasksModal";
import { ref } from "vue";
import Button from "@/components/common/button/Button";
import TasksDashboardView from "@/components/tasks/TasksDashboardView";
import TasksListView from "@/components/tasks/TasksListView";

export default {
  components: {
    Header,
    Sidebar,
    TasksModal,
    Button,
    TasksDashboardView,
    TasksListView,
  },
  setup() {
    const toggle = ref(true);
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    const handleOk = () => {
      visible.value = false;
    };
    return {
      buttonName: "Add New Task",
      toggle,
      visible,
      showModal,
      handleOk,
    };
  },
};
</script>
