import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebaserc.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    nameRoom: '',
    allRoom: {}
  },
  mutations: {
    setName(state,payload){
      state.name = payload
    },
    setRoom(state,payload){
      state.nameRoom = payload
    },
    setAllRoom(state,payload){
      state.allRoom = payload
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
    },
    createRoom(context){
      // console.log(this.state.name);
      db.ref('room').push({
        roomName : this.state.nameRoom
      })
      .then(room=>{
        console.log(room.path);
      })
      .catch(err=>{
        console.log(err);
      })
      
    },
    getAllRoom(context){
      db.ref('room').on('value',(snapshot=>{
        var data = snapshot.val()
        this.state.allRoom = data
        // context.commit('setAllRoom',data)
      }))
    },
    joinRoom(context,id){
      console.log(id);
      db.ref(`room/${id}`).push({
        name :'tes dulu'
      },function(err){
        if(err){
          console.log('failed');
        }
      })
    }
  }
})