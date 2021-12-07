import ValueCheck from './components/ValueCheck.js';
import Game from './components/Game.js';
import { NUMBER, WINNER } from './utils/constant.js';
import { $, $new } from './utils/dom.js';

export default class Render {
  constructor(userInput) {
    this.userInput = userInput;
    this.gameResultWrap = $("racing-result");
    this.gameResultDiv = $new("div");
    this.gameResultSpan = $new("span");
    this.Game = new Game(userInput)
    this.gameResultSpan.id = "racing-winners";
    this.gameResultSpan.style.opacity = NUMBER.ZERO;
    this.gameResultDiv.innerHTML = `${this.Game.gameResultObject.gameProcess}\n ${WINNER}: ${this.Game.gameResultObject.gmaeWinner} `;
    this.gameResultSpan.textContent = this.Game.gameResultObject.gmaeWinner;
    this.gameResultWrap.append(this.gameResultDiv, this.gameResultSpan);
  } 
}

new ValueCheck()