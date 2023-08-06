/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/card-game.js":
/*!*************************!*\
  !*** ./js/card-game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCardArray: () => (/* binding */ createCardArray),
/* harmony export */   defaultCardArray: () => (/* binding */ defaultCardArray)
/* harmony export */ });
const createCardArray = [
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

//массив рубашек
const defaultCardArray = [];

for (let i = 0; i < 36; i++) {
    defaultCardArray.push(
        `<img class="game_card__flip" data-index="${i}" src="./static/img/рубашка.png">`,
    );
}


/***/ }),

/***/ "./js/listHtml-game.js":
/*!*****************************!*\
  !*** ./js/listHtml-game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderListHtml: () => (/* binding */ renderListHtml)
/* harmony export */ });
function renderListHtml(currentCardArr, appEl) {
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
            <div class="game_card" id="suits">
            ${currentCardArr.join('')}
            </div>
        </div>`;

    appEl.innerHTML = appHTML;
}


/***/ }),

/***/ "./js/play-game.js":
/*!*************************!*\
  !*** ./js/play-game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _card_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-game.js */ "./js/card-game.js");
/* harmony import */ var _listHtml_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listHtml-game.js */ "./js/listHtml-game.js");



function playGame(card, appEl) {
    let lengthArray = card.value;
    let currentCardArr = [];

    let flag = true;

    let firstCard = null;
    let secondCard = null;

    let sortCardArray = _card_game_js__WEBPACK_IMPORTED_MODULE_0__.createCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, lengthArray / 2);
    sortCardArray = sortCardArray
        .concat(sortCardArray)
        .sort(() => Math.random() - 0.5);

    let sortDefaultCardArr = _card_game_js__WEBPACK_IMPORTED_MODULE_0__.defaultCardArray.slice(0, lengthArray);
    currentCardArr = sortDefaultCardArr;

    (0,_listHtml_game_js__WEBPACK_IMPORTED_MODULE_1__.renderListHtml)(sortCardArray, appEl);

    function showCoverCard() {
        (0,_listHtml_game_js__WEBPACK_IMPORTED_MODULE_1__.renderListHtml)(currentCardArr, appEl);

        const suits = document.getElementById('suits');
        let itemCards = suits.children;

        for (const itemCard of itemCards) {
            itemCard.addEventListener('click', () => {
                let cardIndex = itemCard.dataset.index;
                //let duplicate = itemCard.dataset.index;

                if (flag) {
                    firstCard = cardIndex;
                    currentCardArr[cardIndex] = sortCardArray[cardIndex];
                    showCoverCard();
                } else {
                    secondCard = cardIndex;
                    compareCard(firstCard, secondCard);
                    showCoverCard(); //нет картинки
                }
                flag = !flag;
            });
        }
    }
    setTimeout(showCoverCard, 5000);

    function compareCard(firstCard, secondCard) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            currentCardArr = sortCardArray;
            alert('Выиграл');
        } else {
            currentCardArr = sortCardArray;
            alert('Проиграл');
        }
    }
}


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _js_play_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/play-game.js */ "./js/play-game.js");



let appEl = document.getElementById('app');

function renderFormSelectionLevel(appEl, renderListHtml) {
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
                        renderListHtml(card, appEl);
                    }
                }
            });

}

renderFormSelectionLevel(appEl, _js_play_game_js__WEBPACK_IMPORTED_MODULE_1__.playGame);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map