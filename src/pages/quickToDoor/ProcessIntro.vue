<template>
  <div>
    <myTile>
      <div slot="title">{{title}}</div>
    </myTile>
    <div class="process-intro">
      <h1>开放平台简介</h1>
      <div>
        开放平台旨在为有开发能力的用户提供AI能力，使AI能力与用户自身业务紧密的结合在一起。
        <br />平台提供了丰富的接口，供用户创建智能外呼任务、传入号码、回传通话数据。
      </div>
      <h1>应用场景</h1>
      <div>
        用户在自有CRM中筛选出一批客户，需要进行外呼。
        <br />与跃讯系统对接后，可调用接口创建外呼任务，传入号码，启动任务执行外呼。
        <br />AI每拨打完成一通电话，就将通话数据回传到用户CRM，通话数据主要包括：客户意向、客户标签、通话时长、通话时间、通话录音、通话文本等，CRM获取到上述数据，将必要的信息回填到CRM中，完成客户跟进，并做数据分析。
      </div>
      <h1>API调用流程图</h1>
      <div>
        <img src="../../../static/img/process_intro/process-info.85600b63.png" alt width="70%" id="process-img" />
      </div>
      <h1>API调用参考</h1>
      <div>
        通过API创建一个智能外呼任务共需求6步:
        <strong class="head-size">1. 超管账号在【系统设置】- 获取accessToken</strong>
        <img src="../../../static/img/process_intro/img1.e5344a1c.png" alt />
        <strong class="head-size">2. 调用“获取公司的机器人话术列表”接口，获取机器人话术</strong>
        <img src="../../../static/img/process_intro/img2.65e124d8_1.png" alt />
        <strong class="head-size">3. 调用“获取公司的外呼线路列表”接口，获取外呼线路</strong>
        <img src="../../../static/img/process_intro/img3.f8de2b9c_2.png" alt />
        <strong class="head-size">4. 调用“创建任务”接口，传入机器人话术、外呼线路等字段，创建任务</strong>
        <img src="../../../static/img/process_intro/img4.0b5849e0_3.png" alt />
        <strong class="head-size">5. 调用“向任务中导入客户”接口，导入客户号码</strong>
        <img src="../../../static/img/process_intro/img5.ad7747c4.png" alt />
        <strong class="head-size">6. 调用“启动任务接口”，开始外呼</strong>
        <img src="../../../static/img/process_intro/img6.f0d9b438_5.png" alt />
        <strong class="head-size">7. 如需接收回调数据，配置回调地址</strong>
        <img src="../../../static/img/process_intro/img7.f54956ac.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "流程介绍"
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang='stylus' scoped>
.head-size 
    display block
    font-size 15px
    margin 20px 0
h1 
    font-size 16px
    margin 15px 0
</style>