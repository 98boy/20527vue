<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  // props:['addComment'],//props传递数据需要
  data(){
    return {
      username:'',
      content:''
    }
  },
  methods:{
    addC(){
      //根据收集到的数据创建一个对象
      let username = this.username
      let content = this.content
      let id = Date.now()  //id值目前我们可以使用随机的毫秒数作为唯一值
      //把这个对象添加到comments数组的前面
      if(username.trim() && content.trim()){
        let obj = {
          username,
          content,
          id
        }
        //不能在这dComment(o里去动comments，必须使用App当中对应的方法去操作
        // this.adbj)//props传递数据的写法
        // this.$emit 也是Vue原型当中的方法 this代表的是子组件对象，也是可以使用的
        this.$emit('addComment',obj)
      }
      this.username = ''
      this.content = ''

    }
  }
};
</script>

<style scoped>
</style>
