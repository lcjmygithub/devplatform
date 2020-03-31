<template>
  <div class="container_callback_desc">
    <myTile>
      <div slot="title">{{title}}</div>
    </myTile>
    <div class="api-callback-desc h1class">
        <div
          class="info"
        >回调需要现先在跃讯后台配置回调地址，配置成功后所有的回调都会发送到该地址。由于回调会有重试，所以可能会有重复回调的情况出现，三方公司应自己做好幂等。</div>
      <div class="get-way">
        <div class="basic" style="margin-top: 25px">
          <h1 style="font-size: 20px;">请求url</h1>
          <div class="info">客户方提供。</div>
        </div>
        <div class="basic">
          <h1 style="font-size: 20px;">请求方式</h1>
          <div class="info">HTTP GET</div>
        </div>
        <div class="basic">
          <h1 style="font-size: 20px;">请求参数</h1>
          <div class="info">相关的请求参数请参照回调模块里的对应回调页面</div>
        </div>
         <div class="basic">
          <h1 style="font-size: 20px;">返回参数</h1>
          <div class="info">无</div>
        </div>
      </div>
      
    </div>
    <myscroll :requesList="requesList"></myscroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "回调说明",
      requesList:[{title:'请求url',active:false},{title:'请求方式',active:false},{title:'请求参数',active:false},{title:'返回参数',active:false}],
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang='stylus' scoped>
.container_callback_desc
    margin-left 20px
.api-callback-desc
    margin-right 200px
.basic
    .info
        margin-left 10px
        margin-bottom 30px
        margin-right 100px
        padding-top 10px
        font-size 14px
        text-indent 1em
        border none
h1
    font-size 16px!important
    margin-bottom 20px
.el-table
    .el-table thead
        color rgba(0,0,0,.85)
        background-color #666
    .el-table__body
        margin-right 100px
   
</style>