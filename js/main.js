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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _img_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/1.png */ \"./img/1.png\");\n/* harmony import */ var _img_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/корзина.svg */ \"./img/корзина.svg\");\n\n\n\n\nvar posts = [];\nvar files = [];\nvar json = localStorage;\n\nif (json.getItem('post') !== null) {\n  var el = JSON.parse(json.getItem('post'));\n  el.forEach(function (val) {\n    return posts.push(val);\n  });\n  render();\n}\n\nvar img = [];\nvar form = document.querySelector('form').addEventListener('submit', function (e) {\n  e.preventDefault();\n  var title = e.target.querySelector('.form__title');\n  var name = e.target.querySelector('.form__name');\n  var text = e.target.querySelector('.form__text');\n\n  if (validation(name, '#name-error') && validation(title, '#title-error') && validation(text, '#text-error')) {\n    var date = new Date();\n    var obj = {\n      name: name.value,\n      title: title.value,\n      text: text.value,\n      img: img.length < 1 ? '' : img,\n      date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, -3),\n      id: Date.now()\n    };\n    clearInput(title, name, text);\n    posts.push(obj);\n    var jsonObj = JSON.stringify(posts);\n    console.log(jsonObj);\n    json.setItem('post', jsonObj);\n    render();\n  }\n});\n\nfunction clearInput() {\n  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {\n    input[_key] = arguments[_key];\n  }\n\n  input.forEach(function (val) {\n    return val.value = '';\n  });\n}\n\ndocument.body.querySelector('#file').addEventListener('click', function (e) {\n  e.preventDefault();\n  document.querySelector('.form__file').click();\n});\ndocument.querySelector('.form__file').addEventListener('change', changeHandler);\nvar closeImg = [];\n\nfunction changeHandler(event) {\n  files = Array.from(event.target.files);\n  var preview = document.querySelector('.form__imgs');\n\n  if (!event.target.files.length) {\n    return;\n  }\n\n  img = [];\n  files = Array.from(event.target.files);\n  preview.innerHTML = '';\n  files.forEach(function (file) {\n    if (!file.type.match('image')) {\n      return;\n    }\n\n    var reader = new FileReader();\n\n    reader.onload = function (ev) {\n      var src = ev.target.result;\n      var html = \"\\n            <div class=\\\"form__img-item\\\">\\n                <div class=\\\"form__close\\\">&#10008;</div>\\n                <img src=\\\"\".concat(src, \"\\\" alt=\\\"\").concat(file.name, \"\\\" />\\n            </div>\\n            \\n            \");\n      preview.innerHTML += html;\n      img.push(src);\n      closeImg.push(preview);\n      closeImg.forEach(function (el) {\n        el.addEventListener('click', function (e) {\n          if (e.target.closest('.form__close')) {\n            e.target.parentNode.remove();\n            delete closeImg[el];\n          }\n        });\n      });\n    };\n\n    reader.readAsDataURL(file);\n  });\n  return img;\n}\n\nfunction validation(input, id) {\n  var valid = false;\n  var notValid = ['нигер', 'нигга', 'суицид', 'героин', 'гашиш'];\n  var error = document.querySelector(id);\n  error.style.opacity = '1';\n\n  function validArr() {\n    for (var index = 0; index < notValid.length; index++) {\n      var _el = notValid[index];\n\n      if (input.value.toLowerCase().indexOf(_el) != -1) {\n        valid = false;\n        break;\n      } else {\n        valid = true;\n      }\n    }\n\n    return valid;\n  }\n\n  if (input.value.length == 0) {\n    error.style.opacity = '1';\n    error.innerHTML = 'Заполните это поле';\n    valid = false;\n  } else if (!validArr()) {\n    error.style.opacity = '1';\n    error.innerHTML = 'Некоторые слова запрещены в нашем списке';\n    valid = false;\n  } else {\n    error.style.opacity = '0';\n    error.innerHTML = '';\n    valid = true;\n  }\n\n  return valid;\n}\n\nfunction render() {\n  document.querySelector('.post__items').innerHTML = '';\n\n  if (!posts.length) {\n    document.querySelector('.post__items').innerHTML = '<div class=\"empty\">Вы не выложили ни одного поста :(</div>';\n  }\n\n  posts.map(function (el) {\n    return document.querySelector('.post__items').innerHTML += \"\\n            <div class=\\\"post__item item\\\" data-id=\\\"\".concat(el.id, \"\\\">\\n                <div class=\\\"item__trash\\\"><img src=\\\"\").concat(_img_svg__WEBPACK_IMPORTED_MODULE_3__, \"\\\"/></div>\\n                <div class=\\\"item__name\\\">&nbsp;\").concat(el.name, \"</div>\\n                <div class=\\\"item__title\\\">&nbsp;\").concat(el.title, \"</div>\\n                <div class=\\\"item__text\\\">\\n                    &nbsp;\").concat(el.text, \"\\n                </div>\\n                <div class=\\\"item__img\\\">\\n                    \").concat(el.img.length < 1 ? '' : el.img.map(function (val) {\n      return \"<img data-src=\\\"\".concat(val, \"\\\" height=\\\"100\\\" src=\\\"\").concat(_img_1_png__WEBPACK_IMPORTED_MODULE_2__, \"\\\"/>\");\n    }).join(''), \"\\n                </div>\\n                <div class=\\\"item__data\\\">\\n                    \").concat(el.date, \"\\n                </div>\\n            </div>\\n        \");\n  }).join('');\n  document.querySelector('.form__imgs').innerHTML = '';\n  var images = document.querySelectorAll('.item__img img');\n  var options = {\n    root: null,\n    rootMargin: '0px',\n    treshold: 0.1\n  };\n  var observer = new IntersectionObserver(handleImg, options);\n  images.forEach(function (img) {\n    observer.observe(img);\n  });\n}\n\nfunction handleImg(myImg, observer) {\n  myImg.forEach(function (myImgSingle) {\n    if (myImgSingle.intersectionRatio > 0) {\n      loadImage(myImgSingle.target);\n    }\n  });\n}\n\nfunction loadImage(image) {\n  image.src = image.dataset.src;\n  image.removeAttribute('height');\n}\n\ndocument.querySelector('.post__items').addEventListener('click', function (e) {\n  if (e.target.closest('.item__trash')) {\n    e.target.closest('.item').remove();\n    posts = posts.filter(function (val) {\n      return val.id !== +e.target.closest('.item').dataset.id;\n    });\n    var jsonObj = JSON.stringify(posts);\n    localStorage.setItem('post', jsonObj);\n    render();\n  }\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Create Post</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header>\\r\\n        <div class=\\\"header__logo\\\">Posts</div>\\r\\n    </header>\\r\\n\\r\\n    <main>\\r\\n        <form class=\\\"form\\\">\\r\\n            <input type=\\\"text\\\" class=\\\"form__name\\\" placeholder=\\\"Введите свое имя\\\">\\r\\n            <span class=\\\"form__error\\\" id=\\\"name-error\\\">.</span>\\r\\n            <input type=\\\"text\\\" class=\\\"form__title\\\" placeholder=\\\"Введите название поста\\\">\\r\\n            <span class=\\\"form__error\\\" id=\\\"title-error\\\">.</span>\\r\\n            <textarea cols=\\\"30\\\" rows=\\\"10\\\" class=\\\"form__text\\\" placeholder=\\\"Напишите пост\\\"></textarea>\\r\\n            <span class=\\\"form__error\\\" id=\\\"text-error\\\">.</span>\\r\\n            <button type=\\\"button\\\" id=\\\"file\\\">Загрузить изображения</button>\\r\\n            <div class=\\\"form__imgs\\\"></div>\\r\\n            <input type=\\\"file\\\" multiple=\\\"true\\\" class=\\\"form__file\\\">\\r\\n            <button type=\\\"submit\\\">Добавить пост</button>\\r\\n        </form>\\r\\n\\r\\n        <div class=\\\"posts\\\">\\r\\n            <h1>Посты</h1>\\r\\n            <div class=\\\"post__items\\\">\\r\\n                \\r\\n            </div>\\r\\n        </div>\\r\\n    </main>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.scss?");

