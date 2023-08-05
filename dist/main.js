/* eslint-disable camelcase */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./level-game.js":
/*!***********************!*\
  !*** ./level-game.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLevel: () => (/* binding */ renderLevel)
/* harmony export */ });
/* harmony import */ var _wholeCardsSuits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wholeCardsSuits.js */ "./wholeCardsSuits.js");


function renderLevel(card, appEl) {
    let levelGame = card.value;
    const cardsFlipSide = [];

    function getCardsFlipSideArr(levelGame) {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" class="game_card__flip" src="./static/img/рубашка.png">`,
            );
        }
        return cardsFlipSide;
    }

    getCardsFlipSideArr(levelGame);

    const appHTML = `
    <div class="game_card__box">
            <header class="header">
                <div class="header_game__timer">  
                   <div class="game_timer">
                       <p class="game_timer__item">min</p>
                       <p class="game_timer__item">sek</p>
                   </div>   
                    <p class="game_timer__time">00.00</p>         
                </div>
                <button class="header_game__button" id="submit-button" type="submit">Начать заново</button>
            </header>
            <div class="game_card">
            ${cardsFlipSide}
            </div>
        </div>`;

    appEl.innerHTML = appHTML;

    let button = document.querySelector('.game_card__flip');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        const appHTML = `
         <div class="game_card__box">
            <header class="header">
                <div class="header_game__timer">  
                   <div class="game_timer">
                       <p class="game_timer__item">min</p>
                       <p class="game_timer__item">sek</p>
                   </div>   
                    <p class="game_timer__time">00.00</p>         
                </div>
                <button class="header_game__button" id="submit-button" type="submit">Начать заново</button>
            </header>
            <div class="game_card">
            ${_wholeCardsSuits_js__WEBPACK_IMPORTED_MODULE_0__.cardsSuitsArr}
            </div>
        </div>`;

        appEl.innerHTML = appHTML;
    });
}


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wholeCardsSuits.js":
/*!****************************!*\
  !*** ./wholeCardsSuits.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardsSuitsArr: () => (/* binding */ cardsSuitsArr)
/* harmony export */ });
const cardsSuitsArr = [
    `<img class="game_card__flip" src="./static/img/6 бубны.png" alt="6 бубны">`,
    `<img class="game_card__flip" src="./static/img/6 крести.png" alt="6 крести">`,
    `<img class="game_card__flip" src="./static/img/6 пики.png" alt="6 пики">`,
    `<img class="game_card__flip" src="./static/img/6 черви.png" alt="6 черви">`,

    `<img class="game_card__flip" src="./static/img/7 бубны.png" alt="7 бубны">`,
    `<img class="game_card__flip" src="./static/img/7 крести.png" alt="7 крести">`,
    `<img class="game_card__flip" src="./static/img/7 пики.png" alt="7 пики">`,
    `<img class="game_card__flip" src="./static/img/7 черви.png" alt="7 черви">`,

    `<img class="game_card__flip" src="./static/img/8 бубны.png" alt="8 бубны">`,
    `<img class="game_card__flip" src="./static/img/8 крести.png" alt="8 крести">`,
    `<img class="game_card__flip" src="./static/img/8 пики.png" alt="8 пики">`,
    `<img class="game_card__flip" src="./static/img/8 черви.png" alt="8 черви">`,

    `<img class="game_card__flip" src="./static/img/9 бубны.png" alt="9 бубны">`,
    `<img class="game_card__flip" src="./static/img/9 крести.png" alt="9 крести">`,
    `<img class="game_card__flip" src="./static/img/9 пики.png" alt="9 пики">`,
    `<img class="game_card__flip" src="./static/img/9 черви.png" alt="9 черви">`,

    `<img class="game_card__flip" src="./static/img/10 бубны.png" alt="10 бубны">`,
    `<img class="game_card__flip" src="./static/img/10 крести.png" alt="10 крести">`,
    `<img class="game_card__flip" src="./static/img/10 пики.png" alt="10 пики">`,
    `<img class="game_card__flip" src="./static/img/10 черви.png" alt="10 черви">`,

    `<img class="game_card__flip" src="./static/img/валет бубны.png" alt="валет бубны">`,
    `<img class="game_card__flip" src="./static/img/валет крести.png" alt="валет крести">`,
    `<img class="game_card__flip" src="./static/img/валет пики.png" alt="валет пики">`,
    `<img class="game_card__flip" src="./static/img/валет черви.png" alt="валет черви">`,

    `<img class="game_card__flip" src="./static/img/дама бубны.png" alt="дама бубны">`,
    `<img class="game_card__flip" src="./static/img/дама крести.png" alt="дама крести">`,
    `<img class="game_card__flip" src="./static/img/дама пики.png" alt="дама пики">`,
    `<img class="game_card__flip" src="./static/img/дама черви.png" alt="дама черви">`,

    `<img class="game_card__flip" src="./static/img/король бубны.png" alt="король бубны">`,
    `<img class="game_card__flip" src="./static/img/король крести.png" alt="король крести">`,
    `<img class="game_card__flip" src="./static/img/король пики.png" alt="король пики">`,
    `<img class="game_card__flip" src="./static/img/король черви.png" alt="король черви">`,

    `<img class="game_card__flip" src="./static/img/туз бубны.png" alt="туз бубны">`,
    `<img class="game_card__flip" src="./static/img/туз крести.png" alt="туз крести">`,
    `<img class="game_card__flip" src="./static/img/туз пики.png" alt="туз пики">`,
    `<img class="game_card__flip" src="./static/img/туз черви.png" alt="туз черви">`,
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");// eslint-disable-line no-unused-vars
/* harmony import */ var _level_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-game.js */ "./level-game.js");



function renderFormSelectionLevel() {
    let appEl = document.getElementById('app');

    const appHTML = `
    <div class="center">
    <form class="difficulty_box" id="form-selection" action="#">
        <h3 class="difficulty_box__title">
            Выбери<br>сложность
        </h3>
            <div class="difficulty_box__choice">
                <input class="button_level__radio" type="radio" id="levelChoice1" name="level" value="6" checked />
                <label for="levelChoice1" class="button_level">1</label>

                <input class="button_level__radio" type="radio" id="levelChoice2" name="level" value="12" />
                <label for="levelChoice2" class="button_level">2</label>

                <input class="button_level__radio" type="radio" id="levelChoice3" name="level" value="18" />
                <label for="levelChoice3" class="button_level">3</label>
            </div>
            <div class="difficulty_box__button">
                <button type="submit" id="button-submit" class="button_start">Старт</button>
            </div>
    </form>
    </div>`;

    appEl.innerHTML = appHTML;

    document
        .getElementById('form-selection')
        .addEventListener('submit', (event) => {
            event.preventDefault();

            let level = document.querySelectorAll('.button_level__radio');

            for (const card of level) {
                if (card.checked) {
                    (0,_level_game_js__WEBPACK_IMPORTED_MODULE_1__.renderLevel)(card, appEl);
                }
            }
        });

    /* другой вариант обработки клика
    let level = document.querySelectorAll('.button_level__radio');
    let button = document.querySelector('.button_start');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        for (let card of level) {
            if (card.checked) {
                renderLevel(card, appEl);
            }
        }
    });
    */
}

renderFormSelectionLevel();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map