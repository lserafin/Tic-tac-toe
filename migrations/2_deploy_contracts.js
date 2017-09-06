var TicTacToeGame = artifacts.require("./TicTacToeGame.sol");

module.exports = function(deployer) {
  deployer.deploy(TicTacToeGame);
};