/***/ }),

/***/ "./img/корзина.svg":
/*!*************************!*\
  !*** ./img/корзина.svg ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjcyOS44MzdweCIgaGVpZ2h0PSI3MjkuODM4cHgiIHZpZXdCb3g9IjAgMCA3MjkuODM3IDcyOS44MzgiIGZpbGw9InJlZCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzI5LjgzNyA3MjkuODM4OyINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBkPSJNNTg5LjE5MywyMjIuMDRjMC02LjI5Niw1LjEwNi0xMS40MDQsMTEuNDAyLTExLjQwNFM2MTIsMjE1Ljc2Nyw2MTIsMjIyLjA0djQzNy40NzZjMCwxOS4zMTQtNy45MzYsMzYuODk2LTIwLjY3LDQ5LjY1Mw0KCQkJCWMtMTIuNzMzLDEyLjczNC0zMC4zMzksMjAuNjY5LTQ5LjY1MywyMC42NjlIMTg4LjE2MmMtMTkuMzE1LDAtMzYuOTQzLTcuOTM1LTQ5LjY1NC0yMC42NjkNCgkJCQljLTEyLjczNC0xMi43MzQtMjAuNjY5LTMwLjMxMy0yMC42NjktNDkuNjUzVjIyMi4wNGMwLTYuMjk2LDUuMTA4LTExLjQwNCwxMS40MDMtMTEuNDA0YzYuMjk2LDAsMTEuNDA0LDUuMTMxLDExLjQwNCwxMS40MDQNCgkJCQl2NDM3LjQ3NmMwLDEzLjAyLDUuMzcsMjQuOTIyLDEzLjk3LDMzLjUyMWM4LjYsOC42MDEsMjAuNTAzLDEzLjk5MywzMy41MjIsMTMuOTkzaDM1My41MTdjMTMuMDE5LDAsMjQuODk2LTUuMzk0LDMzLjQ5OC0xMy45OTMNCgkJCQljOC42MjQtOC42MjQsMTMuOTkyLTIwLjUwMywxMy45OTItMzMuNDk4VjIyMi4wNEg1ODkuMTkzeiIvPg0KCQkJPHBhdGggZD0iTTI3OS44NjYsNjMwLjA1NmMwLDYuMjk2LTUuMTA4LDExLjQwMy0xMS40MDQsMTEuNDAzcy0xMS40MDQtNS4xMDctMTEuNDA0LTExLjQwM3YtNDA1LjA3DQoJCQkJYzAtNi4yOTYsNS4xMDgtMTEuNDA0LDExLjQwNC0xMS40MDRzMTEuNDA0LDUuMTA4LDExLjQwNCwxMS40MDRWNjMwLjA1NnoiLz4NCgkJCTxwYXRoIGQ9Ik0zNzYuMzIzLDYzMC4wNTZjMCw2LjI5Ni01LjEwNywxMS40MDMtMTEuNDAzLDExLjQwM3MtMTEuNDA0LTUuMTA3LTExLjQwNC0xMS40MDN2LTQwNS4wNw0KCQkJCWMwLTYuMjk2LDUuMTA4LTExLjQwNCwxMS40MDQtMTEuNDA0czExLjQwMyw1LjEwOCwxMS40MDMsMTEuNDA0VjYzMC4wNTZ6Ii8+DQoJCQk8cGF0aCBkPSJNNDcyLjgwMyw2MzAuMDU2YzAsNi4yOTYtNS4xMDYsMTEuNDAzLTExLjQwMiwxMS40MDNjLTYuMjk3LDAtMTEuNDA0LTUuMTA3LTExLjQwNC0xMS40MDN2LTQwNS4wNw0KCQkJCWMwLTYuMjk2LDUuMTA3LTExLjQwNCwxMS40MDQtMTEuNDA0YzYuMjk2LDAsMTEuNDAyLDUuMTA4LDExLjQwMiwxMS40MDRWNjMwLjA1Nkw0NzIuODAzLDYzMC4wNTZ6Ii8+DQoJCQk8cGF0aCBkPSJNMjczLjIxNCw3MC4zMjNjMCw2LjI5Ni01LjEwOCwxMS40MDQtMTEuNDA0LDExLjQwNGMtNi4yOTUsMC0xMS40MDMtNS4xMDgtMTEuNDAzLTExLjQwNA0KCQkJCWMwLTE5LjM2Myw3LjkxMS0zNi45NDMsMjAuNjQ2LTQ5LjY3N0MyODMuNzg3LDcuOTExLDMwMS4zNjgsMCwzMjAuNzMsMGg4OC4zNzljMTkuMzM5LDAsMzYuOTIsNy45MzUsNDkuNjUyLDIwLjY2OQ0KCQkJCWMxMi43MzQsMTIuNzM0LDIwLjY3LDMwLjM2MiwyMC42Nyw0OS42NTRjMCw2LjI5Ni01LjEwNywxMS40MDQtMTEuNDAzLDExLjQwNHMtMTEuNDAzLTUuMTA4LTExLjQwMy0xMS40MDQNCgkJCQljMC0xMy4wMTktNS4zNjktMjQuOTIyLTEzLjk3LTMzLjUyMmMtOC42MDItOC42MDEtMjAuNTAzLTEzLjk5NC0zMy41MjItMTMuOTk0aC04OC4zNzhjLTEzLjA0MywwLTI0LjkyMiw1LjM2OS0zMy41NDYsMTMuOTcNCgkJCQlDMjc4LjU4Myw0NS40MDEsMjczLjIxNCw1Ny4yOCwyNzMuMjE0LDcwLjMyM3oiLz4NCgkJCTxwYXRoIGQ9Ik05OS43ODIsMTAzLjEwOGg1MzAuMjczYzExLjE4OSwwLDIxLjQwNSw0LjU4NSwyOC44MTgsMTEuOTk4bDAuMDQ3LDAuMDQ4YzcuNDEzLDcuNDEyLDExLjk5OCwxNy42MjgsMTEuOTk4LDI4LjgxOA0KCQkJCXYyOS40NmMwLDYuMjk1LTUuMTA4LDExLjQwMy0xMS40MDQsMTEuNDAzaC0wLjMwOUg3MC4zMjNjLTYuMjk2LDAtMTEuNDA0LTUuMTA4LTExLjQwNC0xMS40MDN2LTAuMjg1di0yOS4xNzUNCgkJCQljMC0xMS4xNjYsNC41ODUtMjEuNDA2LDExLjk5OC0yOC44MThsMC4wNDgtMC4wNDhDNzguMzc3LDEwNy42OTQsODguNjE2LDEwMy4xMDgsOTkuNzgyLDEwMy4xMDhMOTkuNzgyLDEwMy4xMDh6DQoJCQkJIE02MzAuMDU2LDEyNS45MTZIOTkuNzgyYy00Ljk2NSwwLTkuNTAzLDIuMDItMTIuNzM0LDUuMjc0TDg3LDEzMS4yMzhjLTMuMjU1LDMuMjMtNS4yNzQsNy43NDUtNS4yNzQsMTIuNzM0djE4LjA1Nmg1NjYuMzYxDQoJCQkJdi0xOC4wNTZjMC00Ljk2NS0yLjAyLTkuNTAzLTUuMjczLTEyLjczNGwtMC4wNDktMC4wNDhDNjM5LjUzNiwxMjcuOTM2LDYzNS4wMjEsMTI1LjkxNiw2MzAuMDU2LDEyNS45MTZ6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==\";\n\n//# sourceURL=webpack:///./img/%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0.svg?");

/***/ }),

/***/ "./img/1.png":
/*!*******************!*\
  !*** ./img/1.png ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./img/1.png\";\n\n//# sourceURL=webpack:///./img/1.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;