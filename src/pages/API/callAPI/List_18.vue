<template>
  <div>
    <div class="api-details">
      <div class="title_h1">
        <h1 style="font-size: 20px;">{{title}}</h1>
        <div class="info">通过接口可以获取查询通话记录详情</div>
      </div>
      <div class="get-url">
        <div class="basic">
          <h1 style="font-size: 20px;">请求地址</h1>
          <div class="info">
             {{this.$store.state.baseURL+'open/getVoiceRobotChatList?token='+token+'&saledataid=329423'}}
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
        <!-- 在线调式 -->
        <!-- <el-button type="primary" @click="test">在线调试</el-button> -->
      </div>
       <div class="get-method">
        <div class="basic">
          <h1 style="font-size: 20px;">请求方法</h1>
          <div class="info">GET</div>
        </div>
      </div>
      <div class="get-refs">
          <div class="basic">
            <h1 style="font-size: 20px;">请求参数</h1>
            <div style="">
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%;">
                        <el-table-column
                        prop="refsName"
                        label="参数名"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="required"
                        label="必选"
                      
                        >
                        </el-table-column>
                        <el-table-column
                        prop="types"
                        label="类型"
                      
                        >
                        </el-table-column>
                        <el-table-column
                        prop="introstactor"
                        label="说明"
                     
                        >
                        </el-table-column>
                         <!-- <el-table-column
                        prop="exaple"
                        label="示例"
                         width='100'
                        >
                        </el-table-column> -->
                </el-table>
            </div>
          </div>
      </div>
       <div class="return-refs">
          <div class="basic">
            <h1 style="font-size: 20px;">返回参数</h1>
            <div style="">
                <el-table
                        :data="tableData1"
                        stripe
                         row-key="return_refsName"
                        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                        style="width: 100%;">
                        <el-table-column
                        prop="return_refsName"
                        label="参数名"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="return_required"
                        label="必选"
                      
                        >
                        </el-table-column>
                        <el-table-column
                        prop="return_types"
                        label="类型"
                       
                        >
                        </el-table-column>
                        <el-table-column
                        prop="return_introstactor"
                        label="说明"
                        
                        >
                        <!-- </el-table-column>
                         <el-table-column
                        prop="return_exaple"
                        label="示例"
                        width='100'
                        > -->
                        </el-table-column>
                </el-table>
            </div>
          </div>
      </div>

      <div class="code-example">
        <div class="basic">
          <h1>正确示例</h1>
         <div class="code">
            <json-viewer :value="jsonData" :expand-depth='5' :copyable="copy"></json-viewer>
          </div> 
        </div>
        
      </div>
        <myscroll :requesList='requesList'></myscroll>  
      
         <!-- 滚动到顶部 -->
        <div class="detail-to-top" role="presentation">
          <!-- <img src="../../../static/img/companyAPI/totop.3ce9dd46.svg" alt /> -->
            <scrollTop @scroll="scrollEvent" />
        </div>
      
    </div>
     <!-- 抽屉 -->
     <el-drawer
       title="接口在线调试"
      :visible.sync="drawer"
      :before-close="handleClose">
       <div style="border-top:1px solid #ccc; margin: 0 10px">
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="token" prop="token">
                <el-input v-model="ruleForm.token"></el-input>
              </el-form-item>
              <el-form-item label="companyid" prop="companyid">
                <el-input v-model="ruleForm.companyid"></el-input>
              </el-form-item>
              <el-form-item label="page" >
                <el-input v-model="ruleForm.page"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交测试</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
           </el-form>
       </div>
      
    </el-drawer>
  </div>
</template>

<script>
const dataJson = require('../../../../json/callAPI/callAPI_1.json')

