function Game() {
  this.players = [];
};

Game.prototype.addPlayer = function (player) {
  this.players.push(player);
};

function Player(name) {
  this.name = name;
  this.score = 0;
  this.tempScore = 0;
  this.turn = false;
};

function currentPlayer() {
  for (i = 0; i < game1.players.length; i++) {
    if (game1.players[i].turn === true) {
      console.log(i);
      return i;
    }
  }
};

function switchPlayer(i) {

  if (i >= game1.players.length - 1) {
    i = 0;
  } else {
    ++i;
  };

  console.log(i);
  return game1.players[i].turn = true;
};

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

function addScore(i) {
  game1.players[i].score += game1.players[i].tempScore;
  game1.players[i].tempScore = 0;
}

var game1 = new Game();

//temporary code, change to functions
var player1 = new Player('Josh');
player1.turn = true;
var player2 = new Player('Gavin');

game1.addPlayer(player1);
game1.addPlayer(player2);

$(document).ready(function () {
  $('button#roll').click(function () {
    var i = currentPlayer();
    rollDice(i);
    console.log(player1);
    console.log(player2);;
  });

  $('button#hold').click(function () {
    var i = currentPlayer();
    addScore(i);
    game1.players[i].turn = false;
    switchPlayer(i);
    console.log(player1);
    console.log(player2);;
  });
});
