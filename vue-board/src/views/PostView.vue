<template>
  <h3>상세화면</h3>
  <div>
    <h3>제목: {{ post.title }}</h3>
    <p>내용: {{ post.content }}</p>
    <p>
      <em>작성자: {{ post.writer }}</em>
    </p>
    <p>작성일시: {{ post.write_date }}</p>
    <p><button v-on:click="deletePostHandler">삭제</button></p>
    <RouterLink to="/">목록으로</RouterLink>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import { usePostStore } from "../stores/post";

const route = useRoute(); // 라우트 정보 접근
const router = useRouter(); // 라우터 인스턴스 접근

// store 사용
const postStore = usePostStore();
// State, Getter 사용.
const post = computed(() => {
  console.log("computed post called");
  return postStore.getPostById(route.params.id) || {};
});

// 게시글 데이터 상태 관리
onBeforeMount(async () => {
  await postStore.fetchPosts(); // 게시글 목록을 미리 가져옴
});
onMounted(() => {
  console.log("onMounted called");
  post.value = computed(() => {
    console.log("computed post called");
    return postStore.getPostById(route.params.id) || {};
  });
});

// 삭제 핸들러
const deletePostHandler = async () => {
  const postId = route.params.id;
  await postStore.deletePost(postId);
  // 목록으로 이동
  router.push({ name: "HomeView" });
};
</script>
