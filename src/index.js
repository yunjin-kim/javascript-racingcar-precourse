import { formEvent } from './components/formEvent.js';
import { gameStart } from './components/game.js';
import { NUMBER, WINNER } from './utils/constant.js';
import { $, $new } from './utils/dom.js';

export default class Car {
  constructor(userInput) {
    this.userInput = userInput;
    this.gameResultWrap = $("racing-result");
    this.gameResultDiv = $new("div");
    this.gameResultSpan = $new("span");
    this.gameResult = gameStart(userInput);
    this.gameResultSpan.id = "racing-winners";
    this.gameResultSpan.style.opacity = NUMBER.ZERO;
    gameResultDiv.innerHTML = `${gameResult.gameProcess}\n ${WINNER}: ${gameResult.gmaeWinner} `;
    gameResultSpan.textContent = gameResult.gmaeWinner;
    gameResultWrap.append(gameResultDiv, gameResultSpan);
  } 
}

formEvent()