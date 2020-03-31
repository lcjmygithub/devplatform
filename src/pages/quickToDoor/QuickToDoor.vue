<template>
  <div class="container_quick_to_door">
    <myTile>
      <div slot="title">{{title}}</div>
    </myTile>
    <div>
      <h1 class="head-size">快速入门</h1>
      <div>
        建议开发者在接入API之前，先在开发平台CRM页面上熟悉一些基本的任务创建和操作的流程，然后获取accessToken，进行API调用。
        <br />
        <br />具体详见：
        <a href="#/process_intro">流程介绍</a>
      </div>
      <h1 class="head-size">获取accessToken</h1>
      <div>
        跃讯开发平台的接口调用认证方式为Token方式，所以每次接口调用都需要传入accessToken。
        <br />
        <br />
        <strong color="#000000">在线获取accessToken如下图：</strong>
        <br />
        <img src="../../../static/img/quick_to_door/img1.5bf4272e.png" alt />
        <br />具体详见：
        <a href="#/get_token">获取accessToken</a>
      </div>
      <h1 class="head-size">调用业务接口</h1>
      <div>
        获取accessToken后，就可以进行业务接口调用完成相关的业务，调用接口方式：
        <br />1. 使用HTTP进行接口调用。
        <!-- <br />2. 通过百应提供的SDK进行调用，推荐使用SDK进行接口调用，每个接口下方都会有SDK示例代码。 -->
        <br />
        <!-- <br /> -->
        <!-- <strong color="#000000">SDK代码示例：</strong>
        <br />
        <img src="../../../static/img/quick_to_door/img2.73821aad.png" alt /> -->
        <br />示例接口：
        <a href="#/list_1">获得公司的外呼线路列表</a>
      </div>
      <!-- <h1 class="head-size">在线调试</h1>
      <div>
        为了方便开发者进行接口调试，百应提供了在线接口调试，每个接口文档右边都有一个在线调试，开发者可以输入自己的参数进行接口调试，需要注意的是，
        <br />每个接口都是线上接口，所以每次在线调试都是真实的线上数据。回调是百应把数据推送到三方的接口，所以回调模块没有接口地址和在线调试。
        <br />
        <br />
        <strong color="#000000">在线调试如下图所示：</strong>
        <br />
        <br />
        <img src="../../../static/img/quick_to_door/img3.230d9897.png" alt />
        <br />
        <img src="../../../static/img/quick_to_door/img4.ca1745fa.png" alt />
        <br />示例接口：
        <a href="#/list_2">获得公司的外呼线路列表</a>
      </div> -->
      <h1 class="head-size">接收回调</h1>
      <div>
        回调是指跃讯在任务状态变更或者通话完成后，把相关的数据发送到三方的地址，所以三方需要配置相关的地址接收回调数据。
        <br />
        <br />
        <strong color="#000000">配置回调地址如下图：</strong>
        <br />
        <br />
        <img src="../../../static/img/quick_to_door/img5.b1425c3b.png" alt />
        <br />示例接口：
        <a href="#/callback_desc">回调说明</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "接入指南"
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang='stylus' scoped>
.container_quick_to_door
    text-align left
    margin-left 20px
    margin-bottom 50px
    width 100%
.head-size 
    font-size 16px
    margin 20px 0

</style>