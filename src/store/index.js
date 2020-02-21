import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/packages/vue-router'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: () => ({
    navHomeState: true,
    navAboutState: false,
    navContactsState: false,
    navEducationState: false,
    navKnowledgeState: false,
    navCarreerState: false

  }),
  getters: {

    navHomeState: state => state.navHomeState,
    navAboutState: state => state.navAboutState,
    navContactsState: state => state.navContactsState,
    navEducationState: state => state.navEducationState,
    navCarreerState: state => state.navCarreerState,
    navKnowledgeState: state => state.navKnowledgeState
  },
  mutations: {
    setNavHomeState (state, payload) {
      state.navHomeState = payload
    },
    setNavAboutState (state, payload) {
      state.navAboutState = payload
    },
    setNavContactsState (state, payload) {
      state.navContactsState = payload
    },
    setNavCarreerState (state, payload) {
      state.navCarreerState = payload
    },
    setNavKnowledgeState (state, payload) {
      state.navKnowledgeState = payload
    },
    setNavEducationState (state, payload) {
      state.navEducationState = payload
    }
  },
  actions: {
    checkRoute ({ commit }) {
      if (router.currentRoute.name === 'Home') {
        console.log(router.currentRoute.path)
        commit('setNavHomeState', true)
        commit('setNavAboutState', false)
        commit('setNavContactsState', false)
      } else if (router.currentRoute.name === 'About') {
        console.log(router.currentRoute.path)
        commit('setNavHomeState', false)
        commit('setNavAboutState', true)
        commit('setNavContactsState', false)
      } else if (router.currentRoute.name === 'Contacts'
      ) {
        console.log(router.currentRoute.path)
        commit('setNavHomeState', false)
        commit('setNavAboutState', false)
        commit('setNavContactsState', true)
      }
      console.log(router)
      console.log(this)
    }
  }

})
