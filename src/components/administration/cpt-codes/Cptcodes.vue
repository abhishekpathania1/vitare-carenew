<template>
  <div>
    <!---->
    <a-layout>
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <Header />
      </a-layout-header>
      <a-layout>
        <Sidebar />
        <a-layout-content>
          <div class="common-bg">
            <a-row>
              <a-col :span="24">
                <h2 class="pageTittle">
                  CPT Codes
                  <div class="commonBtn">
                    <a-button class="btn primaryBtn" @click="showModal"
                      >Add CPT Codes</a-button
                    >
                  </div>
                </h2>
              </a-col>
              <a-col :span="12">
                <a-select
                  v-model:value="value2"
                  :size="size"
                  mode="tags"
                  style="width: 100%"
                  placeholder="Search . . ."
                  :options="searchoptions"
                  @change="handleChange2"
                >
                </a-select>
              </a-col>
              <a-col :span="12">
                <div class="text-right mb-24">
                  <a-button class="primaryBtn">Export to Excel</a-button>
                </div>
              </a-col>
              <a-col :span="24">
                <a-table
                  :columns="columns"
                  :data-source="data"
                  :scroll="{ x: 900 }"
                  @change="onChange"
                >
                  <template #actions>
                    <a-tooltip placement="bottom">
                      <template #title>
                        <span>Edit</span>
                      </template>
                      <a class="icons"><EditOutlined /></a>
                    </a-tooltip>
                    <a-tooltip placement="bottom">
                      <template #title>
                        <span>Delete</span>
                      </template>
                      <a class="icons"> <DeleteOutlined /></a>
                    </a-tooltip>
                  </template>
                  <template #active="key">
                    <a-switch v-model:checked="checked[key.record.key]" />
                  </template>
                </a-table>
              </a-col>
            </a-row>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <!--modals-->
    <CptCodesModal v-model:visible="visible" @ok="handleOk" />
    <!---->
  </div>
</template>

<script>
import Header from "@/components/administration/layout/header/Header";
import Sidebar from "@/components/administration/layout/sidebar/Sidebar";
import CptCodesModal from "@/components/modals/CptCodesModal";
import { ref } from "vue";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons-vue";
const columns = [
  {
    title: "Cpt Code",
    dataIndex: "cpt",
    sorter: {
      compare: (a, b) => a.cpt - b.cpt,
      multiple: 3,
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: {
      compare: (a, b) => a.description - b.description,
      multiple: 3,
    },
  },
  {
    title: "Billing Amount",
    dataIndex: "billing",
    sorter: {
      compare: (a, b) => a.billing - b.billing,
      multiple: 2,
    },
  },
  {
    title: "Active/Inactive",
    dataIndex: "active",
    slots: {
      customRender: "active",
    },
  },
  {
    title: "Actions",
    dataIndex: "actions",
    slots: {
      customRender: "actions",
    },
  },
];
const data = [
  {
    key: 1,
    cpt: "90791",
    description: "Evaluation",
    billing: "$150",
    active: "",
    action: "",
  },
  {
    key: 2,
    cpt: "90832",
    description: "LCSW Ongoing Services",
    billing: "$200",
    active: "",
    action: "",
  },
  {
    key: 3,
    cpt: "96130",
    description: "Deep Dive",
    billing: "$120",
    active: "",
    action: "",
  },
  {
    key: 4,
    cpt: "96138",
    description: "M3 Screening - MSW",
    billing: "$160",
    active: "",
    action: "",
  },
  {
    key: 5,
    cpt: "99358",
    description: "Patient Discharge",
    billing: "$300",
    active: "",
    action: "",
  },
  {
    key: 6,
    cpt: "99453",
    description: "(ES Team) Setup and patient education for use of RPM equipment",
    billing: "$150",
    active: "",
    action: "",
  },
];
export default {
  components: {
    Header,
    Sidebar,
    DeleteOutlined,
    EditOutlined,
    CptCodesModal,
  },

  setup() {
    const checked = ref([false]);

    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    const handleChange2 = (value) => {
      console.log(`selected ${value}`);
    };

    const searchoptions = ref([
      {
        value: "90791",
        label: "90791",
      },
      {
        value: "90832",
        label: "90832",
      },
      {
        value: "96130",
        label: "96130",
      },
      {
        value: "Evaluation",
        label: "Evaluation",
      },
      {
        value: "Deep Dive",
        label: "Deep Dive",
      },
      {
        value: "Patient Discharge",
        label: "Patient Discharge",
      },
      {
        value: "99358",
        label: "99358",
      },
      {
        value: "99453",
        label: "99453",
      },
    ]);
    return {
      columns,
      data,
      checked,
      handleChange2,
      searchoptions,
      size: ref([]),

      visible,
      showModal,
      handleOk,
    };
  },
};
</script>
