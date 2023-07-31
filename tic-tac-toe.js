

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
      }
    }
    
    

    function fillBoardO(someTileIndex) {
      if (!tileGrabber[someTileIndex].innerText && toggleForm == "O") {
        tileGrabber[someTileIndex].innerText = "O";
        gboardArrO.pop();
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
      fillBoardX,
      fillBoardO,
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
  this.gboardArrO = gameboard.gboardArrO;
  this.gboardArrX = gameboard.gboardArrX;

  //when the player's arrays lengths become 2, check the game state
  function gameChecker() {

  };
  
    return console.log(gboardArrO.length);
  })();