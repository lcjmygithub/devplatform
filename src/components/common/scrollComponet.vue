<template>
    <div class="api-detail-nav">
        <div class="nav-item" :class="{active: item.active}" role="presentation" v-for='(item,index) in requesList' :key="index" @click="scrollWZ(item,index)">{{item.title}}</div>
        <div class="nav-border">
          <div class="nav-border-mark" :class="{active:item.active}" v-for='(item,index) in requesList' :key="index"></div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      active: false, //活动锚点
      h1Arr:[],   //存取锚点元素
      offsetTopArr:[], //元素距离顶部距离

   }
  },
    props:{
        requesList: Array,
    },
  created() {
    console.log( this.requesList)
},
   mounted(){
        this.$nextTick(function(){
          // dom渲染后再获取
            let h1Arr = document.querySelectorAll('.basic h1')
            h1Arr.forEach((item,index)=>{
            //元素距离顶部距离
            console.log(item.offsetTop)
            this.offsetTopArr.push(item.offsetTop-1)   //清除误差 滚动的机制
            })
        })
      
        let that= this
        window.addEventListener("scroll", function () {
            
           //滚动高度
            let scrollTop = document.body.scrollTop ||document.documentElement.scrollTop
          //可视区域高度
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
           //滚动条高度
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            that.offsetTopArr.forEach((item,index)=>{
              if(scrollTop>item-10){
                 that.requesList[index].active = false
                //初始化所有的状态active
                 that.offsetTopArr.forEach((v,i)=>{
                   that.requesList[i].active = false
                 })
                 that.requesList[index].active = true
                  console.log(item,index)
                  //当滚动条到底部 不能再滚动了
                  if(scrollTop + clientHeight === scrollHeight){
                     return
                  }
               }

           })
           //当距离顶部为最低点距离时
           if(scrollTop<that.offsetTopArr[0]-10){
               //初始化所有的状态active
                 that.offsetTopArr.forEach((item,index)=>{
                   that.requesList[index].active = false
                 })
             }
           
         
        })
  },
  watch:{
    offsetTopArr(){
         this.$nextTick(function(){
           this.scrollWZ()
         })
     }
  },
  methods: {
     //滚动到某位置
    scrollWZ(item,index){
         let itemHeight = this.offsetTopArr[index]
         let scrollTop = document.body.scrollTop ||document.documentElement.scrollTop
         scrollTop = itemHeight
           
          window.scrollTo({ 
            top: scrollTop, 
            behavior: "smooth" 
        });
       
        
    },
  }
}
</script>
<style lang='stylus' scoped>
.api-detail-nav
    width 200px
    position fixed
    right -30px
    top 50%
    -webkit-transform translateY(-50%)
    transform translateY(-50%)
    text-align center
    .nav-item 
      padding: 10px 0
      cursor: pointer
      color #999
    .active 
      color: #38f
      font-weight: 700
.nav-border
    position absolute
    top 10px
    bottom 8px
    right 50px
    background-color rgba(0,0,0,.1)
    width 2px
    display flex
    flex-direction column
    .nav-border-mark 
      width 2px
      flex 1 1
    .active
      background-color: #38f

</style>