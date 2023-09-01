

//gameboard is a module
const gameboard = (() => {
    const toggleSwitch = document.querySelector('.toggle');
    let gboardArrX = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
    let gboardArrO = ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'];
    let toggleForm = "X";


    //tiles
    const tileGrabber = document.querySelectorAll('.tiles');

    tileGrabber.forEach((tile, index) => {

      tile.addEventListener('click', () => {
          if(!gameController.winnerDetermined && !gameController.scratch && gameStarted) {
            toggleForm == "X" ? fillBoardX(index) : fillBoardO(index);
            toggleForm == "X" ? toggleForm = "O" : toggleForm = "X";
            gameController.infoTextUpdater(toggleForm);
            toggleSwitch.checked = !toggleSwitch.checked;
          }
      });
    });
    
    
    function fillBoardX(someTileIndex) {
      if (!tileGrabber[someTileIndex].innerText && toggleForm == "X") {
        tileGrabber[someTileIndex].innerText = "X";
        gboardArrX.pop();
        gameController.matchCountX++;
        gameController.gameChecker();
      }
    }
    
    

    function fillBoardO(someTileIndex) {
      if (!tileGrabber[someTileIndex].innerText && toggleForm == "O") {
        tileGrabber[someTileIndex].innerText = "O";
        gboardArrO.pop();
        gameController.matchCountO++;
        gameController.gameChecker();
      }
    }

    function findFirstChoice() {
      return toggleForm;
    }

    //toggleSwitch
    toggleSwitch.addEventListener('click', () => {
      if(!gameController.winnerDetermined) {
        if (toggleForm == "X") {
          toggleForm = "O";
        } else {
          toggleForm = "X";
        }
      }

    });

    return {
      tileGrabber,
      gboardArrO,
      gboardArrX,
      toggleSwitch,
      findFirstChoice
    };
  })();


//playerMaker is a factory
const playerMaker = (name) => {
    const declareWinner = () => console.log(name + ' wins the game!');
    return { name, declareWinner };
};

// const jeff = playerMaker('jeff', 27);

// console.log(jeff.name); // 'jeff'


