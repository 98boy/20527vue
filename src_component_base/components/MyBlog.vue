<template>
  <h2>这个文章标题是{{ title }} <MyButton :title="title"></MyButton></h2>
</template>

<script type="text/ecmascript-6">
import MyButton from "./Mybutton";
export default {
  // 声明接收属性
  props: ["title"],
  components: {
    MyButton
  }
};
</script>

<style scoped></style>
