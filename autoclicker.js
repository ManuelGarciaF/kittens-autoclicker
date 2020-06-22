/* eslint-disable no-console */

const log = (message) => console.log(`Autoclicker: ${message}.`);

const getResourceStock = (resourceName) => {
  const query = `.resource_${resourceName}`;

  try {
    return Number(document.querySelector(query).querySelector('.resAmount').innerText);
  } catch {
    return 0;
  }
};

const checkHuntsLeft = () => {
  if (document.getElementById('fastHuntContainer').style.visibility === 'hidden') return 0;

  return Number(
    document
      .getElementById('fastHuntContainerCount')
      .textContent
      .split(' ')[0],
  );
};

const sendHunters = () => document
  .getElementById('fastHuntContainer')
  .firstElementChild
  .click();

const craftSteel = () => document
  .querySelector('.resource_steel')
  .querySelector('.craft-link.all')
  .click();

// Main Loop
setInterval(() => {
  // Hunters
  if (checkHuntsLeft() > 9) {
    sendHunters();
    log('Sending hunters');
  }

  // Steel crafting
  if (getResourceStock('iron') >= 500 && getResourceStock('coal') >= 500) {
    craftSteel();
    log('Crafting steel');
  }
}, 1000);
log('Started autoclicker loop');
