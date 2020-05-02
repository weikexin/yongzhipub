<template>
  <CRow>
    <CCol md="4" sm="6">
      <div class="card cursor_pointer" @click="upload">
        <div class="card-header content-center p-0">
          <svg class="iconfont my-4" aria-hidden="true">
            <use xlink:href="#iconMicrosoft-Excel" />
          </svg>
        </div>
        <div class="card-body row text-center">
          <span class="wizardtype">上传Excel创建</span>
        </div>
      </div>
    </CCol>
    <CCol md="4" sm="6">
      <div class="card cursor_pointer"  @click="formdesign">
        <div class="card-header content-center p-0">
          <svg class="iconfont my-4" height="56" aria-hidden="true">
            <use xlink:href="#icongform" />
          </svg>
        </div>
        <div class="card-body row text-center">
          <span class="wizardtype">通过表单创建</span>
        </div>
      </div>
    </CCol>
    <CCol md="4" sm="6">
      <div class="card cursor_pointer"  @click="objectdesign">
        <div class="card-header content-center p-0">
          <svg class="iconfont my-4" height="56" aria-hidden="true">
            <use xlink:href="#iconengineering" />
          </svg>
        </div>
        <div class="card-body row text-center">
          <span class="wizardtype">通过业务表创建</span>
        </div>
      </div>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "QuickStart",
  methods: {
    upload() {
      console.log("clicked")
      alert("Pleace upload excel file!")
    },
    formdesign() {
      alert("Goto form designer!")
    },
    objectdesign(){
      alert("Goto object designer!")
    }
  }
};
</script>

<style scoped>
.c-chart-brand {
  position: absolute;
  width: 100%;
  height: 100px;
}
.iconfont {
  width: 10em;
  height: 10em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.wizardtype {
  width: 100%;
  vertical-align: middle;
  text-align: center;
}
.cursor_pointer {
  cursor: pointer;
}
</style>
