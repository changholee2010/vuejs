import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

const API_BASE = "http://localhost:3000";

export const usePostStore = defineStore("post", () => {
  // state.
  const posts = ref([]);
  // getters.
  const getPostById = computed(() => {
    return (id) => posts.value.find((post) => post.id === id);
  });
  // actions.
  // Fetch all posts from the server.
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(`${API_BASE}/boards`);
      posts.value = data;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  // Add a new post to the server.
  const addPost = async (newPost) => {
    try {
      const { data } = await axios.post(`${API_BASE}/board`, { param: newPost });
      posts.value.push({ ...newPost, id: data.insertId });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  // Delete a post from the server.
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_BASE}/board/${id}`);
      posts.value = posts.value.filter((post) => post.id !== id);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  // Update an existing post on the server.
  const updatePost = async (id, updatedPost) => {
    try {
      await axios.put(`${API_BASE}/board/${id}`, updatedPost);
      const index = posts.value.findIndex((post) => post.id === id);
      if (index !== -1) posts.value[index] = { ...posts.value[index], ...updatedPost };
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  // expose.
  return { posts, getPostById, fetchPosts, addPost, deletePost, updatePost };
});
