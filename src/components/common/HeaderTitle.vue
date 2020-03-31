<template>
    <div class="title">
        <slot name="title"></slot>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style lang='stylus' scoped>
.title
    font-size 20px!important
    margin-bottom 20px
    font-size 20px
    border-bottom 1px solid rgba(0,0,0,.1)
    padding-bottom 25px
    width: 90%
</style>