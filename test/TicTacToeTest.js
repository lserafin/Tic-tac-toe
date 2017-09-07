var TicTacToeGame = artifacts.require("./TicTacToeGame.sol");

contract('TicTacToeGame', function(accounts) {
  it("should have a empty board after the deployment", function() {
    return TicTacToeGame.deployed().then(function(instance) {
      return instance.checkPosition.call(0,0);
    }).then(function(result) {
      assert.equal(result.toNumber(), 0, "0 wasn't in this position");
    });
  });

  it("should have no opponent after the deployment", function() {
    return TicTacToeGame.deployed().then(function(instance) {
      return instance.getOpponent.call();
    }).then(function(result) {
      assert.equal(result, 0, "0 wasn't in this position");
    });
  });

  it("should have one opponent after the game start", function() {
    var gameintstance;
    return TicTacToeGame.deployed().then(function(instance) {
      gameintstance = instance;
      return gameintstance.startGame.call();
    }).then(function(start) {
      return gameintstance.getOpponent.call();
    }).then(function(result) {
      assert.equal(result, 0, "0 wasn't in this position");
    });

  });

});
