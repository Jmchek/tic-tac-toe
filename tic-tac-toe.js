

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
        toggleForm == "X" ? fillBoardX(index) : fillBoardO(index);
        toggleForm == "X" ? toggleForm = "O" : toggleForm = "X";
        toggleSwitch.checked = !toggleSwitch.checked;
        gameController.infoTextUpdater(toggleForm);
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
      if (toggleForm == "X") {
        toggleForm = "O";
      } else {
        toggleForm = "X";
      }

      console.log(findFirstChoice());

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

  let playerOneName, playerTwoName;

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
          console.log("win");
          winnerDetermined = true;
          break;
        case (winnerArrX.includes(4) && winnerArrX.includes(5) && winnerArrX.includes(6)) || 
        (winnerArrO.includes(4) && winnerArrO.includes(5) && winnerArrO.includes(6)):
          console.log("win");
          winnerDetermined = true;
          break;
        case (winnerArrX.includes(7) && winnerArrX.includes(8) && winnerArrX.includes(9)) || 
        (winnerArrO.includes(7) && winnerArrO.includes(8) && winnerArrO.includes(9)):
          console.log("win");
          winnerDetermined = true;
          break;
        //vertical
        case (winnerArrX.includes(1) && winnerArrX.includes(4) && winnerArrX.includes(7)) || 
        (winnerArrO.includes(1) && winnerArrO.includes(4) && winnerArrO.includes(7)):
          console.log("win");
          winnerDetermined = true;
          break;
        case (winnerArrX.includes(2) && winnerArrX.includes(5) && winnerArrX.includes(8)) || 
        (winnerArrO.includes(2) && winnerArrO.includes(5) && winnerArrO.includes(8)):
          console.log("win");
          winnerDetermined = true;
          break;
        case (winnerArrX.includes(3) && winnerArrX.includes(6) && winnerArrX.includes(9)) || 
        (winnerArrO.includes(3) && winnerArrO.includes(6) && winnerArrO.includes(9)):
          console.log("win");
          winnerDetermined = true;
          break;
        //across
        case (winnerArrX.includes(1) && winnerArrX.includes(5) && winnerArrX.includes(9)) || 
        (winnerArrO.includes(1) && winnerArrO.includes(5) && winnerArrO.includes(9)):
          console.log("win");
          winnerDetermined = true;
          break;
        case (winnerArrX.includes(3) && winnerArrX.includes(5) && winnerArrX.includes(7)) || 
        (winnerArrO.includes(3) && winnerArrO.includes(5) && winnerArrO.includes(7)):
          console.log("win");
          winnerDetermined = true;
          break;
        default:
          {if(!winnerDetermined && this.matchCountX > 3 && this.matchCountO > 3) {console.log("Cat's scratch!")};}
      }
    }
  };

  //game start/restart
  startBtnGrbbr.addEventListener('click', () => {
    toggleContainer.classList.remove('toggleHide');
    hiddenToggleContainer.classList.add('toggleHide');
    playerNames.setAttribute('style', 'visibility: visible;');
  });

  restartBtnGrbbr.addEventListener('click', () => {
    toggleContainer.classList.add('toggleHide');
    hiddenToggleContainer.classList.remove('toggleHide');
    playerNames.setAttribute('style', 'visibility: hidden;');
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

  //lock in button is pressed
  playerLockIn.addEventListener('click', () => {
    firstChosenTile = gameboard.findFirstChoice();
    if (firstChosenTile == "X") {
      secChosenTile = "O";
    } else {
      secChosenTile = "X";
    }

    playerCreation(playerOneNameGrbbr.value, playerTwoNameGrbbr.value);

    infoTextUpdater(whichTile);
  });

  //infoText changer function

  //working here
  function infoTextUpdater(whichTile) {
    let count = 0;
    let firstPlayer = playerOneNameGrbbr.value;
    let secPlayer = playerTwoNameGrbbr.value;

    if(count == 0) {
      infoText.innerText = "Turn: " + firstPlayer.toUpperCase() + " (" + firstChosenTile + ")";
      count++;
    }

    (whichTile == firstChosenTile) ? infoText.innerText = "Turn: " + firstPlayer.toUpperCase() + " (" + firstChosenTile + ")" : infoText.innerText = "Turn: " + secPlayer.toUpperCase() + " (" + secChosenTile + ")";
    
  }
  
  
    return {gameChecker, matchCountX, matchCountO, playerCreation, infoTextUpdater};
  })();