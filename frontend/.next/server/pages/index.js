"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/authlog.js":
/*!****************************!*\
  !*** ./context/authlog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setstate(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setstate\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\context\\\\authlog.js\",\n        lineNumber: 21,\n        columnNumber: 8\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGhsb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNiO0FBRXJDLEtBQUssQ0FBQ0ksV0FBVyxpQkFBR0Qsb0RBQWE7QUFDakMsS0FBSyxDQUFFRSxZQUFZLElBQUcsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFDLEdBQUksQ0FBQztJQUdoQyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLENBQUM7UUFDaENPLElBQUksRUFBQyxDQUFDLENBQUM7UUFDUEMsS0FBSyxFQUFDLENBQUU7SUFDWixDQUFDO0lBRUhULGdEQUFTLEtBQUssQ0FBQztRQUVYTyxRQUFRLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU07SUFFMUQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBR0FYLFdBQVcsQ0FBQ1ksUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQ1Y7WUFBQUEsS0FBSztZQUFFQyxRQUFRO1FBQUEsQ0FBQztrQkFDekNGLFFBQVE7Ozs7OztBQU1wQixDQUFDO0FBQytCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb250ZXh0L2F1dGhsb2cuanM/ZWRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0ICBVc2VyUHJvdmlkZXIgPSh7Y2hpbGRyZW59KT0+IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgIHVzZXI6e30sXHJcbiAgICAgICAgIHRva2VuOlwiXCJcclxuICAgICB9KVxyXG4gICBcclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgc2V0c3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcclxuICAgKTsgXHJcbiAgIH0sW10pXHJcbiAgcmV0dXJuICAoXHJcbiAgXHJcbiAgICAgICBcclxuICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlICxzZXRzdGF0ZV19PlxyXG4gICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICAgICBcclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCB7VXNlclByb3ZpZGVyLFVzZXJDb250ZXh0fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRzdGF0ZSIsInVzZXIiLCJ0b2tlbiIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/authlog.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n\n\n\nconst Home = ()=>{\n    const { 0: state , 1: setstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col\",\n                children: [\n                    JSON.stringify(state),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \" home page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ2M7QUFDaEQsS0FBSyxDQUFDRSxJQUFJLE9BQU0sQ0FBQztJQUNmLEtBQUssTUFBRUMsS0FBSyxNQUFDQyxRQUFRLE1BQUVKLGlEQUFVLENBQUNDLHlEQUFXO0lBQzdDLE1BQU0sNkVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVc7OEZBRXZCRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO2tHQUNiRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBSzs7b0JBSWpCQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsS0FBSztnR0FFdEJNLENBQUU7a0NBQUMsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMxQixDQUFDO0FBRUQsaUVBQWVQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhsb2dcIjtcclxuY29uc3QgSG9tZT0oKT0+IHtcclxuICBjb25zdCBbc3RhdGUsc2V0c3RhdGVdPXVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZXMuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPiAqL31cclxuICAgICAgICAgICAgIHsvKiB7c3RhdGUudG9rZW4gfSAqL31cclxuICAgICAgICAgICAgIHsvKiB7IHN0YXRlLnVzZXJ9ICovfXtcclxuICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RhdGUpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxoMT4gaG9tZSBwYWdlPC9oMT4gIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuIFxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiSG9tZSIsInN0YXRlIiwic2V0c3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();