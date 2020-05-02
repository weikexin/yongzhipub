<template>
  <div class="bocontaner">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "BoContainer",
  data() {
    return {};
  },
};
</script>


<style scoped>
@media (min-width: 768px) {
  .bocontaner {
    margin-top: -32px;
    margin-left: -28px;
    margin-right: -28px;
  }
}

@media (max-width: 768px) {
  .bocontaner {
    margin-top: -32px;
    margin-left: -14px;
    margin-right: -14px;
  }
}
</style>