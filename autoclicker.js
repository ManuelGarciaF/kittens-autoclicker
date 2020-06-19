const sendHuntersButton = document.getElementById("fastHuntContainer").firstElementChild

const checkHuntsLeft = () => { 
  return Number(document
    .getElementById("fastHuntContainerCount")
    .textContent
    .split(" ")[0])
}

const sendHunters = () => sendHuntersButton.click()
