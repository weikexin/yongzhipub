<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 字段
        </span>
        <CRow>
          <CCol sm="12">
            <el-table :data="fieldData" class="tableborder" border style="width: 100%">
              <el-table-column prop="label" label="显示名称">
                <template slot-scope="scope">
                  <el-link type="primary" @click="boClick(scope.row)">{{scope.row.name}}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="名称"></el-table-column>
              <el-table-column prop="plattype" label="类型"></el-table-column>
              <el-table-column prop="isnull" label="允许为空"></el-table-column>
              <!-- end add filter -->
            </el-table>
          </CCol>
        </CRow>
      </el-tab-pane>
      <el-tab-pane label="服务">服务</el-tab-pane>
      <el-tab-pane label="表格">表格</el-tab-pane>
      <el-tab-pane label="面板">面板</el-tab-pane>
      <el-tab-pane label="设置">设置</el-tab-pane>
    </el-tabs>

    <el-drawer
      title="我嵌套了 Form !"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
          >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Bo",
  data() {
    return {
      dialog: false,
      loading: false,
      fieldData: [
        {
          label: "姓名",
          name: "username",
          plattype: "Text",
          isnull: "true"
        },
        {
          label: "性别",
          name: "gender",
          plattype: "Text",
          isnull: "true"
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "80px",
      timer: null
    };
  },
  mounted: function() {
    this.$route.meta.label = this.$route.params.bouid;
    console.log("seleted bo uid:" + this.$route.params.bouid);

    console.log("Business Objects is created");
  },
  destroyed: function() {
    console.log("Business Objects is destroyed");
  },
  methods: {
    boClick(row) {
      console.log(row);
      this.dialog = true
      //弹出
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
};
</script>
