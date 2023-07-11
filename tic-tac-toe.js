
//gameboard is a module
const gameboard = (() => {
    let gboardArr = [];

    return console.log("gameboard works");
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
    let gboardArr = [];

    return console.log("gameController works");
  })();