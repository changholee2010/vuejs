<template>
  <div>
    <h3>{{ msg }}</h3>
    <form>
      <input type="file" @change="getFileInfo" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      msg: "API Test",
    };
  },
  methods: {
    getFileInfo(e) {
      console.log(e);
      const file_name = e.target.files[0].name; // File {name:'레드향.jpg', modified...., size:....}
      const file = e.target.files[0]; // Stream -> text 변환.
      let fr = new FileReader();
      fr.onload = (ev) => {
        let base64Txt = ev.target.result;
        // console.log(base64Txt.slice(base64Txt.indexOf(";base64") + 8));
        const data = base64Txt.slice(base64Txt.indexOf(";base64") + 8);
        axios //
          .post("/upload/" + file_name, { param: data })
          .then((result) => console.log(result));
      };
      fr.readAsDataURL(file);
    },
  },
  mounted() {
    //
  },
};
</script>

<style scoped></style>
