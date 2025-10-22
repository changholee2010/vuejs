<template>
  <p>이름: <input type="text" v-model="fname" /></p>
  <p>나이: <input type="number" v-model="fage" /></p>
  <p><button v-on:click="addFriend">친구추가</button></p>
  <h3>{{ title }}</h3>
  <table>
    <thead>
      <tr>
        <th>이름</th>
        <th>나이</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="friend in friends" v-bind:key="friend.name">
        <td>{{ friend.name }}</td>
        <td>{{ friend.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, reactive } from "vue";

// Data.
const friends = reactive([
  { name: "홍길동", age: 20 },
  { name: "김민식", age: 21 },
]);
const fname = ref("우리형");
const fage = ref(20);

const title = ref("친구목록");
const finfo = reactive({
  name: "우리형",
  age: 20,
});

// function.
const addFriend = () => {
  // friends.push({ name: finfo.name, age: finfo.age });
  friends.push({ name: fname.value, age: fage.value });

  finfo.name = "";
  finfo.age = 0;

  fname.value = "";
  fage.value = 0;
};
</script>
