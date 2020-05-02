<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          bordered
          small
          fixed
        >
          <template #header>
            <CIcon name="cil-grid" />My Projects
            <div class="card-header-actions">
              <CButton
                :name="创建新的工程"
                size="lg"
              >
              <!--安装一个工程，发布一个工程，工程之间的依赖如何处理-->
                <span>创建新的工程</span>
              </CButton>
            </div>
          </template>
        </CTableWrapper>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from "../base/Table.vue";
import usersData from "../users/UsersData";

export default {
  name: "MyProjects",
  components: { CTableWrapper },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(usersData.slice(0));
    }
  }
};
</script>
