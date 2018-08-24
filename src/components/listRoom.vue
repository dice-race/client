<template>
    <div class="container-fluid" style="margin-top:20px">
        <div class="row">
            <div class="col-3" v-for="(room,index) in allRoom" :key="index">
            <div class="card" style="width: 18rem;border:1px solid">
                  <img src="http://bluelakechamber.com/wp-content/uploads/2015/12/cube-dicejpg.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{room.roomName}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Player</h6>
                <h6 class="card-subtitle mb-2 text-muted">0/2</h6>
                <a href="#" class="card-link" @click="joinRoom(index)">Join Room</a>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
     methods:{
    ...mapActions([
      "getAllRoom","joinRoom"
    ])
  },
  computed:{
    ...mapState([
      "allRoom"
    ]),
  },
  mounted(){
    this.getAllRoom()
  }
}
</script>

<style>

</style>
