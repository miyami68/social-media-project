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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setstate(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    const token = state && state.token ? state.token : ' ';\n    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.baseURL) = \"http://localhost:5000/api\";\n    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    axios__WEBPACK_IMPORTED_MODULE_3___default().interceptors.response.use(function(response) {\n        // Do something before request is sent\n        return response;\n    }, function(error) {\n        // Do something with request error\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setstate(null);\n            window.localStorage.removeItem(\"auth\");\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setstate\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\context\\\\authlog.js\",\n        lineNumber: 43,\n        columnNumber: 8\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGhsb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDYjtBQUNMO0FBQ047QUFDMUIsS0FBSyxDQUFDTSxXQUFXLGlCQUFHSCxvREFBYTtBQUNqQyxLQUFLLENBQUVJLFlBQVksSUFBRyxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSSxDQUFDO0lBR2hDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlSLCtDQUFRLENBQUMsQ0FBQztRQUNoQ1MsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNQQyxLQUFLLEVBQUMsQ0FBRTtJQUNaLENBQUM7SUFFSFgsZ0RBQVMsS0FBSyxDQUFDO1FBRVhTLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtJQUcxRCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osS0FBSyxDQUFDTCxLQUFLLEdBQUdILEtBQUssSUFBRUEsS0FBSyxDQUFDRyxLQUFLLEdBQUNILEtBQUssQ0FBQ0csS0FBSyxHQUFDLENBQUc7SUFDaERQLCtEQUFzQixHQUFDZSwyQkFBMkI7SUFDbERmLG9GQUE4QyxJQUFJLE9BQU8sRUFBRU8sS0FBSztJQUdoRVAsc0VBQStCLENBQzlCLFFBQVEsQ0FBRXFCLFFBQVEsRUFBRSxDQUFDO1FBQ25CLEVBQXNDO1FBQ3RDLE1BQU0sQ0FBQ0EsUUFBUTtJQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFFRSxLQUFLLEVBQUUsQ0FBQztRQUNoQixFQUFrQztRQUNsQyxHQUFHLENBQUNDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRixRQUFRO1FBQ3hCLEVBQUUsRUFBRUcsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBS0YsR0FBRyxDQUFDRSxNQUFNLENBQUNDLGdCQUFnQixFQUFFLENBQUM7WUFDckV0QixRQUFRLENBQUMsSUFBSTtZQUNiSyxNQUFNLENBQUNDLFlBQVksQ0FBQ2lCLFVBQVUsQ0FBQyxDQUFNO1lBQ3JDN0IsdURBQVcsQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsTUFBTSw2RUFHQUUsV0FBVyxDQUFDNkIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQzNCO1lBQUFBLEtBQUs7WUFBRUMsUUFBUTtRQUFBLENBQUM7a0JBQ3pDRixRQUFROzs7Ozs7QUFNcEIsQ0FBQztBQUMrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29udGV4dC9hdXRobG9nLmpzP2VkZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyAgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgIFVzZXJQcm92aWRlciA9KHtjaGlsZHJlbn0pPT4ge1xyXG4gICAgXHJcbiAgICBcclxuICAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAgdXNlcjp7fSxcclxuICAgICAgICAgdG9rZW46XCJcIlxyXG4gICAgIH0pXHJcbiAgIFxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICBzZXRzdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKVxyXG5cclxuICAgKTsgXHJcbiAgIH0sW10pXHJcbiAgIGNvbnN0IHRva2VuID0gc3RhdGUmJnN0YXRlLnRva2VuP3N0YXRlLnRva2VuOicgJztcclxuICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1wcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEk7XHJcbiAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyAnQXV0aG9yaXphdGlvbiddPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICBcclxuXHJcbiAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIGJlZm9yZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXF1ZXN0IGVycm9yXHJcbiAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAgICAgICBzZXRzdGF0ZShudWxsKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gIChcclxuICBcclxuICAgICAgIFxyXG4gICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUgLHNldHN0YXRlXX0+XHJcbiAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG5cclxuICAgICAgIFxyXG5cclxuICApXHJcbn1cclxuZXhwb3J0IHtVc2VyUHJvdmlkZXIsVXNlckNvbnRleHR9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIlJvdXRlciIsImF4aW9zIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwic2V0c3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/authlog.js\n");

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