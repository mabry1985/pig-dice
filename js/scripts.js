function Game() {
  this.players = [],
  this.currentId = 0;
};

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players.push(player);
};

Game.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

function addScore(i) {
  game1.players[i].score += game1.players[i].tempScore;
  game1.players[i].tempScore = 0;
}

function rollDice(i) {
  var result = parseInt(Math.random() * 6) + 1;
  console.log(result);
  if (result === 1) {
    game1.players[i].tempScore = 0;
    game1.players[i].turn = false;
    switchPlayer(i);
  } else {
    game1.players[i].tempScore += result;
  }
};

function Player(name) {
  this.name = name;
  this.score = 0;
  this.tempScore = 0;
  this.turn = false;
};

//front-end

var game1 = new Game();

var player1 = new Player('Josh');
player1.turn = true;
var player2 = new Player('Gavin');
turn = player1;

function currentPlayer() {
  for (i = 0; i < game1.players.length; i++) {
    if (game1.players[i].turn === true) {
      console.log(i);
      return i;
    }
  }
}

function switchPlayer(i) {
  if (i >= game1.players.length - 1) {
    i = 0;
  }

  i++;
  console.log(i);
  return game1.players[i].turn = true;

};

game1.addPlayer(player1);
game1.addPlayer(player2);

$(document).ready(function () {
  $('button#roll').click(function () {
    var i = currentPlayer();
    rollDice(i);
    console.log(player1);
    console.log(player2);
  });

  $('button#hold').click(function () {
    var i = currentPlayer();
    addScore(i);
    game1.players[i].turn = false;
    switchPlayer(i);
    console.log(player1);
    console.log(player2);
  });
});
