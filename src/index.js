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
    this.gameResultSpan.style.opacity = NUMBER.ZERO;
    gameResultDiv.innerHTML = `${this.Game.gameProcess}\n ${WINNER}: ${this.Game.gmaeWinner} `;
    gameResultSpan.textContent = this.Game.gmaeWinner;
    gameResultWrap.append(gameResultDiv, gameResultSpan);
  } 
}

new Render()