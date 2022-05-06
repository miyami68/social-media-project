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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setstate(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    const token = state && state.token ? state.token : ' ';\n    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.baseURL) = \"http://localhost:5000/api\";\n    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    axios__WEBPACK_IMPORTED_MODULE_3___default().interceptors.response.use(function(response) {\n        // Do something before request is sent\n        return response;\n    }, function(error) {\n        // Do something with request error\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setstate(null);\n            window.localStorage.removeItem(\"auth\");\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setstate\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\context\\\\authlog.js\",\n        lineNumber: 43,\n        columnNumber: 8\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGhsb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDYjtBQUNMO0FBQ047QUFDMUIsS0FBSyxDQUFDTSxXQUFXLGlCQUFHSCxvREFBYTtBQUNqQyxLQUFLLENBQUVJLFlBQVksSUFBRyxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSSxDQUFDO0lBR2hDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlSLCtDQUFRLENBQUMsQ0FBQztRQUNoQ1MsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNQQyxLQUFLLEVBQUMsQ0FBRTtJQUNaLENBQUM7SUFFSFgsZ0RBQVMsS0FBSyxDQUFDO1FBRVhTLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtJQUcxRCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osS0FBSyxDQUFDTCxLQUFLLEdBQUdILEtBQUssSUFBRUEsS0FBSyxDQUFDRyxLQUFLLEdBQUNILEtBQUssQ0FBQ0csS0FBSyxHQUFDLENBQUc7SUFDaERQLCtEQUFzQixHQUFDZSwyQkFBMkI7SUFDbERmLG9GQUE4QyxJQUFJLE9BQU8sRUFBRU8sS0FBSztJQUdoRVAsc0VBQStCLENBQzlCLFFBQVEsQ0FBRXFCLFFBQVEsRUFBRSxDQUFDO1FBQ25CLEVBQXNDO1FBQ3RDLE1BQU0sQ0FBQ0EsUUFBUTtJQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFFRSxLQUFLLEVBQUUsQ0FBQztRQUNoQixFQUFrQztRQUNsQyxHQUFHLENBQUNDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRixRQUFRO1FBQ3hCLEVBQUUsRUFBRUcsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBS0YsR0FBRyxDQUFDRSxNQUFNLENBQUNDLGdCQUFnQixFQUFFLENBQUM7WUFDckV0QixRQUFRLENBQUMsSUFBSTtZQUNiSyxNQUFNLENBQUNDLFlBQVksQ0FBQ2lCLFVBQVUsQ0FBQyxDQUFNO1lBQ3JDN0IsdURBQVcsQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsTUFBTSw2RUFHQUUsV0FBVyxDQUFDNkIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQzNCO1lBQUFBLEtBQUs7WUFBRUMsUUFBUTtRQUFBLENBQUM7a0JBQ3pDRixRQUFROzs7Ozs7QUFNcEIsQ0FBQztBQUMrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29udGV4dC9hdXRobG9nLmpzP2VkZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyAgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgIFVzZXJQcm92aWRlciA9KHtjaGlsZHJlbn0pPT4ge1xyXG4gICAgXHJcbiAgICBcclxuICAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAgdXNlcjp7fSxcclxuICAgICAgICAgdG9rZW46XCJcIlxyXG4gICAgIH0pXHJcbiAgIFxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBzZXRzdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKVxyXG4gICAgICAgXHJcbiAgICk7IFxyXG4gICB9LFtdKVxyXG4gICBjb25zdCB0b2tlbiA9IHN0YXRlJiZzdGF0ZS50b2tlbj9zdGF0ZS50b2tlbjonICc7XHJcbiAgIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsgJ0F1dGhvcml6YXRpb24nXT0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgXHJcblxyXG4gICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyBiZWZvcmUgcmVxdWVzdCBpcyBzZW50XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVxdWVzdCBlcnJvclxyXG4gICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEgJiYgcmVzLmNvbmZpZyAmJiAhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgc2V0c3RhdGUobnVsbCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuICAoXHJcbiAgXHJcbiAgICAgICBcclxuICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlICxzZXRzdGF0ZV19PlxyXG4gICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICAgICBcclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCB7VXNlclByb3ZpZGVyLFVzZXJDb250ZXh0fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJSb3V0ZXIiLCJheGlvcyIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldHN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJyZW1vdmVJdGVtIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/authlog.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n\n\n\nconst Home = ()=>{\n    const { 0: state , 1: setstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col\",\n                children: [\n                    JSON.stringify(state),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \" home page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ2M7QUFDaEQsS0FBSyxDQUFDRSxJQUFJLE9BQU0sQ0FBQztJQUNmLEtBQUssTUFBRUMsS0FBSyxNQUFDQyxRQUFRLE1BQUVKLGlEQUFVLENBQUNDLHlEQUFXO0lBQzdDLE1BQU0sNkVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVc7OEZBRXZCRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO2tHQUNiRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBSzs7b0JBSWpCQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsS0FBSztnR0FFdEJNLENBQUU7a0NBQUMsQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMxQixDQUFDO0FBRUQsaUVBQWVQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhsb2dcIjtcclxuY29uc3QgSG9tZT0oKT0+IHtcclxuICBjb25zdCBbc3RhdGUsc2V0c3RhdGVdPXVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZXMuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPiAqL31cclxuICAgICAgICAgICAgIHsvKiB7c3RhdGUudG9rZW4gfSAqL31cclxuICAgICAgICAgICAgIHsvKiB7IHN0YXRlLnVzZXJ9ICovfXtcclxuICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc3RhdGUpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxoMT4gaG9tZSBwYWdlPC9oMT4gIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuIFxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiSG9tZSIsInN0YXRlIiwic2V0c3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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