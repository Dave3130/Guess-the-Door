let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

const blockedDoorPath = "images/door-blocked.png";
const rewardDoorPath = "images/reward.png";
const closedDoorPath = "images/closed-door.png";

let startButton = document.getElementById("start");

let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentPlaying = true;

let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const isBlocked = (door) => {
    if (door.src.search(blockedDoorPath) != -1 ) {
        return true;
    } else {
        return false;
    }
}
const isClicked = door => {
    if (door.src.search(closedDoorPath) != -1 ) {
        return false;
    } else {
        return true;
    }
}
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    }
    else if (isBlocked(door) === true) {
        return gameOver();
    }
}
const randomDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * 6);
  switch (choreDoor) {
    case 0:
      openDoor1 = blockedDoorPath;
      openDoor2 = rewardDoorPath;
      openDoor3 = rewardDoorPath;
      break;
    case 1:
      openDoor1 = blockedDoorPath;
      openDoor2 = rewardDoorPath;
      openDoor3 = rewardDoorPath;
      break;
    case 2:
      openDoor2 = blockedDoorPath;
      openDoor1 = rewardDoorPath;
      openDoor3 = rewardDoorPath;
      break;
    case 3:
      openDoor2 = blockedDoorPath;
      openDoor1 = rewardDoorPath;
      openDoor3 = rewardDoorPath;
      break;
    case 4:
      openDoor3 = blockedDoorPath;
      openDoor1 = rewardDoorPath;
      openDoor2 = rewardDoorPath;
      break;
    case 5:
      openDoor3 = blockedDoorPath;
      openDoor1 = rewardDoorPath;
      openDoor2 = rewardDoorPath;
      break;
  }
}


doorImage1.onclick = () => {
    
    if (!isClicked(doorImage1) && currentPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};
doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentPlaying) {

        doorImage2.src = openDoor2;
        playDoor(doorImage2);

    }
}
doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}
const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck!";
    currentPlaying = true;
    randomDoorGenerator();
}

startButton.onclick = () => {
    if (!currentPlaying) {
        startRound();
    }
}
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play again?";
        getYourScore();
    } else {
        startButton.innerHTML = "Game over! Play again?";
        score= 0;
        currentStreak.innerHTML = score;
    }
    currentPlaying = false;
}

const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}

startRound();