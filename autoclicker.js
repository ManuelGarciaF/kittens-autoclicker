/* eslint-disable no-console */

const log = (message) => console.log(`Autoclicker: ${message}.`);

const checkHuntsLeft = () => Number(
  document
    .getElementById('fastHuntContainerCount')
    .textContent
    .split(' ')[0],
);

const sendHunters = () => document
  .getElementById('fastHuntContainer')
  .firstElementChild
  .click();

log('Starting autoclicker loop');
setInterval(() => {
  if (checkHuntsLeft() > 9) {
    sendHunters();
    log('Sending hunters');
  }
}, 1000);
