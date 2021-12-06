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
    const gameResult = setGameResult();
    return gameResult;
  }
  
  setGameResult() {
    for (let i = 0; i < this.userInput[GMAE_COUNT]; i++) {
      const winGameCountArray = setWinGameCount(setGameRandonNumber());
      this.gameResultObject.gameProcess += `${setProcessTemplete(winGameCountArray, this.userInput[CARS_NAME])}<br/>`;
    }
    this.gameResultObject.gmaeWinner = setGameWinner(this.userInput[CARS_NAME], gameWinCountArray);
  
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
  
  setGameWinner(carsName, winGameCountArray) {
    const topNumber = Math.max(...winGameCountArray);
    let topNumberCars = "";
    winGameCountArray.forEach((winNumber, i) => {
      if (winNumber === topNumber) {
        topNumberCars += `${carsName.split(COMMA)[i]},`;
      }
    })
    
    return topNumberCars.slice(0, -1);
  }
  
  setProcessTemplete(winGameCountArray, carsName) {
    let result = EMPTY;
    for (let i = 0; i < carsName.split(COMMA).length; i++) {
      result += `${carsName.split(COMMA)[i]}: ${gameProcessNumberReplaceText(winGameCountArray[i])}<br/>`;
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

