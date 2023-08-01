

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
      console.log(toggleForm);
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

  let tileArr = [];
  
  function gameChecker() {

    //game checker
    tileGrabber.forEach(x => {
      //when the match count for either x or o gets to 3 check the tiles
      //is match count 3?
      // then check each tile for where the x or o is
      // if the tiles match across any of the 8 lines, do something
      if(tileArr.length < 9) {
        tileArr.push(x);
      }

      if(this.matchCountX == 3 || this.matchCountO == 3) {
        
        //loop through our tile array
        tileArr.forEach((y, i) => {
          if(y.innerText == "X") {
            console.log(i);
          }
        });

      }
    });
  };
  
    return {gameChecker, matchCountX, matchCountO};
  })();