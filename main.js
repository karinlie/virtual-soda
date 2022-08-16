const addSoda = (name) => {
  const glass = document.getElementById('glass');
  const soda = document.createElement('div');
  soda.className = 'soda ' + name;
  glass.appendChild(soda);
};

const addFanta = () => addSoda('fanta');

const addMozell = () => addSoda('mozell');

const addPepsiMax = () => addSoda('pepsi-max');

const emptyGlass = () => {
  const glass = document.getElementById('glass');
  glass.replaceChildren([]);
};
