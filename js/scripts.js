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

function nextPlayer() {

}


function rollDice(i) {
  var result = parseInt(Math.random() * 6) + 1;
  console.log(result);
  if (result === 1) {
    playerArr1.players[i].tempScore = 0;
    $('h2').toggle();
  } else {
    playerArr1.players[i].tempScore += result;
  }
};

function Player(name, score, tempScore) {
  this.name = name;
  this.score = score;
  this.tempScore = tempScore;
};



//front-end

var playerArr1 = new PlayerArr();

var player1 = new Player('Josh', 0, 0);
var player2 = new Player('Gavin', 0, 0);

playerArr1.addPlayer(player1);
playerArr1.addPlayer(player2);

$(document).ready(function () {
  $('button#roll').click(function () {
    rollDice();
  });

  $('button#hold').click(function () {

  });
});
