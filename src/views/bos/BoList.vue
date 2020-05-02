<template>
  <CCardBody>
    <el-table :data="tableData" class="tableborder" border style="width: 100%">
      <el-table-column prop="name" label="名称" width="180">
        <template slot-scope="scope">
          <el-link type="primary" @click="boClick(scope.row)">{{scope.row.name}}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180"></el-table-column>
      <el-table-column prop="valueCol" label="特征值字段" width="180"></el-table-column>
      <el-table-column prop="enterPanel" label="入口面板" width="180"></el-table-column>
      <el-table-column prop="busiPackage" label="业务包"></el-table-column>
      <!-- end add filter -->
    </el-table>
  </CCardBody>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
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
      ]
    };
  },

  methods: {
    boClick(row) {
      console.log(row);
      //console.log(this.$router.options.routes[0].children[])
      this.$router.push({
        name: "bodetails",
        params: { bouid: row.name, meta: { label: 'row.name' } }
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