// your code
const EMOJIS = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍"];

/**
 * Состояние игры
 * @property {boolean} isGameStarted - игра началась или нет
 * @property {number} totalTime - общее количество времени в игре
 * @property {number} flipedCards количество перевернутых карт
 * @property {number} totalFlips - общее колво перевернутых карточек
 */
const STATE = {
  inGameStarterd: false,
  totalTime: 0,
  flipedCards: 0,
  totalFlips: 0,
};

/**
 * Контроль игры
 * @property {HTMLDivElement} boardContainer - контйнер игровог ополя
 * @property {HTMLDivElement} board - основное содержимое
 * @property {HTMLDivElement} moves - учет шагов
 * @property {HTMLDivElement} timer - учет времени
 * @property {HTMLButtonElement} start - кнопка старта
 */

const SELECTORS = {
  boardContainer: document.querySelector(".board-container"),
  board: document.querySelector(".board"),
  controls: document.querySelector(".controls"),
  start: document.querySelector(".controls button"),
  moves: document.querySelector(".moves"),
  timer: document.querySelector(".timer"),
  win: document.querySelector(".win"),
};


//генерация игрового поля
const generateGame = () => {
  const dimensions = SELECTORS.board.dataset.dimension;

  if (dimensions % 2 !== 0) {
    throw new Error("Размер игрового поля должен быть четным");
  }

// итерация по карточкам
  const cardHTML = EMOJIS.map((emoji) => {
    return `
    <div class="card">
    <div class="card-front"></div>
    <div class="card-back">${emoji}</div>
    
    </div>
     `;
  }).join("");
  SELECTORS.board.insertAdjacentHTML("beforeend", cardHTML)
  console.log(cardHTML);
};

generateGame();
