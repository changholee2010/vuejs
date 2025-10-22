<script setup>
import { ref, reactive } from "vue";

const welcomeMsg = ref("나의 첫 웹 페이지");
const content = ref("HTML과 CSS로 만든 기본 구조");
const data = reactive({
  welcome: "환영합니다!",
  content: "이 페이지는 HTML과 CSS로 만들어졌으며, 기본적인 구조와 스타일을 포함하고 있습니다.",
  link: `https://www.example.com`,
});
const footMsg = ref("&copy; 2025 나의 웹 페이지. 모든 권리 보유.");
</script>

<template>
  <div id="todo">
    <header>
      <h1>{{ welcomeMsg }}</h1>
      <p>{{ content }}</p>
    </header>

    <main>
      <h2>{{ data.welcome }}</h2>
      <p>{{ data.content }}</p>

      <h3>내용 예시</h3>
      <ul>
        <li>간단한 텍스트</li>
        <li>링크: <a v-bind:href="data.link" target="_blank">예시 사이트</a></li>
        <li>리스트 항목</li>
      </ul>
    </main>

    <footer v-html="footMsg"></footer>
  </div>
</template>

<style scoped>
/* 기본 CSS 스타일 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

#todo {
  padding: 0 20px;
}

header {
  background-color: #4caf50;
  color: white;
  padding: 20px 0;
  text-align: center;
}

main {
  margin: 20px auto;
  max-width: 800px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

footer {
  text-align: center;
  padding: 15px;
  font-size: 14px;
  color: #888;
}

a {
  color: #4caf50;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
