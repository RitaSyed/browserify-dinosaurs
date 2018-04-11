// const domEvents = require('./events');

const outputDiv = document.getElementById('dinos');
// require events

const domString = (dinos) => {
  let strang = '';
  dinos.forEach((dino) => {
    strang += `<h2>${dino.type}</h2>`;
  });
  return strang;
};

const printToDom = (dinoArray) => {
  outputDiv.inner = domString(dinoArray);
  // domEvents();
};

module.exports = printToDom;
