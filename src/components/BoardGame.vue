<template>
    
        <div id="example">
          <div class="col-md-8">
            
            <img v-show="win2" src="../assets/throphy-donald.png" v-anime="{translateX: 250,duration: 1000 ,loop:true}">
            <img v-show="win1" src="../assets/throphy-kim.jpg">

          </div>
        <div class="row bg-dark board d-flex">
            <div id="player1" v-bind:style="{ top: topPosition1 ,left: leftPosition1 }" v-anime="{
  targets: '#player1',
  translateX: 10,
  rotate: '1turn',
  easing: 'easeInOutQuart',
  loop: true 
}">
              <img src="../assets/kim.png" width="70px" height="70px" >
                            <h1 v-show="win1">Im the winner</h1>
            </div>
            <div id="player2" v-bind:style="{ top: topPosition2 ,left: leftPosition2 }" v-anime="{
  targets: '#player2',
  translateX: 10,
  rotate: '1turn',
  easing: 'easeInOutQuart',
  loop: true 
}">
              <img src="../assets/donald.png" width="70px" height="70px">
              <h1 v-show="win2">Im the winner</h1>
            </div>
            <div id="snake" v-anime="{
  targets: '#snake .el',
  translateX: 10,
  easing: 'easeInOutQuart',
  loop: true 
}">
<img src="../assets/snake.png" width="70px" height="70px" >
</div>
            <div id="ladder">
              <img src="../assets/ladder.png" width="150px" height="300px" >
            </div>

        </div>
        
<br><br>

<div class="mt-5">
  <div class="row">

        <div class="col-md-2">          
           <button v-on:click="changePosition1" class="">Player 1</button>
          <div id="dice1" v-html="dice1" style="font-size:120px" class="text-danger"></div>
         
        </div>
      
        
          <div class="col-md-2">          
            <button v-on:click="changePosition2" class="col-md-4">Player 2</button>
            <div id="dice2" v-html="dice2" style="font-size:120px" class="text-success"></div>
              
              
          </div>                            
  </div>
</div>        
    </div>
</template>

<script>
export default {
  data() {
    return {
      position1x: "50px",
      position1y: "500px",
      movement1: 1,
      position2x: "90px",
      position2y: "500px",
      movement2: 1,
      dice1 : '',
      dice2 : '',
      win1 : false,
      win2 : false
    };
  },
  computed: {
    leftPosition1: function() {
      return this.position1x;
    },
    topPosition1: function() {
      return this.position1y;
    },
    leftPosition2: function() {
      return this.position2x;
    },
    topPosition2: function() {
      return this.position2y;
    }
  },
  methods: { 
    changePosition1: function() {
      let move1 = 1 + Math.floor(Math.random() * 6);      
      let output = ""      
      output += "&#x268" + (move1-1) + "; ";
      this.dice1 = output
      this.movement1 += move1;

      if (this.movement1 <= 5) {
        let x = this.movement1 * 50 + 50 * (this.movement1 - 1);
        this.position1x = `${x}px`;
        this.position1y = "500px";
      } else if (this.movement1 <= 10) {
        if (this.movement1 === 8) {
          this.movement1 = 23;
          let x = this.movement1 * 50 - (1000 - 50 * (this.movement1 - 21));
          this.position1x = `${x}px`;
          this.position1y = "100px";
        } else {
          let x = this.movement1 * 50 + 150 - (this.movement1 - 6) * 150;
          this.position1x = `${x}px`;
          this.position1y = "400px";
        }                
      } else if (this.movement1 <= 15) {
        if (this.movement1 === 12) {
          this.movement1 = 2;
          let x = this.movement1 * 50 + 50 * (this.movement1 - 1);
          this.position1x = `${x}px`;
          this.position1y = "500px";
          
        } else {
          let x = this.movement1 * 50 - 500 + 50 * (this.movement1 - 11);
          this.position1x = `${x}px`;
          this.position1y = "300px";          
        }
        
      } else if (this.movement1 <= 20) {
        let x = this.movement1 * 50 - (350 + (this.movement1 - 16) * 150);
        this.position1x = `${x}px`;
        this.position1y = "200px";
      } else if (this.movement1 < 25) {
        let x = this.movement1 * 50 - (1000 - 50 * (this.movement1 - 21));

        this.position1x = `${x}px`;
        this.position1y = "100px";
      } else if (this.movement1 >= 25) {
        this.position1x = `450px`;
        this.position1y = "100px";
        this.win1 = true
      }
    },
    changePosition2: function() {
      let move2 = 1 + Math.floor(Math.random() * 6);
      let output = ""      
      output += "&#x268" + (move2-1) + "; ";
      this.dice2 = output
      this.movement2 += move2;

      if (this.movement2 <= 5) {
        let x = this.movement2 * 50 + 50 * (this.movement2 - 1) + 40;
        this.position2x = `${x}px`;
        this.position2y = "500px";
      } else if (this.movement2 <= 10) {
        if (this.movement2 === 8) {
          this.movement2 = 23;
          let x = this.movement2 * 50 - (1000 - 50 * (this.movement2 - 21));
          this.position2x = `${x}px`;
          this.position2y = "100px";
        } else {
          let x = this.movement2 * 50 + 150 - (this.movement2 - 6) * 150;
          this.position2x = `${x}px`;
          this.position2y = "400px";
        }
      } else if (this.movement2 <= 15) {
        if (this.movement2 === 12) {
          this.movement2 = 2;
          let x = this.movement2 * 50 + 50 * (this.movement2 - 1) + 40;
          this.position2x = `${x}px`;
          this.position2y = "500px";
        } else {
          let x = this.movement2 * 50 - 500 + 50 * (this.movement2 - 11);
          this.position2x = `${x}px`;
          this.position2y = "300px";
        }
      } else if (this.movement2 <= 20) {
        let x = this.movement2 * 50 - (350 + (this.movement2 - 16) * 150);
        this.position2x = `${x}px`;
        this.position2y = "200px";
      } else if (this.movement2 < 25) {
        let x = this.movement2 * 50 - (1000 - 50 * (this.movement2 - 21));

        this.position2x = `${x}px`;
        this.position2y = "100px";
      } else if (this.movement2 >= 25) {
        this.position2x = `450px`;
        this.position2y = "100px";
        this.win2 = true
      }
    }
  }
};
</script>

<style>
#player1 {
  height: 60px;
  width: 60px;
  position: absolute;
  margin-top: 20px;
}

#player2 {
  height: 60px;
  width: 60px;
  margin-top: 20px;
  position: absolute;
}

.board {
  background-image: url("dice-board.png");
  height: 500px;
  width: 500px;
  margin-left: 42px;
  margin-top: 14.5px;
}

#snake {  
  height: 60px;
  width: 60px;
  margin-left: 125px;
  margin-top: 200px;
  position: absolute;
}

#ladder {
  
  height: 300px;
  width: 100px;
  margin-left: 180px;
  margin-top: 100px;
  position: absolute;
}

#stop {
  
  height: 60px;
  width: 60px;
  margin-left: 325px;
  margin-top: 10px;
  position: absolute;
}
</style>
