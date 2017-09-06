pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TicTacToeGame.sol";

contract TestMetacoin {

  function testInitialBalanceUsingDeployedContract() {
    TicTacToeGame game = TicTacToeGame(DeployedAddresses.TicTacToeGame());
    uint8 result = game.checkPosition(0,0);
    uint8 i = 0;
    Assert.equal(result, i, "Empty board initially");
  }
  /*
  function testInitialBalanceWithNewMetaCoin() {
    TicTacToeGame game = new TicTacToeGame();

    Assert.equal(game.getBoard()[0][0], 0, "Empty board initially");
  }*/

}
