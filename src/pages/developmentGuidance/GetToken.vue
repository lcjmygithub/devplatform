<template>
  <div class="container_get_token">
    <!-- 标题 -->
    <myTile>
      <div slot="title">{{title}}</div>
    </myTile>
    <div class="get-token-container">
      <div class="basic">
        <h1 style="font-size: 20px;">简要描述</h1>
        <div class="info">获取token，每个接口请求时都需要在参数中携带accessToken进行身份验证</div>
      </div>
      <div class="basic">
        <h1 style="font-size: 20px;">请求URL</h1>
        <div class="info">
           {{$store.state.baseURL+'open/login'}}
          <i aria-label="icon: copy" title="点击复制" tabindex="-1" class="anticon anticon-copy" 
          @click="doCopy" >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class
              data-icon="copy"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fill="#e6f7ff" d="M232 706h142c22.1 0 40 17.9 40 40v142h250V264H232v442z" />
              <path
                fill="#1890ff"
                d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z"
              />
              <path
                fill="#1890ff"
                d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
              />
            </svg>
          </i>
        </div>
      </div>
      <div class="basic">
        <h1 style="font-size: 20px;">请求方式</h1>
        <div class="info">HTTP application/json, text/plain</div>
      </div>
      <div class="basic">
        <h1 style="font-size: 20px;">请求参数</h1>
         <div style=";">
               <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%;">
                    <el-table-column
                    prop="refsName"
                    label="参数名"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="required"
                    label="必选"
                    width="120"
                    >
                    </el-table-column>
                     <el-table-column
                    prop="types"
                    label="类型"
                      width="120"
                    >
                    </el-table-column>
                     <el-table-column
                    prop="introstactor"
                    label="说明"
                    >
                    </el-table-column>
               </el-table>
         </div>
      </div>
      <div class="basic" >
        <h1 style="font-size: 20px;margin-top:25px">返回参数</h1>
         <div style=";">
               <el-table
                    :data="tableData1"
                    stripe
                    style="width: 100%;">
                    <el-table-column
                    prop="return_refsName"
                    label="参数名"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="return_required"
                    label="必选"
                    width="120"
                    >
                    </el-table-column>
                     <el-table-column
                    prop="return_types"
                    label="类型"
                      width="120"
                    >
                    </el-table-column>
                     <el-table-column
                    prop="return_introstactor"
                    label="说明"
                    >
                    </el-table-column>
               </el-table>
         </div>
      </div>
      <div class="basic">
        <h1 style="">请求示例</h1>
        <div class="code">
          curl -X POST <br>
          {{$store.state.baseURL+'open/login'}} <br>
          -H <br>
          "Content-Type: application/json, text/plain," <br>
          -d <br>
          /user.userName=xiaoMing@qq.com&user.password=123456789
        </div>
      </div>
      <div class="code-example basic">
        <h1>返回示例</h1>
        <div class="code">
          {    <br>
          "code": 10000,  <br>
          "content": "{{token}}", <br>
          }
        </div>
      </div>
      <!-- <div class="basic">
        <h1 style="font-size: 20px;">错误码集</h1>
        <div>
              <el-table
                    :data="tableData2"
                    stripe
                    style="width: 100%;">
                    <el-table-column
                    prop="erro"
                    label="错误码集"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="erro1"
                    label="错误码集"
                    width="120"
                    >
                    </el-table-column>
                     <el-table-column
                    prop="resolve"
                    label="解决方法"
                      width=""
                    >
                    </el-table-column>
               </el-table>
        </div>
      </div> -->
      <myscroll :requesList='requesList'></myscroll>  
      <div class="result_container">
        <div class="basic" style="flex:2;margin-right:80px">
           <h1>在线请求</h1>
           <el-form  label-width="90px" :model="formLabelAlign">
                <el-form-item label="userName:" size='small'>
                    <el-input v-model="formLabelAlign.userName"></el-input>
                </el-form-item>
                <el-form-item label="password:" size='small'>
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
                <!-- <el-form-item label="client_secret:" size='small'>
                    <el-input v-model="formLabelAlign.client_secret"></el-input>
                </el-form-item> -->
                <el-form-item size="small">
                    <el-button type="primary" @click="get_token">提交请求</el-button>
                </el-form-item>
            </el-form>
         </div>
            <div class="basic" style="flex:3;">
                <div class="res-json-con">
                    <div class="re_result">返回JSON结果</div>
                    <!-- 返回json数据 -->
                    <div class="code" style="height:300px;overflow-y:scroll">{{$store.state.login.loginMsg}}</div>
                </div>
         </div>
   
      </div>
      
      
     
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      token:'1af9c764e25a4434b4acf7e5aefb12a4',
      title: "获取accessToken",
      message:"https://open.byai.com/oauth/token",
      requesList:[
      {title:'简要描述',active:false},
      {title:'请求URL',active:false},
      {title:'请求方式',active:false},
      {title:'请求参数',active:false},
      {title:'返回参数',active:false},
      {title:'请求示例',active:false},
      {title:'返回示例',active:false},
      // {title:'错误码集',active:false},
       {title:'在线请求',active:false}
      ],

       tableData:[
            {
          refsName: 'userName',
          required: 'true',
          types:'string',
          introstactor:'账号'
          
        }, {
          refsName: 'password:',
          required: 'true',
          types:'string',
          introstactor:'密码'
        }, 
        // {
        //   refsName: 'company_id',
        //   required: 'true',
        //   types:'Long',
        //   introstactor:'公司id'
        //   }
        ],
        tableData1:[
          {
          return_refsName: 'code',
          return_required: 'true',
          return_types:'string',
          return_introstactor:'10000为成功，10001为失败'
          },
           {
          return_refsName: 'content',
          return_required: 'true',
          return_types:'string',
          return_introstactor:'令牌token'
          }
        ],
        tableData2:[
            {
              erro:'41000000',
              erro1:'参数非法',
              resolve:"核对参数传的值是否存在，是否有权限操作"
            }
        ],
         //表单
     formLabelAlign: {
          userName: '', //https://open.byai.com/oauth/token
          password: '',
          // client_secret: ''
        }

    };
    
  },
  created() {
     this.token = window.sessionStorage.getItem('token')
    let table =  document.getElementsByClassName('el—table')
      console.log(this.$store.state.baseURL)
  },

  methods: {
      //复制 文本
       doCopy(e) {
             this.$copyText(this.message).then((e) => {
               // success
                 this.$message({
                showClose: false,
                center:true,
                message: '复制成功',
                type: 'success',
              });
               console.log(e);
               // 释放内存
            //   clipboard.destroy();
               
            }, (e) => {
                // fail
                console.log(e);
            });
         },
      //提交表单
      // ...mapActions(["get_token"]
      get_token(e){
         let userName = this.formLabelAlign.userName
         let password = this.formLabelAlign. password
         let user = {
           'user.userName':userName,
           'user.password':password
         }
          console.log({userName,password})
          //  this.token = window.sessionStorage.getItem('token')
          this.$store.dispatch('get_token',user)
      }
  }
};
</script>
<style lang='stylus' scoped>
.container_get_token
    margin-left 20px
.get-token-container 
    width 85%
    margin-top 30px
.basic
    margin-bottom 25px
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

.code
    white-space pre-wrap
    line-height 1.5
    background-color #f7f8fa
    font-size 14px
    padding 15px
    width 100%
    margin-bottom 30px
    overflow-x scroll
    color #666
.re_result 
    font-weight 700
    margin-bottom 30px
   
    
// .api-token-input 
//     display flex
//     width 350px
.result_container
    margin-top 50px
    display: flex

</style>