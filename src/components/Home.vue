<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
        <img src="../../static/img/yuexunLogo.png" alt="">
         <h1>开放平台</h1>
    </el-header>
    <el-container>
       <!-- 左侧菜单 -->
      <el-aside width="256px">
        
               <sideMenu></sideMenu>
          </div>
      </el-aside>
      <!-- 主体 -->
      <el-main>
          <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from  './aside/Aside'
export default {
  name: "home",
  components:{
    sideMenu:Aside
  },
  data() {
    return {
      router: true,
      defaultActive: this.$router.options.routes[2].path
    };
  },
  methods: {
     
   
  },
  mounted() {
   
    window.console.log(this.$router.options.routes);
  }
};
</script>

<style scoped lang="stylus">

.el-header
  display flex
  justify-content flex-start
  align-items center
  box-shadow 0 1px 8px rgba(0,0,0,.2)
  margin-bottom 10px
  img 
    width 100px
    height 30px
    border 0 
    margin 0
  h1
    font-size 17px
    margin 0 0 0 20px
    font-weight 500

</style>