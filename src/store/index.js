import { createStore } from 'vuex'

//导出store
export default createStore({
    state: {
        count: 0
    },
    actions: {
        countAdd(context,num){
            context.commit('countAdd',num)
        }
    },
    mutations: {
        //传入一个state对象，接收传过来的参数num
        countAdd(state,num){
            state.count+=num
        }
    },
    modules: {},
})
