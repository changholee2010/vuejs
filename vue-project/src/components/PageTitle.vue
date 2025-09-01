<template>
  <div class="child-container">
    {{ msg }}
    <h3>{{ title }}</h3>
    <div v-if="isShow">
      <p>Likes: {{ likes }}</p>
      <p>is OK ? {{ isOK ? "Yes" : "No" }}</p>
    </div>
    <h3>Member List</h3>
    <ul>
      <li v-for="(family, i) in memberList" :key="i">
        {{ family.name }} - {{ family.age }} year old.
      </li>
    </ul>
    <input v-model="name" />
    <input type="text" v-model="age" />
    <button @click="callParentEvent">call parent event</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Child Component",
      name: "Lee",
      age: 10,
    };
  },
  props: {
    title: { type: String, default: "Default Title" },
    likes: { type: Number, default: 0 },
    isOK: { type: Boolean, default: false },
    isShow: { type: Boolean, default: true },
    memberList: {
      type: Array,
      default: () => [], // Object, Array => 함수로 초기정의
    },
  },
  methods: {
    callParentEvent() {
      this.$emit("child-clicked"); // 부모컴포넌트로 이벤트 송출.
    },
  },
  mounted() {
    console.log(this);
    this.$parent.msg = "부모 컴포넌트";
  },
};
</script>

<style scoped>
/*  */
.child-container {
  border: 2px dotted red;
}
</style>
