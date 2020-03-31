<template>
  <div class="container_authentication_method">
    <myTile>
      <div slot="title">{{title}}</div>
    </myTile>
    <div class="api-truth-method h1class">
      <div
        class="info"
      >调用接口的认证方式为令牌方式，三方公司通过在跃讯crm后台创建账户名和密码，使用username和password通过获取accessToken接口拿到accessToken，accessToken的有效期为7天，过期需要重新调用接口获取。</div>
      <div class="get-way">
        <div class="basic">
          <h1 style="font-size: 20px;">请求格式</h1>
          <div class="info">如果通过HTTPS进行调用，需要遵循格式：application/json;charset=utf-8</div>
        </div>
        <div class="basic">
          <h1 style="font-size: 20px;">请求方法</h1>
          <div class="info">POST/GET</div>
        </div>
        <div class="basic">
          <h1 style="font-size: 20px;">返回格式</h1>
          <div class="info">application/json</div>
        </div>
        <div class="basic">
          <h1 style="font-size: 20px;">响应对象</h1>
           <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="refs" label="参数名" width="180"></el-table-column>
            <el-table-column prop="describle" label="描述"></el-table-column>
           </el-table>
        </div>
      </div>
       <myscroll :requesList='requesList'></myscroll>
 
       <h1 class="get-token">获取Token</h1>
     
      <router-link to="/get_token">
        <div class="api-to-get">
          <span>点击前往获取</span>
          <img src="../../../static/img/authentication_method/right.e39044dd.svg" alt />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "请求说明",
      requesList:[{title:'请求格式',active:false},{title:'请求方法',active:false},{title:'返回格式',active:false},{title:'响应对象',active:false},{title:'获取Token',active:false}],
     
      tableData: [
        {
          refs: "code",
          describle: "接口响应码， 10000表示成功，100001表示失败”"
        },
        {
          refs: "content",
          describle: "API调用返回结果"
        },
        // {
        //   refs: "resultMsg",
        //   describle: "响应信息提示"
        // },
        // {
        //   refs: "requestId",
        //   describle: "请求唯一标识"
        // }
      ]
    };
  },
  created() {},
  mounted(){
     
  },
  methods: {
   
  }
};
</script>
<style lang='stylus' scoped>
.container_authentication_method
    margin-left 20px
    text-align left
    padding-right 40px
.api-truth-method
    margin-right: 100px
.info
    margin-bottom 20px
    margin-right 100px
    padding-top 20px
    font-size 14px
.basic
    .info
        margin-left 10px
        margin-bottom 30px
        margin-right 100px
        padding-top 0
        font-size 14px
        text-indent 1em
        border none
h1
    font-size 16px!important
    margin-bottom 20px
.el-table
  width 100%

.get-token 
    font-size 16px!important
    margin 30px 0
.api-to-get 
    float right
    width 150px
    display flex
    align-items center
    margin-top 30px
    margin-right 100px
    margin-bottom 30px
    cursor pointer
    img
      width 30px
      margin-left 15px
      border-style none

</style>