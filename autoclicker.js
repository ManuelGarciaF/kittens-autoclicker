/* eslint-disable no-console */

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

console.log('Starting autoclicker loop');
setInterval(() => {
  if (checkHuntsLeft > 9) {
    sendHunters();
  }
}, 1000);
