<template>
  <button @click="count++">点击了{{ title }}{{ count }}</button>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["title"],
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style scoped></style>
