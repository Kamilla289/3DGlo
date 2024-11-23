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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_formMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formMain */ \"./modules/formMain.js\");\n/* harmony import */ var _modules_formFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/formFooter */ \"./modules/formFooter.js\");\n/* harmony import */ var _modules_formModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formModal */ \"./modules/formModal.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 november 2024')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_formFooter__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_formMain__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_formModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  const calcBlock = document.querySelectorAll('.calc-block > input')\r\n  calcBlock.forEach((input) => {\r\n    input.addEventListener('input', (event) => {\r\n      event.target.value = event.target.value.replace(/\\D+/, '');\r\n    });\r\n  })\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/formFooter.js":
/*!*******************************!*\
  !*** ./modules/formFooter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formFooter = () => {\r\n  const formText = document.getElementById('form2-name');\r\n  formText.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[А-ЯЁ\\s-]+$/i);\r\n  });\r\n  const formTextMessage = document.getElementById('form2-message');\r\n  formTextMessage.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[А-ЯЁ\\s-]+$/i);\r\n  });\r\n  const formEmail = document.getElementById('form2-email');\r\n  formEmail.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[A-Z\\d\\@\\-\\_\\.\\!\\~\\*\\']+$/i);\r\n  });\r\n  const formPhone = document.getElementById('form2-phone');\r\n  formPhone.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[0-9\\(\\)\\-]+$/);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formFooter);\n\n//# sourceURL=webpack:///./modules/formFooter.js?");

/***/ }),

/***/ "./modules/formMain.js":
/*!*****************************!*\
  !*** ./modules/formMain.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formMain = () => {\r\n  const formText = document.getElementById('form1-name');\r\n  formText.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[А-ЯЁ\\s-]+$/i);\r\n  });\r\n  const formEmail = document.getElementById('form1-email');\r\n  formEmail.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[A-Z\\d\\@\\-\\_\\.\\!\\~\\*\\']+$/i);\r\n  });\r\n  const formPhone = document.getElementById('form1-phone');\r\n  formPhone.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[0-9\\(\\)\\-]+$/);\r\n  });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formMain);\n\n//# sourceURL=webpack:///./modules/formMain.js?");

/***/ }),

/***/ "./modules/formModal.js":
/*!******************************!*\
  !*** ./modules/formModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formModal = () => {\r\n  const formText = document.getElementById('form3-name');\r\n  formText.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[А-ЯЁ\\s-]+$/i);\r\n  });\r\n  const formEmail = document.getElementById('form3-email');\r\n  formEmail.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[A-Z\\d\\@\\-\\_\\.\\!\\~\\*\\']+$/i);\r\n  });\r\n  const formPhone = document.getElementById('form3-phone');\r\n  formPhone.addEventListener('input', (event) => {\r\n    event.target.value = event.target.value.match(/^[0-9\\(\\)\\-]+$/);\r\n  });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formModal);\n\n//# sourceURL=webpack:///./modules/formModal.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu')\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  menuBtn.addEventListener('click', handleMenu);\r\n  closeBtn.addEventListener('click', handleMenu);\r\n\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const modal = document.querySelector('.popup');\r\n  const closeBtn = document.querySelector('.popup-close');\r\n\r\n  let opacity = 0;\r\n  modal.style.opacity = opacity;\r\n\r\n\r\n  const fadeIn = () => {\r\n    if (document.documentElement.clientWidth > 768) {\r\n      modal.style.display = 'block';\r\n      opacity += 0.1;\r\n      modal.style.opacity = opacity;\r\n\r\n      if(opacity < 1) {\r\n        requestAnimationFrame(fadeIn);\r\n      }\r\n    } else {\r\n      modal.style.display = 'block';\r\n      modal.style.opacity = 1;\r\n    }\r\n\r\n  };\r\n\r\n  const fadeOut = () => {\r\n    opacity -= 0.1;\r\n    modal.style.opacity = opacity;\r\n    if(opacity > 0) {\r\n      requestAnimationFrame(fadeOut);\r\n    } else {\r\n      modal.style.display = 'none';\r\n    };\r\n  };\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n    fadeIn();\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    fadeOut();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  console.log(deadline);\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const getTimeRemainig = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return {\r\n      timeRemaining,\r\n      hours,\r\n      minutes,\r\n      seconds\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    setInterval(() => {\r\n      let getTime = getTimeRemainig('22 november 2024');\r\n      // Далее конструкция, замещающая if/else, где if=?, а else=:\r\n      timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\r\n      timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\r\n      timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\r\n\r\n      if (getTime.timeRemaining <= 0) {\r\n        clearInterval(updateClock);\r\n        timerHours.textContent = '00';\r\n        timerMinutes.textContent = '00';\r\n        timerSeconds.textContent = '00';\r\n      }\r\n    }, 1000);\r\n  };\r\n\r\n  updateClock()\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;