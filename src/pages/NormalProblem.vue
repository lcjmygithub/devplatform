<template>
  <div class="api-normal-problem">
    <h1 style="font-size: 20px;">常见问题</h1>
    <div class="basic">
      <h1 style="font-size: 20px;">Q1：定时任务和手动任务的异同?</h1>
      <div
        class="info"
      >A：定时任务在设定好启动时间和结束时间时会在到达指定时间时自动启动，手动任务则需要导入客户之后手动启动任务；并且会占用AI并发量。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q2：不同任务可用相同主叫号码吗？</h1>
      <div class="info">A：可以。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q3：若剩余可用的AI坐席为0，那么是不可以创建任务？</h1>
      <div class="info">A：可以创建,但是任务会排队。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q4：不同的任务是根据AI坐席情况，同时进行执行任务还是根据任务先后进行执行任务？</h1>
      <div class="info">A：多个坐席会同时执行一个任务，其他任务会进行排队执行。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q5：暂停任务后，会释放主叫号码和AI坐席吗？</h1>
      <div class="info">A：会。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q6：不同的任务是根据AI坐席情况，同时进行执行任务还是根据任务先后进行执行任务？</h1>
      <div class="info">A：多个坐席会同时执行一个任务，其他任务会进行排队执行。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q7：暂停任务后，会释放主叫号码和AI坐席吗？</h1>
      <div class="info">A：会。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q8：不同的任务可以用相同的主叫号码吗？</h1>
      <div class="info">A：可以。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q9：二次拨打是什么意思，拨打后数据是怎么回调？</h1>
      <div class="info">A：设置自动重拨时（如占线重拨），会出现二次拨打，即任务完成后，对占线的号码重新进行拨打； 只会回调最后1次拨打的通话情况。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q10：向任务中导入客户后，是按导入顺序拨打的吗？</h1>
      <div class="info">A：是打乱的，不是按导入顺序拨打的。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q11：向任务中导入客户进行拨打，如果有部分客户拨打失败，任务结果是成功还是失败？</h1>
      <div class="info">A：是成功的，拨打失败是通话结果，和任务执行状态，成功或失败是无关的。</div>
    </div>
    
    <div class="basic">
      <h1 style="font-size: 20px;">Q12：通过API创建任务并导入客户后，显示排队，是因为任务参数选了无主叫么？</h1>
      <div class="info">A：和主叫类型无关，显示排队一般是在等待资源，比如任务使用了5个AI，而实际可用AI只有1个，则会显示排队。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q13：停止任务和暂停任务接口有什么区别？</h1>
      <div class="info">A：暂停任务不释放资源，可以重新启动；停止任务可以释放资源，但不能重新启动。</div>
    </div>
    <div class="basic">
      <h1 style="font-size: 20px;">Q14：定时任务是否可以手动启动？</h1>
      <div class="info">A：是可以的，通过API（启动任务接口)。</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang='stylus' scoped>
.api-normal-problem 
    box-sizing border-box
    h1 
        font-size 16px
        margin-bottom 20px
h1 
    margin 0.67em 0px
.api-normal-problem .basic h1 
    font-size: 16px!important

h1, h2, h3, h4, h5, h6
    color: rgba(0,0,0,.85)
    font-weight: 500

.api-normal-problem .basic 
    border-bottom: 4px solid #e7e7e7
.api-normal-problem .basic .info 
    line-height: 2
    margin-bottom: 15px
    padding-right: 150px
    font-size: 15px


</style>