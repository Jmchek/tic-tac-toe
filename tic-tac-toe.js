

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

    //toggleSwitch
    toggleSwitch.addEventListener('click', () => {
      if (toggleForm == "X") {
        toggleForm = "O";
      } else {
        toggleForm = "X";
      }
    });

    return {
      tileGrabber,
      gboardArrO,
      gboardArrX
    };
  })();


//playerMaker is a factory
const playerMaker = (name, age) => {
    const sayHello = () => console.log(name + ' says: "playerMaker works"');
    return { name, age, sayHello };
};

// const jeff = playerMaker('jeff', 27);

// console.log(jeff.name); // 'jeff'

// jeff.sayHello();


//gameController is a module
const gameController = (() => {
  this.tileGrabber = gameboard.tileGrabber;
  // let matchingRow = false;
  let matchCountX = 0;
  let matchCountO = 0;
  let winnerDetermined = false;

  let tileArr = [];
  let winnerArrX = [];
  let winnerArrO = [];
  
  function gameChecker() {
    tileArr = [];

    //game checker
    tileGrabber.forEach(x => {
      //when the match count for either x or o gets to 3 check the tiles
      //is match count 3?
      // then check each tile for where the x or o is
      // if the tiles match across any of the 8 lines, do something
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
        case (winnerArrX.includes(1) && winnerArrX.includes(2) && winnerArrX.includes(3)) || (winnerArrO.includes(1) && winnerArrO.includes(2) && winnerArrO.includes(3)): 
          console.log("win");
          winnerDetermined = true;
          break;
        case '4,5,6':
          console.log("win");
          break;
        case '7,8,9':
          console.log("win");
          break;
        //vertical
        case '1,4,7':
          console.log("win");
          break;
        case '2,5,8':
          console.log("win");
          break;
        case '3,6,9':
          console.log("win");
          break;
        //across
        case '1,5,9':
          console.log("win");
          break;
        case '3,5,7':
          console.log("win");
          break;
        default:
          {console.log(winnerArrX.toString());}
      }

      
    }
    
  };

  
  
    return {gameChecker, matchCountX, matchCountO};
  })();