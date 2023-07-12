//need to setup the board with html first
// then we can tie events to each section, so row 1 col 1 etc

//gameboard is a module
const gameboard = (() => {
    let gboardArrX = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
    let gboardArrO = ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'];
    let playArea = document.querySelector('.gboard');
    let xFill = "";
    let yFill = "";
    let i = 0;

    while (i < gboardArrX.length) {
      xFill += gboardArrX[i];
      i++;
    }

    return playArea.innerText = xFill;
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