<template>    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Room Name" v-model="inputRoom">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="createRoom">Create Room</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    methods: {
         ...mapActions([
            "createRoom"
        ])
    },
    computed: {
        inputRoom:{
            get() {
                return this.$store.state.nameRoom
            },
            set(value) {
            this.$store.commit('setRoom',value)
            }
        }
    }
}
</script>

<style>

</style>
