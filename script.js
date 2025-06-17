const story = {
  level1_start: {
    text: "Tom is supposed to paint the fence. What should he do?",
    img: "images/paint 12.jpg",
    choices: [
      { text: "Trick friends into painting", next: "level1_friendsPaint", points: 10 },
      { text: "Run away", next: "level1_caughtByAunt", points: -5 }
    ]
  },
  level1_friendsPaint: {
    text: "Tom convinces his friends it's fun. They paint while he relaxes.",
    img: "images/friends paint.jpg",
    choices: [
      { text: "Next Level", next: "level2_start", points: 0, reset: true }
    ]
  },
  level1_caughtByAunt: {
    text: "Tom is caught by Aunt Polly. He must finish the job himself.",
    img: "images/Tom caught by aunt.jpg",
    choices: [
      { text: "Try Again", next: "level1_start", points: 0 }
    ]
  },
  level2_start: {
    text: "Tom is now in school. The teacher asks a tough question. What should he do?",
    img: "images/Teacher asked question.jpg",
    choices: [
      { text: "Answer confidently", next: "level2_correctAnswer", points: 10 },
      { text: "Look at his friend’s book", next: "level2_wrongAnswer", points: -5 }
    ]
  },
  level2_correctAnswer: {
    text: "Tom gives a great answer and earns a star!",
    img: "images/earned a star.jpg",
    choices: [
      { text: "Next Level", next: "level3_start", points: 0, reset: true }
    ]
  },
  level2_wrongAnswer: {
    text: "Tom is caught cheating and gets detention.",
    img: "images/classroom_cheating_scene.jpg",
    choices: [
      { text: "Retry", next: "level2_start", points: 0 }
    ]
  },
  level3_start: {
    text: "Tom sees Becky Thatcher in class and decides to impress her",
    img: "images/tom saw becky.jpg",
    choices: [
      { text: "Say nothing", next: "level3_wrongAnswer", points: -5 },
      { text: "Pass her a love note 💌", next: "level3_correctAnswer", points: 10 }
    ]
  },
  level3_correctAnswer: {
    text: "Becky blushes 🥰 and smiles. She seems to like Tom too!",
    img: "images/becky 1.jpg",
    choices: [
      { text: "Next Level", next: "level4_start", points: 0, reset: true }
    ]
  },
  level3_wrongAnswer: {
    text: "Tom hesitates. Becky walks away with her friends.",
    img: "images/walk away.jpg",
    choices: [
      { text: "Retry", next: "level3_start", points: 0 }
    ]
  },
  level4_start: {
    text: "Tom and Huck venture into the dark forest. A mysterious sound echoes through the trees.",
    img: "images/sound in the forest.jpg",
    choices: [
      { text: "🕵️ Investigate the sound", next: "level4_correctAnswer", points: 10 },
      { text: "Run away scared 🏃", next: "level4_wrongAnswer", points: -5 }
    ]
  },
  level4_correctAnswer: {
    text: "Tom and his friends lead to a hidden treasure clue 🧭",
    img: "images/Find clue.jpg",
    choices: [
      { text: "Next Level", next: "level5_start", points: 0, reset: true }
    ]
  },
  level4_wrongAnswer: {
    text: "They run away. The adventure ends early.",
    img: "images/ran away.jpg",
    choices: [
      { text: "Retry", next: "level4_start", points: 0 }
    ]
  },
  level5_start: {
    text: "Tom and Huck find a treasure map near the old tree.",
    img: "images/map near tree.jpg",
    choices: [
      { text: "Ignore the map 🗑️", next: "level5_wrongAnswer", points: -5 },
      { text: "Follow the map carefully 🧭", next: "level5_correctAnswer", points: 10 }
    ]
  },
  level5_correctAnswer: {
    text: "The map leads them to a spooky cave entrance.",
    img: "images/boys looking map.jpg",
    choices: [
      { text: "Next Level", next: "level6_start", points: 0, reset: true }
    ]
  },
  level5_wrongAnswer: {
    text: "They miss the chance to find treasure.",
    img: "images/missed chance.jpg",
    choices: [
      { text: "Retry", next: "level5_start", points: 0 }
    ]
  },
  level6_start: {
    text: "In the cave, they hear Injun Joe’s voice echoing in the dark.",
    img: "images/joe voice in cave.jpg",
    choices: [
      { text: "Hide behind the rock 🪨", next: "level6_correctAnswer", points: 10 },
      { text: "Call out loudly 📣", next: "level6_wrongAnswer", points: -5 }
    ]
  },
  level6_correctAnswer: {
    text: "They stay hidden and discover a secret tunnel!",
    img: "images/hidden behind the rock.jpg",
    choices: [
      { text: "Next Level", next: "level7_start", points: 0, reset: true }
    ]
  },
  level6_wrongAnswer: {
    text: "Injun Joe hears them and they lose time escaping.",
    img: "images/caught.jpg",
    choices: [
      { text: "Retry Level", next: "level6_start", points: 0 }
    ]
  },
  level7_start: {
    text: "Tom and Huck discover the treasure hidden in an old chest!",
    img: "images/found chest.jpg",
    choices: [
      { text: "Split together🎒", next: "level7_correctAnswer", points: 10 },
      { text: "fight for Treasure 💰", next: "level7_wrongAnswer", points: -5 }
    ]
  },
  level7_correctAnswer: {
    text: "They are respected for their honesty. Villagers cheer! 🎉",
    img: "images/appreciation.jpg",
    choices: [
      { text: "Next Level", next: "level8_start", points: 0, reset: true }
    ]
  },
  level7_wrongAnswer: {
    text: "Greed leads to complications. The chest breaks open!",
    img: "images/chest break.jpg",
    choices: [
      { text: "Retry Level", next: "level7_start", points: 0 }
    ]
  },
  level8_start: {
    text: "Tom returns home a hero. Aunt Polly is proud.",
    img: "images/aunt appreciated.jpg",
    choices: [
      { text: "Share the story with friends 📖", next: "level8_correctAnswer", points: 10 },
      { text: "Keep it a secret 🤫", next: "level8_wrongAnswer", points: -5 }
    ]
  },
  level8_correctAnswer: {
    text: "Everyone celebrates Tom’s bravery and kindness. 🥳",
    img: "images/success.jpg",
    choices: []
  },
  level8_wrongAnswer: {
    text: "Tom smiles quietly. The adventure stays his secret. 😏",
    img: "images/smile secretly.jpg",
    choices: []
  }
};


