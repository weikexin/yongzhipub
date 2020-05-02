<template>
  <CDataTable
    :items="items"
    :fields="fields"
    items-per-page-select
    :items-per-page="10"
    hover
    sorter
    pagination
  ></CDataTable>
</template>

<script>
const tableData = [
  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },
  {
    name: "Contract",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },
  {
    name: "Contact",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },
  {
    name: "Linkman",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  },

  {
    name: "Customer",
    type: "Table",
    valueCol: "customerName",
    enterPanel: "",
    busiPackage: "CRM"
  }
];

const fields = [
  { key: "name", label: '业务对象', _style: "width:20%" },
  { key: "type", label: '类型'},
  { key: "valueCol", label: '特征值列',  _style: "width:20%;" },
  { key: "enterPanel", label: '入口面板', _style: "width:20%;" },
  {
    key: "busiPackage",
    label: "业务包",
    _style: "width:10%",
    sorter: false,
    filter: false
  }
];

export default {
  data() {
    return {
      items: tableData.map((item, id) => {
        return { ...item, id };
      }),
      fields
    };
  },

  methods: {
    boClick(row) {
      console.log(row);
      //console.log(this.$router.options.routes[0].children[])
      this.$router.push({
        name: "bodetails",
        params: { bouid: row.name, meta: { label: "abc" } }
      });
    }
  }
};
</script>

<style scoped>
.tableborder {
  border: 1px solid;
  border-radius: 0.25rem;
  border-color: #d8dbe0;
}
</style>