<template>
      <div class="menu_box cl">
          <el-menu
          unique-opened
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          router
          background-color="#f7f8fa"
          @select = "selectMenuItem"
          @open="handleOpen"
          @close="handleClose">
          <!-- 一级菜单 -->
          <el-submenu :index="item.path" v-for="item in Eroutes" :key='item.path' >
            <template slot="title" >
              <i :class="item.meta.icon"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="child in item.children" v-if="child.meta.has2thChildren">
                <el-submenu :index="child.path" >
                  <template slot="title">
                      <i :class="child.meta.icon"></i>
                      <span>{{child.meta.title}}</span>
                  </template>
                  <!-- 三级菜单 -->
                  <el-menu-item :index="th3Child.path" v-for="(th3Child,index) in child.children" :key="th3Child.path" @click="clickItem(th3Child,index)">{{th3Child.meta.title}}</el-menu-item>
              </el-submenu>
            </template>
            
              <!-- 二级菜单 -->
            <template v-for="(childItem,index) in item.children" >
                <el-menu-item  :index="childItem.path"  :key="childItem.path"  v-if="!childItem.meta.has2thChildren"  @click="clickItem(childItem,index)">
                    <template slot="title" >
                    <span> {{childItem.meta.title}}</span>
                </template>
                </el-menu-item>
            </template>
          </el-submenu>
          <!--  一级菜单 ，没有子菜单 -->
          <el-menu-item :index="item.children[0].path" v-for="(item,index) in routes" :key="item.children[0].path" @click="clickItem(item,index)">
            <template>
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.meta.title}}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
</template>

<script>
export default {
  data() {
    return {
    defaultActive:'/quick_to_door',
    scrollClass: false
   }
  },
  created() {
    this.defaultActive = this.$route.path
},
  mounted(){

  },
  computed: {
   
    Eroutes(){
      return  this.$router.options.routes.filter((item,index)=>{
            if(!item.meta.hasNoChildren){
                return item
            }
        })
        
    },
    routes(){
       return  this.$router.options.routes.filter((item,index)=>{
            if(item.meta.hasNoChildren){
                return item
            }
        })
    },
     // defaultActive(){
  //   return this.$route.path
  // }
  },
  watch:{
    
  },
  methods: {
   //菜单单项点击
  clickItem(item,index){
    this.defaultActive = item.path
    //滚动高度
    let scrollTop = document.body.scrollTop ||document.documentElement.scrollTop
    //菜单高度
     let MenuscrollTop = document.getElementsByClassName('cl')[0].offsetHeight
    //可视区域高度
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //滚动条高度
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log('滚动高度')
    console.log(scrollTop)
    console.log('菜单高度')
    console.log(MenuscrollTop)
     document.getElementsByClassName('cl')[0].scrollTo({ 
        //滚动条置底部
        top: MenuscrollTop
      });
        window.scrollTo({ 
        top: 0, 
        // behavior: "smooth" 
      });
  },
  selectMenuItem(e,h){
    console.log(e)
  },
    
  handleOpen(){

  },
  handleClose(){

  },
},

}
</script>
<style lang='stylus' scoped  rel="stylesheet/stylus">
// 选中项背景设置
.menu_box
   height 110vh
   overflow auto;
   
.el-menu
  .is-active
    background-color #38f!important
    color: #fff
//hover 背景设置
// .el-submenu__title
//   &:hover
//     background-color rgba(51,136,255,.2)!important

// .el-menu-item
//   &:hover
//     background-color rgba(51,136,255,.2)!important

.el-menu
  background-color #f7f8fa
  color rgba(0,0,0,.65)
.menu_warp
   overflow-y scroll
</style>
