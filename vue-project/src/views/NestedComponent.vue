<template>
  <div class="parent-container">
    {{ msg }} / {{ age }}
    <button @click="toggleDetails">Toggle</button>
    <PageTitle
      v-bind:title="title"
      v-bind:likes="likeCnt"
      v-bind:isOK="OkVal"
      :memberList="members"
      :isShow="showDetail"
      @child-clicked="handleChildClick"
      ref="page-component"
    />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      msg: "Parent Component",
      age: 0,
      title: "Dynamic Data from Parent",
      likeCnt: 3,
      OkVal: true,
      showDetail: true,
      members: [
        { name: "father", age: 40 },
        { name: "mother", age: 35 },
        { name: "son", age: 6 },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.showDetail = !this.showDetail;
    },
    handleChildClick(payload = { name: "Lee", age: 10 }) {
      this.msg = payload.name;
      this.age = payload.age;
    },
    sum(num1 = 0, num2 = 0) {
      return num1 + num2; // NaN
    },
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style scoped>
/*  */
.parent-container {
  border: 2px solid green;
}
</style>
