var TicTacToeGame = artifacts.require("./TicTacToeGame.sol");

contract('TicTacToeGame', function(accounts) {
  it("should have a empty board after the deployment", function() {
    return TicTacToeGame.deployed().then(function(instance) {
      return instance.checkPosition.call(0,0);
    }).then(function(result) {
      assert.equal(result.toNumber(), 0, "0 wasn't in this position");
    });
  });
});
