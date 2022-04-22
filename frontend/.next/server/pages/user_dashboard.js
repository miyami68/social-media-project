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
exports.id = "pages/user_dashboard";
exports.ids = ["pages/user_dashboard"];
exports.modules = {

/***/ "./context/authlog.js":
/*!****************************!*\
  !*** ./context/authlog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setstate(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setstate\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\context\\\\authlog.js\",\n        lineNumber: 21,\n        columnNumber: 8\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGhsb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNiO0FBRXJDLEtBQUssQ0FBQ0ksV0FBVyxpQkFBR0Qsb0RBQWE7QUFDakMsS0FBSyxDQUFFRSxZQUFZLElBQUcsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFDLEdBQUksQ0FBQztJQUdoQyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLENBQUM7UUFDaENPLElBQUksRUFBQyxDQUFDLENBQUM7UUFDUEMsS0FBSyxFQUFDLENBQUU7SUFDWixDQUFDO0lBRUhULGdEQUFTLEtBQUssQ0FBQztRQUVYTyxRQUFRLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU07SUFFMUQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBR0FYLFdBQVcsQ0FBQ1ksUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQ1Y7WUFBQUEsS0FBSztZQUFFQyxRQUFRO1FBQUEsQ0FBQztrQkFDekNGLFFBQVE7Ozs7OztBQU1wQixDQUFDO0FBQytCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb250ZXh0L2F1dGhsb2cuanM/ZWRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0ICBVc2VyUHJvdmlkZXIgPSh7Y2hpbGRyZW59KT0+IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgIHVzZXI6e30sXHJcbiAgICAgICAgIHRva2VuOlwiXCJcclxuICAgICB9KVxyXG4gICBcclxuICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgc2V0c3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcclxuICAgKTsgXHJcbiAgIH0sW10pXHJcbiAgcmV0dXJuICAoXHJcbiAgXHJcbiAgICAgICBcclxuICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlICxzZXRzdGF0ZV19PlxyXG4gICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICAgICBcclxuXHJcbiAgKVxyXG59XHJcbmV4cG9ydCB7VXNlclByb3ZpZGVyLFVzZXJDb250ZXh0fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRzdGF0ZSIsInVzZXIiLCJ0b2tlbiIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/authlog.js\n");

/***/ }),

/***/ "./pages/user_dashboard.js":
/*!*********************************!*\
  !*** ./pages/user_dashboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n/* harmony import */ var _privacy_user_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privacy/user_dashboard */ \"./privacy/user_dashboard.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Dashboard = ()=>{\n    const { 0: state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_privacy_user_dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"User Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyX2Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0c7QUFDQztBQUNWO0FBRXZDLEtBQUssQ0FBQ0ssU0FBUyxPQUFTLENBQUM7SUFDdkIsS0FBSyxNQUFFQyxLQUFLLE1BQUlOLGlEQUFVLENBQUNFLHlEQUFXO0lBQ3RDLEtBQUssQ0FBQ0ssTUFBTSxHQUFHSCxzREFBUztJQUV4QixNQUFNLDZFQUNIRCwrREFBUzs4RkFDUEssQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVztrR0FDdkJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFLO3NHQUNqQkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQUs7MEdBQ2pCQyxDQUFFO2tDQUFDLENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCLENBQUM7QUFFRCxpRUFBZUwsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy91c2VyX2Rhc2hib2FyZC5qcz80Y2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhsb2dcIjtcclxuaW1wb3J0IFVzZXJSb3V0ZSBmcm9tICcuLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJSb3V0ZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGgxPlVzZXIgRGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVXNlclJvdXRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcblxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiVXNlclJvdXRlIiwidXNlUm91dGVyIiwiRGFzaGJvYXJkIiwic3RhdGUiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user_dashboard.js\n");

/***/ }),

