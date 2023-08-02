/* eslint-disable camelcase */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {// eslint-disable-line no-unused-vars

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-game.js */ \"./level-game.js\");\n\n\nfunction renderFormSelectionLevel() {\n    let appEl = document.getElementById('app');\n\n    const appHTML = `\n    <div class=\"center\">\n    <form class=\"difficulty_box\" id=\"form-selection\" action=\"#\">\n        <h3 class=\"difficulty_box__title\">\n            Выбери<br>сложность\n        </h3>\n            <div class=\"difficulty_box__choice\">\n                <input class=\"button_level__radio\" type=\"radio\" id=\"levelChoice1\" name=\"level\" value=\"6\" checked />\n                <label for=\"levelChoice1\" class=\"button_level\">1</label>\n\n                <input class=\"button_level__radio\" type=\"radio\" id=\"levelChoice2\" name=\"level\" value=\"12\" />\n                <label for=\"levelChoice2\" class=\"button_level\">2</label>\n\n                <input class=\"button_level__radio\" type=\"radio\" id=\"levelChoice3\" name=\"level\" value=\"18\" />\n                <label for=\"levelChoice3\" class=\"button_level\">3</label>\n            </div>\n            <div class=\"difficulty_box__button\">\n                <button type=\"submit\" id=\"button-submit\" class=\"button_start\">Старт</button>\n            </div>\n    </form>\n    </div>`;\n\n    appEl.innerHTML = appHTML;\n\n    document\n        .getElementById('form-selection')\n        .addEventListener('submit', (event) => {\n            event.preventDefault();\n\n            let level = document.querySelectorAll('.button_level__radio');\n\n            for (const card of level) {\n                if (card.checked) {\n                    (0,_level_game_js__WEBPACK_IMPORTED_MODULE_0__.renderLevel)(card, appEl);\n                }\n            }\n        });\n\n    /* другой вариант обработки клика\n    let level = document.querySelectorAll('.button_level__radio');\n    let button = document.querySelector('.button_start');\n\n    button.addEventListener('click', (event) => {\n        event.preventDefault();\n\n        for (let card of level) {\n            if (card.checked) {\n                renderLevel(card, appEl);\n            }\n        }\n    });\n    */\n}\n\nrenderFormSelectionLevel();\n\n\n//# sourceURL=webpack://development-tools/./index.js?");

/***/ }),

/***/ "./level-game.js":
/*!***********************!*\
  !*** ./level-game.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {// eslint-disable-line no-unused-vars

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLevel: () => (/* binding */ renderLevel)\n/* harmony export */ });\n/* harmony import */ var _wholeCardsSuits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wholeCardsSuits.js */ \"./wholeCardsSuits.js\");\n\n\nfunction renderLevel(card, appEl) {\n    let levelGame = card.value;\n    const cardsFlipSide = [];\n\n    function getCardsFlipSideArr(levelGame) {\n        for (let i = 0; i < levelGame; i++) {\n            cardsFlipSide.push(\n                `<img id=\"cards-click\" class=\"game_card__flip\" src=\"./img/рубашка.png\">`,\n            );\n        }\n        return cardsFlipSide;\n    }\n\n    getCardsFlipSideArr(levelGame);\n\n\n    const appHTML = `\n    <div class=\"game_card__box\">\n            <header class=\"header\">\n                <div class=\"header_game__timer\">  \n                   <div class=\"game_timer\">\n                       <p class=\"game_timer__item\">min</p>\n                       <p class=\"game_timer__item\">sek</p>\n                   </div>   \n                    <p class=\"game_timer__time\">00.00</p>         \n                </div>\n                <button class=\"header_game__button\" id=\"submit-button\" type=\"submit\">Начать заново</button>\n            </header>\n            <div class=\"game_card\">\n            ${cardsFlipSide}\n            </div>\n        </div>`;\n\n    appEl.innerHTML = appHTML;\n\n    let button = document.querySelector('.game_card__flip');\n\n    button.addEventListener('click', (event) => {\n        event.preventDefault();\n\n        const appHTML = `\n         <div class=\"game_card__box\">\n            <header class=\"header\">\n                <div class=\"header_game__timer\">  \n                   <div class=\"game_timer\">\n                       <p class=\"game_timer__item\">min</p>\n                       <p class=\"game_timer__item\">sek</p>\n                   </div>   \n                    <p class=\"game_timer__time\">00.00</p>         \n                </div>\n                <button class=\"header_game__button\" id=\"submit-button\" type=\"submit\">Начать заново</button>\n            </header>\n            <div class=\"game_card\">\n            ${_wholeCardsSuits_js__WEBPACK_IMPORTED_MODULE_0__.cardsSuitsArr}\n            </div>\n        </div>`;\n\n        appEl.innerHTML = appHTML;\n    });\n}\n\n\n//# sourceURL=webpack://development-tools/./level-game.js?");

/***/ }),

/***/ "./wholeCardsSuits.js":
/*!****************************!*\
  !*** ./wholeCardsSuits.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {// eslint-disable-line no-unused-vars

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardsSuitsArr: () => (/* binding */ cardsSuitsArr)\n/* harmony export */ });\nconst cardsSuitsArr = [\r\n        `<img class=\"game_card__flip\" src=\"./img/6 бубны.png\" alt=\"6 бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/6 крести.png\" alt=\"6 крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/6 пики.png\" alt=\"6 пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/6 черви.png\" alt=\"6 черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/7 бубны.png\" alt=\"7 бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/7 крести.png\" alt=\"7 крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/7 пики.png\" alt=\"7 пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/7 черви.png\" alt=\"7 черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/8 бубны.png\" alt=\"8 бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/8 крести.png\" alt=\"8 крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/8 пики.png\" alt=\"8 пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/8 черви.png\" alt=\"8 черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/9 бубны.png\" alt=\"9 бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/9 крести.png\" alt=\"9 крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/9 пики.png\" alt=\"9 пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/9 черви.png\" alt=\"9 черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/10 бубны.png\" alt=\"10 бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/10 крести.png\" alt=\"10 крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/10 пики.png\" alt=\"10 пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/10 черви.png\" alt=\"10 черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/валет бубны.png\" alt=\"валет бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/валет крести.png\" alt=\"валет крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/валет пики.png\" alt=\"валет пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/валет черви.png\" alt=\"валет черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/дама бубны.png\" alt=\"дама бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/дама крести.png\" alt=\"дама крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/дама пики.png\" alt=\"дама пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/дама черви.png\" alt=\"дама черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/король бубны.png\" alt=\"король бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/король крести.png\" alt=\"король крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/король пики.png\" alt=\"король пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/король черви.png\" alt=\"король черви\">`,\r\n\r\n        `<img class=\"game_card__flip\" src=\"./img/туз бубны.png\" alt=\"туз бубны\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/туз крести.png\" alt=\"туз крести\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/туз пики.png\" alt=\"туз пики\">`,\r\n        `<img class=\"game_card__flip\" src=\"./img/туз черви.png\" alt=\"туз черви\">`\r\n\r\n]\n\n//# sourceURL=webpack://development-tools/./wholeCardsSuits.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");// eslint-disable-line no-unused-vars
/******/ 	
/******/ })()
;