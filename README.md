# tic-tac-toe
<!-- 1. user clicks on either x or o to determine game
2. user clicks on a section tile which sends event
3. event is sent out with event info detailing which block it is
4. block is then filled in with choice from module -->

<!-- Check when the game is over
1. list each win condition and check the board state when triggered
2. e.g. when tile 1, 4, and 7 all have either "X" or "O" trigger a win
3. for ties, when there is only 1 or 2 spots left for a tile but it's impossible to get three


gameController
determines winner

player one and player two
conditions for winning
1. three matching x's or o's, in either row, column, or cross so we check each row to match and each column then the crosses
2. check for game state (win/loss or tie) when there are two spots left on the board (when the first player has placed the first four x's)
3. get the names from playerMaker and shoutout the winner -->


<!-- when the user clicks on the tile, if it's x flip to o DONE
flip the toggle whenever this happens -->

once the locked in button is pressed
change the text in infoText
every time a player chooses a tile, change the name to the other player in infoText