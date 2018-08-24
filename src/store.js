import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebaserc.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setName(state, payload) {
      state.username = payload
    }
  },
  actions: {
    createUser() {
      console.log(this.state.username)
      // console.log('gggggg');
      
      db.ref('users/').push({
        username: this.state.username,
      }, function (error) {
        if (error) {
          console.log('error')
        } else {
          console.log('Data saved successfully')
        }
      });
    }

  }
})