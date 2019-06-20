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

  return game1.players[i].turn = true;
};

function Bot() {
  this.name = 'bot1',  //randomName(),
  this.score = 0,
  this.tempScore = 0,
  this.turn = false,
  this.hard = false,
  this.moves = [1, 2, 3];
};

function botAI() {
  bot = currentPlayer();
  if (bot1.turn === true) {
    for (i = 0; i < bot1.moves.length; i++) {
      if (i === 0 && bot1.turn === true) {
        rollDice(bot);
        console.log("step 1")
      } else if (i === 1 && bot1.turn === true) {
        rollDice(bot);
                console.log("step 2")
      } else if (i === 2 && bot1.turn === true) {
        hold(bot);
                console.log("step 3")
      };
    };
  };
};

function rollDice(i) {
  var result = parseInt(Math.random() * 6) + 1;
  console.log('Dice roll: ' + result);
  if (result === 1) {
    game1.players[i].tempScore = 0;
    game1.players[i].turn = false;
    switchPlayer(i);
    botAI();
  } else {
    game1.players[i].tempScore += result;
  }
};

function hold(i) {
  addScore(i);
  game1.players[i].turn = false;
  switchPlayer(i);
}

function addScore(i) {
  game1.players[i].score += game1.players[i].tempScore;
  game1.players[i].tempScore = 0;
}

var game1 = new Game();

//temporary code, change to functions
var player1 = new Player('Josh');
var player2 = new Player('Gavin');
var bot1 = new Bot();
player1.turn = true;
game1.addPlayer(player1);
game1.addPlayer(player2);
game1.addPlayer(bot1);

$(document).ready(function () {
  $('button#roll').click(function () {
    var i = currentPlayer();
    rollDice(i);
    console.log(player1);
    console.log(player2);
    console.log(bot1);
  });

  $('button#hold').click(function () {
    var i = currentPlayer();
    hold(i);
    botAI();
    console.log(player1);
    console.log(player2);
    console.log(bot1);
  });
});
