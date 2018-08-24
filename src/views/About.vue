<template>
  <div class="about">

    <Navbar></Navbar>
    <Modal></Modal>
    <List></List>
    
  

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Modal from '@/components/Modal.vue'
import List from '@/components/listRoom.vue'
import {mapActions,mapState} from 'vuex'
export default {
  components:{
    Navbar,Modal, List
  },
  methods:{
    ...mapActions([
      "getAllRoom"
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

