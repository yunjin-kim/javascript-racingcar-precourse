import Render from './components/Render.js';
import Game from './components/game.js';
import { NUMBER, WINNER } from './utils/constant.js';
import { $, $new } from './utils/dom.js';

export default class Car {
  constructor(userInput) {
    this.userInput = userInput;
    this.gameResultWrap = $("racing-result");
    this.gameResultDiv = $new("div");
    this.gameResultSpan = $new("span");
    this.Game = new Game(userInput)
    this.gameResultSpan.id = "racing-winners";
    console.log(this.gameResultSpan)
    this.gameResultSpan.style.opacity = NUMBER.ZERO;
    this.gameResultDiv.innerHTML = `${this.Game.gameResultObject.gameProcess}\n ${WINNER}: ${this.Game.gameResultObject.gmaeWinner} `;
    this.gameResultSpan.textContent = this.Game.gameResultObject.gmaeWinner;
    this.gameResultWrap.append(this.gameResultDiv, this.gameResultSpan);
  } 
}

new Render()