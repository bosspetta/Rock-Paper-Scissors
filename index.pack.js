/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var possibleHands = ["🪨", "📃", "✂️"];
var outcomes = [];
var hand1 = document.getElementById("hand1");
var hand2 = document.getElementById("hand2");
document.getElementById("btn").addEventListener('click', initialise);
var winnerText = document.getElementById("winner_text");

function initialise() {
    play(hand1);
    play(hand2);
    declareWinner();
}

function play(display) {
    hand1.classList.remove('winner', 'draw');
    hand2.classList.remove('winner', 'draw');
    winnerText.textContent = '';
    var randomNumber = Math.floor(Math.random() * 3);
    var currentHand = possibleHands[randomNumber];
    display.textContent = currentHand;
}

function declareWinner() {
    if (hand1.textContent === hand2.textContent) {
        winnerText.textContent = 'Tie my friends! 😰';
        hand1.classList.add('draw');
        hand2.classList.add('draw');
    } else if (hand1.textContent === "🪨" && hand2.textContent === "✂️") {
        hand1.classList.add('winner');
        winnerText.textContent = '🪨 wins! 🥳';
    } else if (hand1.textContent === "🪨" && hand2.textContent === "📃") {
        hand2.classList.add('winner');
        winnerText.textContent = '📃 wins! 🥳';
    } else if (hand1.textContent === '📃' && hand2.textContent === '🪨') {
        hand1.classList.add('winner');
        winnerText.textContent = '📃 wins! 🥳';
    } else if (hand1.textContent === '✂️' && hand2.textContent === '📃') {
        hand1.classList.add('winner');
        winnerText.textContent = '✂️ wins! 🥳';
    } else if (hand1.textContent === '✂️' && hand2.textContent === '🪨') {
        hand2.classList.add('winner');
        winnerText.textContent = '🪨 wins! 🥳';
    } else if (hand1.textContent === '📃' && hand2.textContent === '✂️') {
        hand2.classList.add('winner');
        winnerText.textContent = '✂️ wins! 🥳';
    }
}

/***/ })
/******/ ]);