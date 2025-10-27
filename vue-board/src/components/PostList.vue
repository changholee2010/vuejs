<template>
  <div class="post-list">
    <h3>게시글 목록</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h4>
          <RouterLink v-bind:to="{ name: 'PostView', params: { id: post.id } }">{{
            post.title
          }}</RouterLink>
        </h4>
        <p>{{ post.content }}</p>
        <p>
          <em>작성자: {{ post.writer }}</em>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.post-list {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  font-family: "Noto Sans KR", sans-serif;
}

h3 {
  text-align: center;
  color: #333;
  margin-bottom: 25px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 반응형 그리드 */
  gap: 20px;
  list-style: none;
  padding: 0;
}

li {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
  color: #555;
}

em {
  font-style: normal;
  color: #888;
  font-size: 0.9em;
}
</style>
