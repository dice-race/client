<template>
    
        <div id="example">
        <div class="row bg-dark board">
            <div id="player1" v-bind:style="{ top: topPosition1 ,left: leftPosition1 }"></div>
            <div id="snake" v-anime="{
  targets: '#snake .el',
  translateX: 10,
  easing: 'easeInOutQuart',
  loop: true 
}"></div>
            <div id="ladder"></div>
            <div id="stop"></div>

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
      position1x: "50px",
      position1y: "500px",
      movement1: 0,
      lastPosition : 0
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
    //  let move1 = 1 + Math.floor(Math.random() * 6);
      this.lastPosition = this.movement1
      this.movement1 += 3;

      
      if (this.movement1 <= 5) {
        let x = this.movement1 *  50+ (50*(this.movement1-1));
        let lastx = this.lastPosition *  50+ (50*(this.movement1-1));
        this.position1x = `${x}px`;
        this.position1y = "500px";
      } 
      else if (this.movement1 <= 10) {
        
        let x = this.movement1 * 50 + 150 - ((this.movement1 - 6) * 150);
        this.position1x = `${x}px`;
        this.position1y = "400px"; 
        
          if(this.movement1 === 8){        
        this.movement1 = 23
      }
      }
       else if (this.movement1 <= 15) {
        let x = this.movement1 * 50 - 500 + (50 * (this.movement1 - 11));
        this.position1x = `${x}px`;
        this.position1y = "300px";


        if(this.movement1 === 12){        
        this.movement1 = 2
      }
      }
       else if (this.movement1 <= 20) {
        let x = this.movement1 * 50 - (350 + ((this.movement1 - 16) * 150));
        this.position1x = `${x}px`;
        this.position1y = "200px";
      }
       else if (this.movement1 < 25) {
        let x = this.movement1 * 50 - (1000-(50*(this.movement1-21)));
      
        this.position1x = `${x}px`;
        this.position1y = "100px";

      }

      else if(this.movement1 >= 25){
         this.position1x = `450px`;
        this.position1y = "100px";        
        
        
      }
      
     
      
    }
  }
};
</script>

<style>
#player1 {
  background-image: url('kim-jong-il.png');
  height: 60px;
  width: 60px;
  position: absolute;
  margin-top: 20px;
}

#player2 {
  background-color: blue;
  height: 100px;
  width: 50px;
  position: absolute;
}

.board{
  background-image: url('dice-board.png');
 height: 500px;
  width: 500px;
  margin-left: 42px;
  margin-top: 14.5px;
 }

 #snake{
   background-image: url('snake.png');
    height: 60px;
    width: 60px;
   margin-left : 125px;
   margin-top: 200px;
   position: absolute;
   
 }

 #ladder{
     background-image: url('ladder.png');
    height: 300px;
    width: 100px;
   margin-left : 200px;
   margin-top: 100px;
   position: absolute;
 }

 #stop{
    background-image: url('delete.png');
    height: 60px;
    width: 60px;
   margin-left : 325px;
   margin-top: 10px;
   position: absolute;
 }
</style>
