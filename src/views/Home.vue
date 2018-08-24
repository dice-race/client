<template>
  <div class="home">
<h1>This is a testing page</h1>
    <input type="test" v-model="inputName">
    <button @click="createUser">add</button>
  </div>
 
</template>

<script>
// @ is an alias to /src

import {mapActions,mapState} from 'vuex'
export default {
    methods: {
    ...mapActions([
      "createUser"
    ])
  },
  computed: {
    inputName: {
      get() {
        return this.$store.state.name
      },
      set(value) {
        this.$store.commit('setName',value)
      }
    }
  }
}
</script>
