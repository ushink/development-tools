/* eslint-disable camelcase */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
        /***/ './index.js':
            /*!******************!*\
  !*** ./index.js ***!
  \******************/
            /***/ (
                __unused_webpack_module,// eslint-disable-line no-unused-vars
                __webpack_exports__,// eslint-disable-line no-unused-vars
                __webpack_require__,// eslint-disable-line no-unused-vars
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-game.js */ "./level-game.js");\n\n\nfunction renderFormSelectionLevel() {\n    let appEl = document.getElementById(\'app\');\n\n    const appHTML = `\n    <div class="center">\n    <form class="difficulty_box" id="form-selection" action="#">\n        <h3 class="difficulty_box__title">\n            Выбери<br>сложность\n        </h3>\n            <div class="difficulty_box__choice">\n                <input class="button_level__radio" type="radio" id="levelChoice1" name="level" value="6" checked />\n                <label for="levelChoice1" class="button_level">1</label>\n\n                <input class="button_level__radio" type="radio" id="levelChoice2" name="level" value="12" />\n                <label for="levelChoice2" class="button_level">2</label>\n\n                <input class="button_level__radio" type="radio" id="levelChoice3" name="level" value="18" />\n                <label for="levelChoice3" class="button_level">3</label>\n            </div>\n            <div class="difficulty_box__button">\n                <button type="submit" id="button-submit" class="button_start">Старт</button>\n            </div>\n    </form>\n    </div>`;\n\n    appEl.innerHTML = appHTML;\n\n    document\n        .getElementById(\'form-selection\')\n        .addEventListener(\'submit\', (event) => {\n            event.preventDefault();\n\n            let level = document.querySelectorAll(\'.button_level__radio\');\n\n            for (const card of level) {\n                if (card.checked) {\n                    (0,_level_game_js__WEBPACK_IMPORTED_MODULE_0__.renderLevel)(card, appEl);\n                }\n            }\n        });\n\n    /* другой вариант обработки клика\n    let level = document.querySelectorAll(\'.button_level__radio\');\n    let button = document.querySelector(\'.button_start\');\n\n    button.addEventListener(\'click\', (event) => {\n        event.preventDefault();\n\n        for (let card of level) {\n            if (card.checked) {\n                renderLevel(card, appEl);\n            }\n        }\n    });\n    */\n}\n\nrenderFormSelectionLevel();\n\n\n//# sourceURL=webpack://development-tools/./index.js?',
                );

                /***/
            },

        /***/ './level-game.js':
            /*!***********************!*\
  !*** ./level-game.js ***!
  \***********************/
            /***/ (
                __unused_webpack_module,// eslint-disable-line no-unused-vars
                __webpack_exports__,// eslint-disable-line no-unused-vars
                __webpack_require__,// eslint-disable-line no-unused-vars
            ) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLevel: () => (/* binding */ renderLevel)\n/* harmony export */ });\nfunction renderLevel(card, appEl) {\n    const appHTML = `\n    <div class="center">\n        <h2 class="box-game__title">Скоро здесь будет: ${card.value} карт</h2>\n    </div>`;\n\n    appEl.innerHTML = appHTML;\n}\n\n\n//# sourceURL=webpack://development-tools/./level-game.js?',
                );

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__,
        );
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (
                    __webpack_require__.o(definition, key) &&
                    !__webpack_require__.o(exports, key)
                ) {
                    /******/ Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key],
                    });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) =>
            Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module',
                });
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true,
            });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = __webpack_require__('./index.js');// eslint-disable-line no-unused-vars
    /******/
    /******/
})();
