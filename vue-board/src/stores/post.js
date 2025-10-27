import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
// import { useRoute } from "vue-router";

export const usePostStore = defineStore("post", () => {
  const posts = ref([]); // state

  // getter : 가공된 state 반환.
  const getPostById = computed(() => {
    // const id = parseInt(useRoute().params.id); // 라우트 파라미터에서 id 가져오기
    return (id) => posts.value.find((post) => post.id === id);
  });

  // action : 데이터변경.
  const addPost = async (newPost) => {
    try {
      const result = await axios.post("http://localhost:3000/board", { param: newPost });
      posts.value.push({ ...newPost, id: result.data.insertId });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const deletePost = async (id) => {
    console.log("deletePost called");
    await axios.delete(`http://localhost:3000/board/${id}`); // DB에서 삭제
    posts.value = posts.value.filter((post) => post.id !== id); // 로컬 상태에서 삭제
  };

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:3000/boards");
    posts.value = response.data;
  };

  // 수정처리.

  return { posts, getPostById, addPost, deletePost, fetchPosts };
});
