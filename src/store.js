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
    },
    setName(state,payload){
      state.username = payload
    }
  },
  actions: {
    createUser() {
      db.ref('users/').push({
        username: this.state.username,
        movement: 0
      }, function (error) {
        if (error) {
          console.log('error')
        } else {
          console.log('Data saved successfully')
        }
      });
    },
    createRoom(context){
      let getDB = db.ref('/room')
      let numberRoom = 0
      getDB.on('value',(snapshot)=> {
        console.log(Object.keys(snapshot.val()).length);
        numberRoom = Object.keys(snapshot.val()).length
      })
      db.ref('/room/room'+(numberRoom+1)).set({
        roomId : numberRoom+1,
        nameRoom : this.state.nameRoom,
        totalPlayer: 0
      })
    },
    getAllRoom(context){
      db.ref('/room').on('value',(snapshot=>{
        var data = snapshot.val()
        this.state.allRoom = data
      }))
    },
    joinRoom(context,id){
      var playerNumber = 0
      db.ref(`/room/${id}`).on('value',snapshot=>{
        playerNumber =  Object.keys(snapshot.val()).length - 3 
      })
      if(playerNumber < 2){
        db.ref(`/room/${id}/player` + (playerNumber+1)).set({
          name : this.state.username
        },function(err){
          if(err){
            console.log('failed');
          }else{
            db.ref(`room/${id}/totalPlayer`).set({
              totalPlayer : playerNumber
            })
          }
        })
      }else{
        alert('room full')
      }
    }
  }
})