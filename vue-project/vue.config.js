const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      // api: 개발 서버에서 프록시(proxy)를 적용할 대상 URL의 접두사 역할
      "/api": {
        target: "http://localhost:3000", // 요청을 보낼 백엔드 서버
        changeOrigin: true,
        // pathRewrite: { '^/api': '' } // 필요 시 주석 해제
      },
    },
  },
});