//gameController is a module
const gameController = (() => {
  this.tileGrabber = gameboard.tileGrabber;
  const startBtnGrbbr = document.querySelector('#start');
  const restartBtnGrbbr = document.querySelector('#restart');
  const hiddenToggleContainer = document.querySelector('.toggleHideHolder');
  const toggleContainer = document.querySelector('.toggleContainer');
  const playerNames = document.querySelector('#playerNames');
  const playerOneNameGrbbr = document.querySelector('#playerOne');
  const playerTwoNameGrbbr = document.querySelector('#playerTwo');
  const playerLockIn = document.querySelector('#playerNameLockIn');
  const namesUnderTitleGrbbr = document.querySelector('.namesUnderTitle');
  const firstNameGrbbr = document.querySelector('.namesUnderTitle :first-child');
  const secNameGrbbr = document.querySelector('.namesUnderTitle :nth-child(3)');
  const infoText = document.querySelector('#infoText');
  
  let matchCountX = 0;
  let matchCountO = 0;
  let winnerDetermined = false;
  let firstChosenTile;
  let secChosenTile;
  let whichTile;
  let winner;
  let scratch = false;
  let gameStarted = false;

  let playerOneName, playerTwoName;
  let firstPlayer, secPlayer;

  let tileArr = [];
  let winnerArrX = [];
  let winnerArrO = [];
  
  function gameChecker() {
    tileArr = [];

    //game checker
    tileGrabber.forEach(x => {
      if(tileArr.length < 9) {
        tileArr.push(x);
      }
    });

    if(this.matchCountX >= 3 || this.matchCountO >= 3 || !winnerDetermined) {
      winnerArrX = [];
      winnerArrO = [];

      //loop through our tile array
      tileArr.forEach((y, i) => {

        if(y.innerText == "X") {
          winnerArrX.push(++i);
        } else if (y.innerText == "O") {
          winnerArrO.push(++i);
        }
      });
    }

    //win finder
    if(winnerArrX.length >= 3 || winnerArrO.length >= 3 || !winnerDetermined) {
      switch(true) {
        //horizontal
        case (winnerArrX.includes(1) && winnerArrX.includes(2) && winnerArrX.includes(3)) || 
        (winnerArrO.includes(1) && winnerArrO.includes(2) && winnerArrO.includes(3)): 
          this.winnerDetermined = true;
          break;
        case (winnerArrX.includes(4) && winnerArrX.includes(5) && winnerArrX.includes(6)) || 
        (winnerArrO.includes(4) && winnerArrO.includes(5) && winnerArrO.includes(6)):
          this.winnerDetermined = true;
          break;
        case (winnerArrX.includes(7) && winnerArrX.includes(8) && winnerArrX.includes(9)) || 
        (winnerArrO.includes(7) && winnerArrO.includes(8) && winnerArrO.includes(9)):
          this.winnerDetermined = true;
          break;
        //vertical
        case (winnerArrX.includes(1) && winnerArrX.includes(4) && winnerArrX.includes(7)) || 
        (winnerArrO.includes(1) && winnerArrO.includes(4) && winnerArrO.includes(7)):
          this.winnerDetermined = true;
          break;
        case (winnerArrX.includes(2) && winnerArrX.includes(5) && winnerArrX.includes(8)) || 
        (winnerArrO.includes(2) && winnerArrO.includes(5) && winnerArrO.includes(8)):
          this.winnerDetermined = true;
          break;
        case (winnerArrX.includes(3) && winnerArrX.includes(6) && winnerArrX.includes(9)) || 
        (winnerArrO.includes(3) && winnerArrO.includes(6) && winnerArrO.includes(9)):
          this.winnerDetermined = true;
          break;
        //across
        case (winnerArrX.includes(1) && winnerArrX.includes(5) && winnerArrX.includes(9)) || 
        (winnerArrO.includes(1) && winnerArrO.includes(5) && winnerArrO.includes(9)):
          this.winnerDetermined = true;
          break;
        case (winnerArrX.includes(3) && winnerArrX.includes(5) && winnerArrX.includes(7)) || 
        (winnerArrO.includes(3) && winnerArrO.includes(5) && winnerArrO.includes(7)):
          this.winnerDetermined = true;
          break;
        default:
          {if(!this.winnerDetermined && this.matchCountX > 3 && this.matchCountO > 3) {
            //working here
            this.scratch = true;
          };}
      }
    }
  };

  //game start/restart
  startBtnGrbbr.addEventListener('click', () => {
    toggleContainer.classList.remove('toggleHide');
    hiddenToggleContainer.classList.add('toggleHide');
    playerNames.setAttribute('style', 'visibility: visible;');
    playerOneNameGrbbr.value = "";
    playerTwoNameGrbbr.value = "";
  });

  restartBtnGrbbr.addEventListener('click', () => {
    infoText.innerText = "X or O for the first player? Decide!";
    playerNames.setAttribute('style', 'visibility: hidden;');
    namesUnderTitleGrbbr.classList.add('toggleHide');
    this.playerOneName = null;
    this.playerTwoName = null;

    tileGrabber.forEach((tile, index) => {
      if(tile.innerText) {
        tile.innerText = "";
      }
    });
  });


  //player creator
  function playerCreation(firstName, secName) {
    this.playerOneName = playerMaker(firstName);
    this.playerTwoName = playerMaker(secName);

    namesUnderTitleGrbbr.classList.remove('toggleHide');
    playerNames.setAttribute('style', 'visibility: hidden;');
    firstNameGrbbr.innerText = firstName + "   " + "(" + firstChosenTile + ")";
    secNameGrbbr.innerText = secName + "   " + "(" + secChosenTile + ")";
  }

  //lock in button
  playerLockIn.addEventListener('click', () => {
    this.gameStarted = true;

    firstChosenTile = gameboard.findFirstChoice();
    if (firstChosenTile == "X") {
      secChosenTile = "O";
    } else {
      secChosenTile = "X";
    }

    playerCreation(playerOneNameGrbbr.value, playerTwoNameGrbbr.value);

    infoTextUpdater(firstChosenTile);
  });

  //infoText changer function

  function infoTextUpdater(whichTile) {
    let count = 0;
    firstPlayer = playerOneNameGrbbr.value;
    secPlayer = playerTwoNameGrbbr.value;

    if(count == 0) {
      infoText.innerText = "Turn: " + firstPlayer.toUpperCase() + " (" + firstChosenTile + ")";
      count++;
    }

    (whichTile == firstChosenTile && !this.winnerDetermined) ? infoText.innerText = "Turn: " + firstPlayer.toUpperCase() + " (" + firstChosenTile + ")" : infoText.innerText = "Turn: " + secPlayer.toUpperCase() + " (" + secChosenTile + ")";

    if(this.winnerDetermined && !this.scratch) {
      if (winnerArrX.length > winnerArrO.length) {
            winnerInfoTextUpdater("X");
          } else {
            winnerInfoTextUpdater("O");
          }
    }

    if(this.scratch) {
      winnerInfoTextUpdater("cat's scratch!");
    }
    
  }

  function winnerInfoTextUpdater(winner) {
    (winner == firstChosenTile) ? infoText.innerText = firstPlayer.toUpperCase() + " is the winner!" : infoText.innerText = secPlayer.toUpperCase() + " is the winner!";
    

    if (winner == "cat's scratch!") {
            infoText.innerText = "Cat's scratch!";
    }
  }
  
  
    return {gameChecker, matchCountX, matchCountO, playerCreation, infoTextUpdater, winnerInfoTextUpdater, winnerDetermined, scratch, playerOneName, playerTwoName, gameStarted};
  })();