import Car from '../index.js'; 
import { CARS_NAME, GMAE_COUNT, NUMBER, MESSAGE, ELEMENT_MESSAGE } from '../utils/constant.js';
import { $all, setGameElemetStyle } from '../utils/dom.js';

export default class Render {
  constructor() {
    this.allForm = $all("form");
    this.allInput = $all("input");
    this.inputValueArray = [];
    this.formEvent();
  }

  formEvent() {
    // setGameElemetStyle(ELEMENT_MESSAGE.BEFORE_GAME);
    for (const eachForm of this.allForm) {
      eachForm.addEventListener("submit", (submitEvent) => {
        submitEvent.preventDefault();
        if (this.inputEvent(submitEvent)) {
          new Car(this.inputEvent(submitEvent));
        }
      })
    }
  }

  inputEvent(submitEvent) {;
    for (const eachInput of this.allInput) {
      this.inputValueArray.push(eachInput.value);
    }
    const inputCheckResult = this.inputCheck(submitEvent);
    if (inputCheckResult) {
      return this.inputValueArray;
    }
  }

  inputCheck(submitEvent) {
    let gameCountCheckResult;
    if (submitEvent.target.id === "racing-count-form") {
      gameCountCheckResult = this.gameCountCheck(this.inputValueArray[GMAE_COUNT]);
    }
    if (this.carNameCheck(this.inputValueArray[CARS_NAME]) && gameCountCheckResult) {
      // setGameElemetStyle(ELEMENT_MESSAGE.COUNT_INPUT);
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
      // setGameElemetStyle(ELEMENT_MESSAGE.CARS_INPUT)
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