export default {
  data() {
    return {
      token:'',
         title:'查询通话记录详情',
         copy: true,
        jsonData: dataJson,
  
      //抽屉
      drawer: false,
      //抽屉表单
      ruleForm:{
        token:'' ,
        companyid:'',
        page:''
      },
      //表单规则
       rules: {
          // name: [
          //   { required: true, message: '请输入活动名称', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          //  ] ,
          token: [
            { required: true, message: '请输入参数', trigger: 'blur' }
          ],
          companyid:[
             { required: true, message: '请输入参数', trigger: 'blur' }
          ]
       },
      activeName:'first',
       requesList:[
        {title:'请求地址',active:false},
        {title:'请求方法',active:false},
        {title:'请求参数',active:false},
        {title:'返回参数',active:false},
        {title:'正确示例',active:false}
      ],
       
          tableData:[
            {
            refsName: 'token',
            required: '是',
            types:'String',
            introstactor:'token令牌',
            },
            {
            refsName: 'saledataid',
            required: '是',
            types:'Number',
            introstactor:'数据id',
            
            } 
          ],
          
         tableData1:[
            {
            return_refsName: 'code',
            return_required: '否',
            return_types:'Number',
            return_introstactor:'状态码',
            },
      
           {
          return_refsName: 'content',
          return_required: '否',
          return_types:'String',
          return_introstactor:'响应信息',
          children:[
              {
                return_refsName: 'cid',
                return_required: '否',
                return_types:'String',
                return_introstactor:'通话id',
              },
               {
                return_refsName: 'createtime',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'创建时间',
              },
               {
                return_refsName: 'ifornotrobot',
                return_required: '否',
                return_types:'number',
                return_introstactor:'是否机器人',
              },
               {
                return_refsName: 'num',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'',
              },
               {
                return_refsName: 'sessionstorageid',
                return_required: '否',
                return_types:'number',
                return_introstactor:'主键',
              },
               {
                return_refsName: 'showcontent',
                return_required: '否',
                return_types:'String',
                return_introstactor:'匹配到问题库内容',
              },
                {
                return_refsName: 'storagetext',
                return_required: '否',
                return_types:'String',
                return_introstactor:'语音文本',
              },
               {
                return_refsName: 'storagevoice',
                return_required: '否',
                return_types:'String',
                return_introstactor:'语音地址',
              },
                {
                return_refsName: 'type',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'类型',
              }
          ]
          }
        ],
       
    };
  },
  created() {
    this.token =  this.token = window.sessionStorage.getItem('token')?window.sessionStorage.getItem('token'):''
  },
  methods: {
    //关闭抽屉
    handleClose(){
      this.drawer = false
    },
    //在线调式
      test(){
        this.drawer = true
      },
      //提交抽屉表单
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

       //复制 文本
       doCopy(e) {
             this.$copyText(
               this.$store.state.baseURL+'open/getVoiceRobotChatList?token='+this.token+'&saledataid=329423'
             ).then((e) => {
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
    //tab切换
    handleClick(){},
    //滚动事件
    scrollEvent(){
      console.log("触发了")
      
    },
    //测试接口
   
  }
};
</script>
<style lang='stylus' scoped>
.title_h1
  margin-bottom 30px
  margin-left 20px
  h1
    font-size 16px !important
    margin-bottom 10px
    .info
      margin-left 3px
      word-wrap break-word
.api-details 
    flex 1 1
    padding-right 200px
    // overflow hidden
    // min-width 960px
.api-details .basic 
    text-align left
    margin-left 20px
    margin-bottom 30px
.api-details .basic h1 
    font-size 16px!important
    margin-bottom 10px
.api-details .basic .info 
    margin-left 3px
    word-wrap break-word
//在线调式
.get-url
    position: relative
    .el-button
        position absolute
        right 0
        top 0
.api-detail-table 
    text-align left
    margin-left 20px
    margin-bottom 30px
.el-tab-pane,.code
   background-color: #f7f8fa
   overflow-x: scroll
   padding 15px
.detail-to-top 
    background-size: cover
    width: 40px
    height: 40px
    position: fixed
    right: 50px
    bottom: 80px
    cursor: pointer
//表单
.demo-ruleForm
  margin-top 25px

.code 
    white-space: pre-wrap
    line-height: 1.5
    background-color: #f7f8fa
    font-size: 14px
    padding: 15px
    width: 100%
    margin-bottom: 30px
    overflow-x: scroll
    color: #666

</style>