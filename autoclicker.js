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
