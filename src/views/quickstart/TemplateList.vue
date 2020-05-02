<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetProgress
        header="报名系统"
        footer="特殊时期，统计个人的健康、出现情况"
        color="success"
        inverse
        :value="90"
      />
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetProgress
        header="销售统计"
        text=""
        footer="Lorem ipsum dolor sit amet enim."
        color="info"
        inverse
        :value="80"
      />
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetProgress
        header="客户管理"
        text="Lorem ipsum..."
        footer="Lorem ipsum dolor sit amet enim."
        color="warning"
        inverse
        :value="100"
      />
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetProgress
        header="库存管理"
        text="库存管理"
        footer="Lorem ipsum dolor sit amet enim."
        color="danger"
        inverse
        :value="100"
      />
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "",
  methods: {
    install() {
      console.log("clicked");
      alert("install this template!");
    }
  }
};
</script>

<style scoped>
</style>
