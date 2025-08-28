<template>
  <div>
    <img v-bind:src="imgSrc" v-bind:width="widthVal" />
  </div>
  <div class="container" v-bind:class="{ active: isActive, 'text-red': isRed }">
    Class Binding
  </div>
  <div v-bind:class="clsAry">Class Binding 배열</div>
  <div :style="backVal">Style Binding</div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      widthVal: "100px",
      isActive: false,
      isRed: true,
      activeCls: "active",
      redCls: "text-red",
      clsAry: ["active", "text-red"],
      backVal: { backgroundColor: "red", color: "green" },
    };
  },
};
</script>

<style scoped>
.active {
  background-color: green;
  font-weight: bold;
  color: white;
}
.text-red {
  color: red;
}
</style>
