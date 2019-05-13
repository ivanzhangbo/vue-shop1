import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const state={
    testMsg:"oragnge text",
    childText:"child orange text"
}

const mutations={
    changeTextmsg(state,str){
        state.testMsg=str;
    },
    changeChildText(state,str){
        state.childText=str
    }
}

const store=new Vuex.Store({
    state:state,
    mutations:mutations
})

export default store;