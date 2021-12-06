import { CARS_NAME, COMMA, DASH, EMPTY, GMAE_COUNT, NUMBER } from "../utils/constant.js";

export default class Game {
  constructor(userInput) {
    this.userInput = userInput;
    this.gameWinCountArray = Array.from({length: userInput[CARS_NAME].split(COMMA).length}, () => NUMBER.ZERO);
    this.gameResultObject = {
      gameProcess: EMPTY,
      gmaeWinner: EMPTY
    };
    this.gameStart();
  }

  gameStart() {
    const gameResult = this.setGameResult();
    return gameResult;
  }
  
  setGameResult() {
    for (let i = 0; i < this.userInput[GMAE_COUNT]; i++) {
      const winGameCountArray = this.setWinGameCount(this.setGameRandonNumber());
      this.gameResultObject.gameProcess += `${this.setProcessTemplete(winGameCountArray)}<br/>`;
    }
    this.gameResultObject.gmaeWinner = this.setGameWinner();
  
    return this.gameResultObject;
  }
  
  setGameRandonNumber() {
    const ramdomNumberArray = [];
    for (let i = 0; i < this.gameWinCountArray.length; i++) { 
      ramdomNumberArray.push(MissionUtils.Random.pickNumberInRange(NUMBER.RANDOM_START, NUMBER.RANDOM_END));
    }
  
    return ramdomNumberArray;
  }
  
  setWinGameCount(gameRandonNumberArray) {
    for (let i = 0; i < gameRandonNumberArray.length; i++) {
      if (gameRandonNumberArray[i] >= NUMBER.GO_STANDARD) {
        this.gameWinCountArray[i]++;
      }
    }
    
    return this.gameWinCountArray;
  }
  
  setGameWinner() {
    const topNumber = Math.max(...this.gameWinCountArray);
    let topNumberCars = "";
    this.gameWinCountArray.forEach((winNumber, i) => {
      if (winNumber === topNumber) {
        topNumberCars += `${this.userInput[CARS_NAME].split(COMMA)[i]},`;
      }
    })
    
    return topNumberCars.slice(0, -1);
  }
  
  setProcessTemplete(winGameCountArray) {
    let result = EMPTY;
    for (let i = 0; i < this.userInput[CARS_NAME].split(COMMA).length; i++) {
      result += `${this.userInput[CARS_NAME].split(COMMA)[i]}: ${this.gameProcessNumberReplaceText(winGameCountArray[i])}<br/>`;
    }
    
    return result;
  }
  
  gameProcessNumberReplaceText(winGameCount) {
    let result = EMPTY;
    if (winGameCount > NUMBER.ZERO) {
      for (let i = 0; i < winGameCount; i++) {
        result += DASH;
      }
    }
  
    return result;
  }
}

