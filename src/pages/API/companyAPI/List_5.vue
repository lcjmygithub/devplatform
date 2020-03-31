<template>
  <div>
    <div class="api-details">
      <div class="title_h1">
        <h1 style="font-size: 20px;">{{title}}</h1>
        <div class="info">通过该接口可以获取到公司的短信模版，在调用创建任务接口时，可以选择是否发送挂机短信，并传入smsTemplateId。</div>
      </div>
      <div class="get-url">
        <div class="basic">
          <h1 style="font-size: 20px;">请求地址</h1>
          <div class="info">
             {{message}}
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
        <el-button type="primary" @click="test">在线调试</el-button>
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
                         <el-table-column
                        prop="exaple"
                        label="示例"
                         width='100'
                        >
                        </el-table-column>
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
                        </el-table-column>
                         <el-table-column
                        prop="return_exaple"
                        label="示例"
                        width='100'
                        >
                        </el-table-column>
                </el-table>
            </div>
          </div>
      </div>
      <div class="api-lang-example">
        <div class="basic">
          <h1>代码示例</h1>
            <el-tabs v-model="activeName" @tab-click="handleClick" >
              <el-tab-pane label="Java" name="first">
                   BYClient client = new DefaultBYClient(new Token("token")); <br>
                    ByaiOpenapiSmsTemplateListParams byaiOpenapiSmsTemplateListParams = new ByaiOpenapiSmsTemplateListParams();<br>
                    <br>
                    byaiOpenapiSmsTemplateListParams.setCompanyId(32108L);
                    <br><br>
                    ByaiOpenapiSmsTemplateList byaiOpenapiSmsTemplateList = new ByaiOpenapiSmsTemplateList();<br>
                    byaiOpenapiSmsTemplateList.setAPIParams(byaiOpenapiSmsTemplateListParams);<br>
                    ByaiOpenapiSmsTemplateListResult result = client.invoke(byaiOpenapiSmsTemplateList);
              </el-tab-pane>
              <el-tab-pane label="Python" name="second">
                token = auth.Token(token='token') <br> <br>

                  byClient = BYClient(token)    <br> <br>

                  params={}   <br> <br>

                  params['companyId']=32108 <br> <br>

                  files=[] <br> <br>

                  print byClient.invoke('byai.openapi.sms.template.list', '1.0.0', 'GET', params=params, files=files)
              </el-tab-pane>
              <el-tab-pane label="Php" name="third">
                  <?php    <br>
                  require_once __DIR__ . '/lib/BYClient.php'; <br><br>

                  $token = 'fill your token';//请填入授权后获取的access_token <br>
                  $client = new BYClient($token); <br><br>

                  $method = 'byai.openapi.sms.template.list'; //要调用的api名称 <br>
                  $api_version = '1.0.0'; //要调用的api版本号 <br><br>

                  $my_params = [ <br>
                      'companyId' => '32108', <br>
                  ]; <br>

                  $my_files = [ <br>
                  ]; <br>
 
                  echo '';  <br>
                  var_dump( <br>
                      $client->post($method, $api_version, $my_params, $my_files) <br>
                  ); <br>
                  echo '</pre>';
              </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="code-example">
        <div class="basic">
          <h1>正确示例</h1>
          <div class="code">
             {{code}}
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
export default {
  data() {
    return {
      //复制文本内容
      message:' https://open.byai.com/api/oauth/byai.openapi.sms.template/1.0.0/list',
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
        {title:'请求参数',active:false},
        {title:'返回参数',active:false},
        {title:'代码示例',active:false},
        {title:'正确示例',active:false}
      ],
      code:{
          "code": 200,
          "data": {
          "total": 24,
          "pages": 1,
          "list": [{
          "smsTemplateSignName": "测试短信模版1",
          "companyId": 1,
          "gmtModified": 1567416482000,
          "name": "测试短信",
          "smsTemplateId": 240,
          "failReason": "百应人工审核通过",
          "type": 1,
          "gmtCreate": 1567416459000,
          "smsTemplateSignId": 43,
          "content": "（百应手机验证码，请在5分钟内完成验证），请勿将验证码告知他人。",
          "status": 2
          },
          {
          "smsTemplateSignName": "百应",
          "companyId": 1,
          "gmtModified": 1567411499000,
          "name": "百应通知类",
          "smsTemplateId": 239,
          "failReason": "百应人工审核通过",
          "type": 1,
          "gmtCreate": 1567411490000,
          "smsTemplateSignId": 23,
          "content": "（百应手机验证码，请在5分钟内完成验证），请勿将验证码告知他人。",
          "status": 2
          }
          ],
          "pageNum": 1
          },
          "resultMsg": "successful"
          },
        title:'获取公司短信模板',
          tableData:[
            {
            refsName: 'companyId',
            required: '是',
            types:'Number',
            introstactor:'公司Id',
            exaple: 1
            
            }, {
          refsName: 'pageNumber',
          required: '否',
          types:'Number',
          introstactor:'页数',
           exaple:''
        }, {
          refsName: 'pageSize',
          required: '否',
          types:'Number',
          introstactor:'页码大小',
          exaple:''
          },
           {
          refsName: 'status',
          required: '否',
          types:'Number',
          introstactor:'审核状态：1-审核中 2-审核通过 3-审核未通过',
          exaple:2

          }
        ],
         tableData1:[
            {
            return_refsName: 'pageNum',
            return_required: '否',
            return_types:'Number',
            return_introstactor:'当前页',
            return_exaple: 1
            
            }, {
          return_refsName: 'total',
          return_required: '否',
          return_types:'Number',
          return_introstactor:'总数',
           return_exaple:32
        }, {
         return_refsName: 'pages',
          return_required: '否',
          return_types:'Number',
          return_introstactor:'总页数',
          return_exaple: 5
          },
           {
          return_refsName: 'list',
          return_required: '否',
          return_types:'SmsTemplateVO[]',
          return_introstactor:'数据',
          return_exaple:2,
          //子项
           children: [
             {
                return_refsName: 'smsTemplateId',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'短信模版Id',
                return_exaple:1,
             },
              {
                return_refsName: 'companyId',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'公司Id',
                return_exaple:1,
             },
              {
                return_refsName: 'name',
                return_required: '否',
                return_types:'String',
                return_introstactor:'模版名称',
                return_exaple:"测试",
             },
              {
                return_refsName: 'smsTemplateSignId',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'短信模版签名id',
                return_exaple:1,
             },
              {
                return_refsName: 'type',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'短信类型：1-通知类，2-营销类 , 3-验证码 4-金融类',
                return_exaple:1,
             },
              {
                return_refsName: 'content',
                return_required: '否',
                return_types:'String',
                return_introstactor:'短信模版内容',
                return_exaple:'你好',
             },
              {
                return_refsName: 'status',
                return_required: '否',
                return_types:'Number',
                return_introstactor:'审核状态:1-审核中，2-审核通过，3-审核不通过',
                return_exaple:2,
             },
              {
                return_refsName: 'failReason',
                return_required: '否',
                return_types:'String',
                return_introstactor:'审核备注',
                return_exaple: '审核通过',
             },
               {
                return_refsName: 'smsTemplateSignName',
                return_required: '否',
                return_types:'String',
                return_introstactor:'模板签名名称',
                return_exaple:'',
             },
              {
                return_refsName: 'gmtCreat',
                return_required: '否',
                return_types:'Date',
                return_introstactor:'创建时间',
                return_exaple:'',
             },
              {
                return_refsName: 'gmtModified',
                return_required: '否',
                return_types:'Date',
                return_introstactor:'修改时间',
                return_exaple: '',
             }
           ]
          }
        ],
       
    };
  },
  created() {},
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
            alert('submit!');
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
    //tab切换
    handleClick(){},
    //滚动事件
    scrollEvent(){
      console.log("触发了")
    }
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
</style>