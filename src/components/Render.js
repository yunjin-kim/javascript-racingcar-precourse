import Car from '../index.js'; 
import { CARS_NAME, GMAE_COUNT, NUMBER, MESSAGE, ELEMENT_MESSAGE } from '../utils/constant.js';
import { $all, setGameElemetStyle } from '../utils/dom.js';

export default class Render {
  constructor() {
    this.allForm = $all("form");
    this.allInput = $all("input");
    this.formEvent();
  }

  formEvent() {
    setGameElemetStyle(ELEMENT_MESSAGE.BEFORE_GAME);
    for (const eachForm of this.allForm) {
      eachForm.addEventListener("submit", (submitEvent) => {
        submitEvent.preventDefault();
        const inputEventResult =  this.inputEvent(submitEvent);
        if (inputEventResult) {
          new Car(inputEventResult);
        }
      })
    }
  }

  inputEvent(submitEvent) {
    const inputValueArray = [];
    for (const eachInput of this.allInput) {
      inputValueArray.push(eachInput.value);
    }
    const inputCheckResult = this.inputCheck(submitEvent, inputValueArray);
    if (inputCheckResult) {
      return inputValueArray;
    }
  }

  inputCheck(submitEvent, inputValueArray) {
    let gameCountCheckResult;
    if (submitEvent.target.id === "racing-count-form") {
      gameCountCheckResult = this.gameCountCheck(inputValueArray[GMAE_COUNT]);
    }
    if (this.carNameCheck(inputValueArray[CARS_NAME]) && gameCountCheckResult) {
      setGameElemetStyle(ELEMENT_MESSAGE.COUNT_INPUT);
      return gameCountCheckResult;
    }
  }

  gameCountCheck(gameCount) {
    let result = true;
    if (!gameCount) {
      alert(MESSAGE.GAMECOUNT_EMPTY);
      result = false;
    } else if (gameCount <= NUMBER.ZERO) {
      alert(MESSAGE.GAMECOUNT_UNDERONE)
      result = false;
    }
  
    return result;
  }

  carNameCheck(carsName) {
    let result = true;
    if (!carsName) {
      alert(MESSAGE.CARNAME_EMPTY);
      result = false;
    } else if (!this.carsNameLengthCheck(carsName)) {
      alert(MESSAGE.CARNMAE_OVERFIVEWORD);
      result = false;
    }
    if (result) {
      setGameElemetStyle(ELEMENT_MESSAGE.CARS_INPUT)
      return result;
    }
  }

  carsNameLengthCheck(carsName) {
    let result = true;
    for (const carName of carsName.split(',')) {
      if (carName.length > NUMBER.FIVE) {
        result = false;
      }
    }
    
    return result;
  }
}
