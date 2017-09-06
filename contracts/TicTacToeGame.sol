pragma solidity ^0.4.4;

contract TicTacToeGame {
	
	uint8[3][3] public board;

	function placeOnBoard(uint xpos,uint ypos) public returns (uint) {
		require(xpos >= 0 && xpos <= 3);
		require(ypos >= 0 && ypos <= 3);

		//TODO
		return 0;
	}

	function getBoard() public returns (uint8[3][3]) {
  		return board;
	}

	function checkPosition(uint8 x,uint8 y) public returns (uint8) {
  		return board[x][y];
	}
}
