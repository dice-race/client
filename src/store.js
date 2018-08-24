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
      let getDB = db.ref('/')
      let numberRoom = 0
      getDB.on('value',(snapshot)=> {
        console.log(Object.keys(snapshot.val()).length);
        numberRoom = Object.keys(snapshot.val()).length
      })
      db.ref('room'+(numberRoom+1)).set({
        roomId : numberRoom+1,
        nameRoom : this.state.nameRoom,
      })
    },
    getAllRoom(context){
      db.ref('/').on('value',(snapshot=>{
        var data = snapshot.val()
        this.state.allRoom = data
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
      var playerNumber = 0
      db.ref(`/${id}`).on('value',snapshot=>{
        playerNumber =  Object.keys(snapshot.val()).length - 2 
      })
      if(playerNumber < 2){
        db.ref(`/${id}/player` + (playerNumber+1)).set({
          name :'tes dulu'
        },function(err){
          if(err){
            console.log('failed');
          }
        })
      }
    }
  }
})