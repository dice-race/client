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

      if (this.movement1 <= 5) {
        let x = this.movement1 * 50;
        this.position1x = `${x}px`;
        this.position1y = "500px";
      } 
      else if (this.movement1 <= 10) {
        let x = this.movement1 * 50 - (50 + (this.movement1 - 6) * 100);
        this.position1x = `${x}px`;
        this.position1y = "400px";
      }
       else if (this.movement1 <= 15) {
        let x = this.movement1 * 50 - 500;
        this.position1x = `${x}px`;
        this.position1y = "300px";
      }
       else if (this.movement1 <= 20) {
        let x = this.movement1 * 50 - (550 + (this.movement1 - 16) * 100);
        this.position1x = `${x}px`;
        this.position1y = "200px";
      }
       else if (this.movement1 < 25) {
        let x = this.movement1 * 50 - 1000;
      
        this.position1x = `${x}px`;
        this.position1y = "100px";
      }

      else if(this.movement1 >= 25){
         this.position1x = `250px`;
        this.position1y = "100px";        
        
        alert('finish')
      }
      
     
      
    }
  }
};
</script>

<style>
#player1 {
  background-color: green;
  height: 100px;
  width: 50px;
  position: absolute;
}

#player2 {
  background-color: blue;
  height: 100px;
  width: 50px;
  position: absolute;
}

/* .board{
            background-image: url('dice-board.png')
        } */
</style>