let score = 0;
let timeLeft = 60;
let timerInterval;
let typingTimeout;

// ✅ Player session data
let playerID = Date.now().toString();
let startDate = new Date();
let dateString = startDate.toLocaleDateString();
let timeString = startDate.toLocaleTimeString();
let levelsRemaining = 8;

const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const storyDiv = document.getElementById("story");
const storyImg = document.getElementById("story-img");
const choicesDiv = document.getElementById("choices");
const levelsLeftEl = document.getElementById("levels-left");

const bgMusic = document.getElementById("bg-music");
const welcomeScreen = document.getElementById("welcome-screen");
const startBtn = document.getElementById("start-game");
const agreeCheckbox = document.getElementById("agree-checkbox");
const gameContainer = document.getElementById("game-container");
const controls = document.getElementById("controls");
const topBar = document.getElementById("top-bar");
const playerNameInput = document.getElementById("playerName");
const playerNameDisplay = document.getElementById("player-name");
const nameInputWrapper = document.getElementById("name-input-wrapper");

agreeCheckbox.addEventListener("change", () => {
  startBtn.disabled = !agreeCheckbox.checked;
});

startBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  if (!playerName) {
    alert("Please enter your name to start.");
    return;
  }

  localStorage.setItem("tomSawyerPlayer", playerName);
  playerNameDisplay.textContent = `Player: ${playerName}`;
  welcomeScreen.style.display = "none";
  nameInputWrapper.style.display = "none";
  gameContainer.style.display = "block";
  controls.style.display = "flex";
  topBar.style.display = "flex";

  bgMusic.volume = 0.4;
  bgMusic.play();

  fetch("https://sheetdb.io/api/v1/i7uxj0badyqr6", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [{
        id: playerID,
        name: playerName,
        date: dateString,
        time: timeString
      }]
    })
  });

  levelsRemaining = 7;
  levelsLeftEl.textContent = `Levels Left: ${levelsRemaining}`;
  showScene("level1_start");
  startTimer();
});

function typeText(text, element, i = 0) {
  clearTimeout(typingTimeout);
  if (i === 0) element.innerHTML = "";
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    typingTimeout = setTimeout(() => typeText(text, element, i + 1), 30);
  }
}

function updateScore(points = 0) {
  score += points;
  scoreEl.textContent = `Score: ${score}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  timerEl.textContent = `Time Left: ${timeLeft}s`;
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Final Score: " + score);
      location.reload();
    }
  }, 1000);
}

function toggleMusic() {
  if (bgMusic.paused) bgMusic.play();
  else bgMusic.pause();
}

function showScene(sceneKey) {
  const scene = story[sceneKey];
  typeText(scene.text, storyDiv);
  storyImg.src = scene.img;
  choicesDiv.innerHTML = "";

  if (sceneKey === "level8_correctAnswer" || sceneKey === "level8_wrongAnswer") {
    setTimeout(() => {
      showWinningScreen();
    }, 6000);
    return;
  }

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.className = "choice-btn";

    btn.onclick = () => {
      updateScore(choice.points || 0);
      if (choice.reset || choice.points > 0) resetTimer();


      if (choice.text.toLowerCase().includes("next level")) {
        levelsRemaining--;
        levelsLeftEl.textContent = `Levels Left: ${levelsRemaining}`;
      }

      showScene(choice.next);
    };

    choicesDiv.appendChild(btn);
  });
}

function showWinningScreen() {
  const winningScreen = document.getElementById("winning-screen");
  const finalScoreSpan = document.getElementById("final-score");
  gameContainer.style.display = "none";
  topBar.style.display = "none";
  controls.style.display = "none";
  finalScoreSpan.textContent = score;
  winningScreen.style.display = "block";


  fetch(`https://sheetdb.io/api/v1/i7uxj0badyqr6/id/${playerID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: { score: score }
    })
  });
}

function restartGame() {
  const winningScreen = document.getElementById("winning-screen");
  score = 0;
  timeLeft = 60;
  levelsRemaining = 8;
  updateScore(0);
  timerEl.textContent = `Time Left: ${timeLeft}s`;
  levelsLeftEl.textContent = `Levels Left: ${levelsRemaining}`;
  winningScreen.style.display = "none";
  gameContainer.style.display = "block";
  topBar.style.display = "flex";
  controls.style.display = "flex";
  showScene("level1_start");
  startTimer();
}

function exitGame() {
  window.location.href = "https://shyam-kumar-dev.github.io/My-portfolio-/";
}
