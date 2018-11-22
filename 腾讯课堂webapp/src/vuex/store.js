import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    navList = [],
}

const mutations = {
    setnavList(state,status){
        state.navList = status;
    }
}

const getters = {
    
}

const actions = {
    actionNavList({commit},status){
        commit("setnavList",status);
    }
}

export default new Vuex.Store({
    components: {
        state,
        mutations,
        getters,
        actions,
    }
})