import Vue from "vue";
import App from "./App";
Vue.config.productionTip = false;
new Vue({
  el: "#root",
  //   把导入过来的App组件配置对象，在vue模板中解析为一个标签名<App/>并使用
  //  把这个标签在模板中进行渲染
  // render: (h) => h(App),

  components: {
    App,
  },
  template: "<App/>",
});
