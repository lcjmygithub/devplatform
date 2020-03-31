<template>
    <el-button type="info" plain circle class="el-icon-arrow-up" @click="scrollTop"></el-button>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    scrollTop(){
        //滚动条置顶
         window.scrollTo({ 
            top: 0, 
            behavior: "smooth" 
        });
        this.$emit('scroll')
    },
  }
}
</script>
<style lang='stylus' scoped>

</style>