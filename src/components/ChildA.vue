<template>
  <div class="child-a">
    <p>ChildA:{{count}}</p>
    <button>ChildA-Add</button>
  </div>
</template>

<script>
export default {
  name: 'ChildA',
  data () {
    return {
      //我们不再将数据放到组件里
      //count: 0
    }
  }
}
</script>
<style scoped>
</style>
