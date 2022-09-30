<template>
  <div class="child-a">
    <p>ChildA:{{countA}}</p>
    <button @click="handleClick(10)">ChildA-Add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ChildA',
  data () {
    return {
      //我们不再将数据放到组件里
      //count: 0
    }
  },
  created() {
    console.log('vuex的使用https://juejin.cn/post/7087100496762109983')
  },
  computed: {
    ...mapState({
      countA: 'count'
    })
  },
  methods: {
    handleClick(num){
      this.countAdd(num);
    },
    ...mapMutations(['countAdd'])
  }
}
</script>
<style scoped>
</style>
