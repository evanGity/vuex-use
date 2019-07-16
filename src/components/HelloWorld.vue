<template>
  <div class="hello">
    <h2>vuex 基础用法</h2>
    <div class="item-wrap">
      <div class='item'>
        <h2>state的四种引用方法：</h2>
        <p><strong>counter: {{$store.state.counter}}</strong></p>
        <p><strong>counter: {{counter}}</strong></p>
        <p><strong>counter: {{storeState1}}</strong></p>
        <p><strong>counter: {{storeState2}}</strong></p>
      </div>
      <div class='item'>
        <h2>getter的两种引用方法：</h2>
        <p><strong>counter: {{counterGetter}}</strong></p>
        <p><strong>counter: {{counterGetter1}}</strong></p>
      </div>
      <div class='item'>
        <h2>mutation的三种引用方法：</h2>
        <button @click='changeCounter()'>点击,counter每次加10</button>
        <button @click='changeCounter1(20)'>点击,counter每次加20</button>
        <button @click='changeCounter2(20)'>点击,counter每次加20</button>
        <button @click='changeCounter3({amount: 20})'>点击,counter每次加20</button>
        <p><strong>counter: {{$store.state.counter}}</strong></p>
        <p><strong>counter: {{counter}}</strong></p>
        <p><strong>counter: {{storeState1}}</strong></p>
        <p><strong>counter: {{storeState2}}</strong></p>
      </div>
      <div class='item'>
        <h2>action的三种引用方法：</h2>
        <button @click='changeCounterSync()'>点击,1秒后counter每次加10</button>
        <button @click='changeCounterSync1(20)'>点击,1秒后counter每次加20</button>
        <button @click='changeCounterSync2(20)'>点击,1秒后counter每次加20</button>
        <p><strong>counter: {{$store.state.counter}}</strong></p>
        <p><strong>counter: {{counter}}</strong></p>
        <p><strong>counter: {{storeState1}}</strong></p>
        <p><strong>counter: {{storeState2}}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    // state 的用法 (相比于state， 更推荐getter来获取state的值)
    ...mapState(['counter']),
    storeState1 () {
      return this.$store.state.counter
    },
    ...mapState({
      storeState2: 'counter'
    }),
    // getter 的用法
    ...mapGetters(['counterGetter']),
    ...mapGetters({
      counterGetter1: 'counterGetter'
    })
  },
  methods: {
    // mutations 函数payload（负载）为基本数据类型,有如下三种写法
    ...mapMutations(['changeCounter']),
    ...mapMutations({
      changeCounter1: 'changeCounter'
    }),
    changeCounter2 (payload) {
      this.$store.commit('changeCounter', payload)
    },
    // 当且仅当mutations 函数payload（负载）为引用数据类型时可以用如下 ‘对象风格的提交方式’
    changeCounter3 (payload) {
      this.$store.commit({
        type: 'changeCounterObj',
        amount: payload.amount
      })
    },
    // actions 使用方法
    ...mapActions(['changeCounterSync']),
    ...mapActions({
      changeCounterSync1: 'changeCounterSync'
    }),
    changeCounterSync2 (payload) {
      this.$store.dispatch('changeCounterSync', payload)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.item-wrap{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}
.item {
  flex: 1;
  border: 1px solid #eeeeee;
  margin: 15px;
  transition: all .2s ease-in-out;
}
.item:hover{
  box-shadow: 0 0 20px #eeeeee;
}
</style>