/***/ "./privacy/user_dashboard.js":
/*!***********************************!*\
  !*** ./privacy/user_dashboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n\n\n\n\n\n\nconst UserRoute = ({ children  })=>{\n    const { 0: ok , 1: setOk  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { 0: state  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (state && state.token) getCurrentUser();\n    }, [\n        state && state.token\n    ]);\n    const getCurrentUser = async ()=>{\n        try {\n            // make sure to send token in headers\n            // else you will see flickering page with non-stop api requests\n            // because home page is trying to redirect to login\n            // login will redirect back to home because user is logged in\n            let { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${\"http://localhost:5000/api\"}/current_user`, {\n                headers: {\n                    Authorization: `Bearers ${state.token}`\n                }\n            });\n            console.log(\"DATA getCurrent_user\", data);\n            if (data) setOk(true);\n        } catch (err) {\n            router.push(\"/login\");\n        }\n    };\n     false && 0;\n    return !ok ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-content-center display-1 text-primary p-5\"\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\privacy\\\\user_dashboard.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRoute);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDOUI7QUFDYztBQUNTO0FBQ0E7QUFFaEQsS0FBSyxDQUFDTyxTQUFTLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDbkMsS0FBSyxNQUFFQyxFQUFFLE1BQUVDLEtBQUssTUFBSVQsK0NBQVEsQ0FBQyxLQUFLO0lBRWxDLEtBQUssQ0FBQ1UsTUFBTSxHQUFHUCxzREFBUztJQUN4QixLQUFLLE1BQUVRLEtBQUssTUFBSVYsaURBQVUsQ0FBQ0kseURBQVc7SUFFdENOLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsRUFBRVksS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsY0FBYztJQUMxQyxDQUFDLEVBQUUsQ0FBQ0Y7UUFBQUEsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQUs7SUFBQSxDQUFDO0lBRXpCLEtBQUssQ0FBQ0MsY0FBYyxhQUFlLENBQUM7UUFDbEMsR0FBRyxDQUFDLENBQUM7WUFDSCxFQUFxQztZQUNyQyxFQUErRDtZQUMvRCxFQUFtRDtZQUNuRCxFQUE2RDtZQUM3RCxHQUFHLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ1osZ0RBQVMsSUFBSWMsMkJBQTJCLENBQUMsYUFBYSxHQUFHLENBQUM7Z0JBQzdFRyxPQUFPLEVBQUMsQ0FBQztvQkFDUEMsYUFBYSxHQUFFLFFBQVEsRUFBRVQsS0FBSyxDQUFDQyxLQUFLO2dCQUN0QyxDQUFDO1lBQ0gsQ0FBQztZQUNEUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFzQix1QkFBRVIsSUFBSTtZQUN4QyxFQUFFLEVBQUVBLElBQUksRUFBRUwsS0FBSyxDQUFDLElBQUk7UUFDdEIsQ0FBQyxDQUFDLEtBQUssRUFBRWMsR0FBRyxFQUFFLENBQUM7WUFDYmIsTUFBTSxDQUFDYyxJQUFJLENBQUMsQ0FBUTtRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUVEUixNQUMwQixJQUN4QlUsQ0FFUTtJQUVWLE1BQU0sRUFBRWxCLEVBQUUsK0VBQ1BKLDJEQUFZO1FBQ1h1QixJQUFJO1FBQ0pDLFNBQVMsRUFBQyxDQUEwRDs7Ozs7O2tCQUduRXJCLFFBQVE7O0FBRWYsQ0FBQztBQUVELGlFQUFlRCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3ByaXZhY3kvdXNlcl9kYXNoYm9hcmQuanM/YTc0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN5bmNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhsb2dcIjtcclxuXHJcbmNvbnN0IFVzZXJSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnRva2VuKSBnZXRDdXJyZW50VXNlcigpO1xyXG4gIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICBjb25zdCBnZXRDdXJyZW50VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBzZW5kIHRva2VuIGluIGhlYWRlcnNcclxuICAgICAgLy8gZWxzZSB5b3Ugd2lsbCBzZWUgZmxpY2tlcmluZyBwYWdlIHdpdGggbm9uLXN0b3AgYXBpIHJlcXVlc3RzXHJcbiAgICAgIC8vIGJlY2F1c2UgaG9tZSBwYWdlIGlzIHRyeWluZyB0byByZWRpcmVjdCB0byBsb2dpblxyXG4gICAgICAvLyBsb2dpbiB3aWxsIHJlZGlyZWN0IGJhY2sgdG8gaG9tZSBiZWNhdXNlIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9L2N1cnJlbnRfdXNlcmAsIHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246YEJlYXJlcnMgJHtzdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJEQVRBIGdldEN1cnJlbnRfdXNlclwiLCBkYXRhKTtcclxuICAgICAgaWYgKGRhdGEpIHNldE9rKHRydWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByb2Nlc3MuYnJvd3NlciAmJlxyXG4gICAgKCFzdGF0ZSB8fCAhc3RhdGUudG9rZW4pICYmXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICByZXR1cm4gIW9rID8gKFxyXG4gICAgPFN5bmNPdXRsaW5lZFxyXG4gICAgICBzcGluXHJcbiAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGRpc3BsYXktMSB0ZXh0LXByaW1hcnkgcC01XCJcclxuICAgIC8+XHJcbiAgKSA6IChcclxuICAgIDw+e2NoaWxkcmVufTwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUm91dGU7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImF4aW9zIiwidXNlUm91dGVyIiwiU3luY091dGxpbmVkIiwiVXNlckNvbnRleHQiLCJVc2VyUm91dGUiLCJjaGlsZHJlbiIsIm9rIiwic2V0T2siLCJyb3V0ZXIiLCJzdGF0ZSIsInRva2VuIiwiZ2V0Q3VycmVudFVzZXIiLCJkYXRhIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImVyciIsInB1c2giLCJicm93c2VyIiwic2V0VGltZW91dCIsInNwaW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./privacy/user_dashboard.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@ant-design/icons");

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
var __webpack_exports__ = (__webpack_exec__("./pages/user_dashboard.js"));
module.exports = __webpack_exports__;

})();