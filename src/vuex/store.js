import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import pathify from './pathify'
import { make } from 'vuex-pathify'


Vue.use(Vuex);

const state = {
    Score: 0
}

const getters = {
    ...make.getters(state)
}

const mutations = {
    ...make.mutations(state)
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    plugins: [createPersistedState]
})

export default store;