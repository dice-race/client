<template>
    
        <div id="example">
        <div class="row board">
            <div id="player1" v-bind:style="{ top: topPosition1 ,left: leftPosition1 }"></div>
            

        </div>

        <div>
            <button v-on:click="changePosition1">Change</button>
           
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      position1x: "25px",
      position1y: "75px",
      movement1: 0
    };
  },
  computed: {
    leftPosition1: function() {
      return this.position1x;
    },
    topPosition1: function() {
      return this.position1y;
    }
  },
  methods: {
    changePosition1: function() {
      let move1 = 1 + Math.floor(Math.random() * 6);
      this.movement1 += move1;

      if (this.movement1 == 1) {
        this.position1x = "0px";
        this.position1y = "500px";
      }
      if (this.movement1 == 2) {
        this.position1x = "100px";
        this.position1y = "500px";
      }
      if (this.movement1 == 3) {
        this.position1x = "200px";
        this.position1y = "500px";
      }
      if (this.movement1 == 4) {
        this.position1x = "300px";
        this.position1y = "500px";
      }
      if (this.movement1 == 5) {
        this.position1x = "400px";
        this.position1y = "500px";
      }
    }
  }
}
</script>

<style>
    #player1 {
            background-color: green;
            height: 100px;
            width: 50px;
            position:absolute

        }

        #player2 {
            background-color: blue;
            height: 100px;
            width: 50px;
            position:absolute

        }

        .board{
            background-image: url('dice-board.png')
        }
</style>
