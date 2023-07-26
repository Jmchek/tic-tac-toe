//make fillBoardX work with new gameboard tileGrabber

//gameboard is a module
const gameboard = (() => {
    let gboardArrX = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
    // let gboardArrO = ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'];
    // let playArea = document.querySelector('.gboard');
    // let playAreaX = document.querySelector('#xDump');
    // let playAreaO = document.querySelector('#oDump');
    // let xFill = "";
    // let oFill = "";
    let gameInSession = false;
    let toggleForm = "X";

    //tiles
    let tileGrabber = document.querySelectorAll('.tiles');

    tileGrabber.forEach((tile, index) => {
      tile.addEventListener('click', () => {
        //if toggle form for game is 'x'
        //fill the tile matching id with 'x'
        // console.log(`${index}: ${tile}`);
        toggleForm == "X" ? fillBoardX(index) : fillBoardO();
      });
    });
    

    function fillBoardX(someTileIndex) {
      tileGrabber[someTileIndex].innerText = "hello there";
    }

    function fillBoardO() {
      // let i = 0;

      // while (i < gboardArrO.length) {
      //   oFill += gboardArrO[i];
      //   i++;
      // }

      // playAreaO.innerText = oFill;
    }

    return fillBoardX, fillBoardO();
  })();


//playerMaker is a factory
const playerMaker = (name, age) => {
    const sayHello = () => console.log(name + ' says: "playerMaker works"');
    return { name, age, sayHello };
};

const jeff = playerMaker('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello();


//gameController is a module
const gameController = (() => {

    return console.log("gameController works");
  })();