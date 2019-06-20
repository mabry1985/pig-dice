function PlayerArr() {
  this.players = [],
  this.currentId = 0;
};

PlayerArr.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players.push(player);
};

PlayerArr.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

function addScore(i) {
  playerArr1.players[i].score += playerArr1.players[i].tempScore;
  playerArr1.players[i].tempScore = 0;
}

function rollDice(i) {
  var result = parseInt(Math.random() * 6) + 1;
  console.log(result);
  if (result === 1) {
    playerArr1.players[i].tempScore = 0;
  } else {
    playerArr1.players[i].tempScore += result;
  }
};

function Player(name) {
  this.name = name;
  this.score = 0;
  this.tempScore = 0;
  this.turn = false;
};

//front-end

var playerArr1 = new PlayerArr();

var player1 = new Player('Josh');
player1.turn = true;
var player2 = new Player('Gavin');
turn = player1;

function currentPlayer() {
  for (i = 0; i < playerArr1.players.length; i++) {
    if (playerArr1.players[i].turn === true) {
      return playerArr1.players[i];
      console.log();
    }
  }
}

function switchPlayer(i) {
  if (i >= playerArr1.players.length - 1) {
    i = 0;
  };

  ++i;
  turn = playerArr1.players[i];
  console.log(turn);
  console.log(i);
};

playerArr1.addPlayer(player1);
playerArr1.addPlayer(player2);

$(document).ready(function () {
  $('button#roll').click(function () {
    rollDice(1);
    console.log(player2);
  });

  $('button#hold').click(function () {
    addScore(1);
    console.log(player2);
  });
});
