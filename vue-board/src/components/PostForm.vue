<template>
  <div class="post-form">
    <h3>글작성</h3>
    <form v-on:submit.prevent="addPostHandler">
      <div class="form-group">
        <label for="title">제목:</label>
        <input type="text" id="title" name="title" v-model="title" required />
      </div>
      <div class="form-group">
        <label for="content">내용:</label>
        <textarea id="content" name="content" v-model="content" required></textarea>
      </div>
      <div class="form-group">
        <label for="writer">작성자:</label>
        <input id="writer" name="writer" v-model="writer" required />
      </div>
      <button type="submit">작성</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// pinia store에서 addPost 함수 주입
import { usePostStore } from "../stores/post";
const postStore = usePostStore(); // pinia 스토어 사용
// const { addPost } = postStore; // addPost 함수 추출

// 폼 데이터 상태 관리
const title = ref("제목1");
const content = ref("내용1");
const writer = ref("user01");

// 폼 제출 핸들러
const addPostHandler = async () => {
  if (!title.value || !content.value || !writer.value) {
    alert("모든 필드를 작성해주세요.");
    return;
  }
  const newPost = {
    title: title.value,
    content: content.value,
    writer: writer.value,
  };
  await postStore.addPost(newPost);
  // 폼 초기화
  title.value = "";
  content.value = "";
  writer.value = "";
};
</script>

<style scoped>
.post-form {
  max-width: 600px;
  margin: 10px auto;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  font-family: "Noto Sans KR", sans-serif;
}

h3 {
  text-align: center;
  color: #333;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
}

input,
textarea {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  background-color: white;
}

input:focus,
textarea:focus {
  border-color: #42b883;
  box-shadow: 0 0 5px rgba(66, 184, 131, 0.3);
  outline: none;
}

button {
  align-self: flex-end;
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3aa374;
}
</style>
