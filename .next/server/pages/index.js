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

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions_loginAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/loginAction */ \"./src/redux/actions/loginAction.js\");\n\n\n\n// test\n\n\n\nconst Home = ()=>{\n    var ref;\n    const { 0: state1 , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        userName: ''\n    });\n    const common = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.common\n    );\n    const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth\n    );\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const handleLogin = (userName)=>{\n        dispatch((0,_redux_actions_loginAction__WEBPACK_IMPORTED_MODULE_4__.login)(userName));\n    };\n    const handleChange = (e)=>{\n        setState({\n            userName: e.target.value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    \"Github user 조회 테스트\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"userName\",\n                        onChange: (e)=>handleChange(e)\n                    }, void 0, false, {\n                        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>handleLogin(state1.userName)\n                        ,\n                        children: \"로그인\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: common.isLoading && '로딩중'\n                    }, void 0, false, {\n                        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"name: \",\n                                    ((ref = auth.data) === null || ref === void 0 ? void 0 : ref.name) ? auth.data.name : '미설정 or 조회 실패'\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eden-onuii/Documents/_Comp/next.js-starter-kit/src/pages/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFFZTtBQUUzQyxFQUFPO0FBQzJDO0FBQ0k7QUFDRjtBQUdwRCxLQUFLLENBQUNRLElBQUksT0FBbUIsQ0FBQztRQTZDUEMsR0FBUztJQTNDOUIsS0FBSyxNQUFHQyxNQUFLLE1BQUVDLFFBQVEsTUFBS1IsK0NBQVEsQ0FBQyxDQUFDO1FBQ3BDUyxRQUFRLEVBQUUsQ0FBRTtJQUNkLENBQUM7SUFFRCxLQUFLLENBQUNDLE1BQU0sR0FBR1Isd0RBQVcsRUFBRUssS0FBZ0IsR0FBS0EsS0FBSyxDQUFDRyxNQUFNOztJQUM3RCxLQUFLLENBQUNKLElBQUksR0FBR0osd0RBQVcsRUFBRUssS0FBZ0IsR0FBS0EsS0FBSyxDQUFDRCxJQUFJOztJQUN6RCxLQUFLLENBQUNLLFFBQVEsR0FBR1Isd0RBQVc7SUFFNUIsS0FBSyxDQUFDUyxXQUFXLElBQUlILFFBQWdCLEdBQUssQ0FBQztRQUN6Q0UsUUFBUSxDQUFDUCxpRUFBSyxDQUFDSyxRQUFRO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUNJLFlBQVksSUFBSUMsQ0FBTSxHQUFLLENBQUM7UUFDaENOLFFBQVEsQ0FBQyxDQUFDO1lBQ1JDLFFBQVEsRUFBRUssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRGYsZ0RBQVMsS0FBTyxDQUFDLENBRWhCLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSGdCLENBQUc7UUFBQ0MsU0FBUyxFQUFFcEIseUVBQWdCOzt3RkFDN0JELGtEQUFJOztnR0FDRnVCLENBQUs7a0NBQUMsQ0FBZTs7Ozs7O2dHQUNyQkMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUE4Qjs7Ozs7O2dHQUM5REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBR3JDQyxDQUFJO2dCQUFDVCxTQUFTLEVBQUVwQixvRUFBVzs7b0JBQUUsQ0FFNUI7Z0dBQUM4QixDQUFLO3dCQUNKQyxJQUFJLEVBQUMsQ0FBTTt3QkFDWFAsSUFBSSxFQUFDLENBQVU7d0JBQ2ZRLFFBQVEsR0FBR2hCLENBQUMsR0FBS0QsWUFBWSxDQUFDQyxDQUFDOzs7Ozs7Z0dBRWhDaUIsQ0FBTTt3QkFBQ0YsSUFBSSxFQUFDLENBQVE7d0JBQUNHLE9BQU8sTUFBUXBCLFdBQVcsQ0FBQ0wsTUFBSyxDQUFDRSxRQUFROztrQ0FBRyxDQUFTOzs7Ozs7Z0dBRTFFd0IsQ0FBQztrQ0FBRXZCLE1BQU0sQ0FBQ3dCLFNBQVMsSUFBSSxDQUFXOzs7Ozs7Z0dBRWxDakIsQ0FBRzs4R0FDRGtCLENBQUU7a0hBQ0FDLENBQUU7O29DQUFDLENBQU07c0NBQUM5QixHQUFTLEdBQVRBLElBQUksQ0FBQytCLElBQUksY0FBVC9CLEdBQVMsS0FBVEEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxHQUFTLENBQUVnQixJQUFJLElBQUdoQixJQUFJLENBQUMrQixJQUFJLENBQUNmLElBQUksR0FBRyxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RSxDQUFDO0FBRUQsaUVBQWVqQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc3RhcnRlci8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG4vLyB0ZXN0XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9sb2dpbkFjdGlvbic7XG5pbXBvcnQge1Jvb3RTdGF0ZX0gZnJvbSBcIi4uL3JlZHV4L3Jvb3RSZWR1Y2VyXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IFsgc3RhdGUsIHNldFN0YXRlIF0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlck5hbWU6ICcnXG4gIH0pO1xuXG4gIGNvbnN0IGNvbW1vbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jb21tb24pO1xuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF1dGgpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAodXNlck5hbWU6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ2luKHVzZXJOYW1lKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldFN0YXRlKHtcbiAgICAgIHVzZXJOYW1lOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIEdpdGh1YiB1c2VyIOyhsO2ajCDthYzsiqTtirhcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ2luKHN0YXRlLnVzZXJOYW1lKX0+66Gc6re47J24PC9idXR0b24+XG5cbiAgICAgICAgPHA+e2NvbW1vbi5pc0xvYWRpbmcgJiYgJ+uhnOuUqeykkSd9PC9wPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPm5hbWU6IHthdXRoLmRhdGE/Lm5hbWUgPyBhdXRoLmRhdGEubmFtZSA6ICfrr7jshKTsoJUgb3Ig7KGw7ZqMIOyLpO2MqCd9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwibG9naW4iLCJIb21lIiwiYXV0aCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyTmFtZSIsImNvbW1vbiIsImRpc3BhdGNoIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJpc0xvYWRpbmciLCJ1bCIsImxpIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/redux/actions/loginAction.js":
/*!******************************************!*\
  !*** ./src/redux/actions/loginAction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _commonReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonReducer */ \"./src/redux/commonReducer.js\");\n\n\n\nconst authType = 'auth';\n// const requestData = {\n//   EMAIL_ID: email,\n//   PASSWORD: password,\n//   PLATFORM: 'WEB',\n// };\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(`${authType}/login`, async (request, { dispatch  })=>{\n    console.log(request);\n    dispatch((0,_commonReducer__WEBPACK_IMPORTED_MODULE_2__.setLoading)());\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()({\n            url: 'https://api.github.com/users/' + request,\n            method: 'get'\n        });\n        dispatch((0,_commonReducer__WEBPACK_IMPORTED_MODULE_2__.setLoading)());\n        return response;\n    } catch (error) {\n        dispatch((0,_commonReducer__WEBPACK_IMPORTED_MODULE_2__.setLoading)());\n        alert('조회 실패');\n        return error;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy9sb2dpbkFjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDMUI7QUFDb0I7QUFFN0MsS0FBSyxDQUFDRyxRQUFRLEdBQUcsQ0FBTTtBQUV2QixFQUF3QjtBQUN4QixFQUFxQjtBQUNyQixFQUF3QjtBQUN4QixFQUFxQjtBQUNyQixFQUFLO0FBRUUsS0FBSyxDQUFDQyxLQUFLLEdBQUdKLGtFQUFnQixJQUNoQ0csUUFBUSxDQUFDLE1BQU0sVUFDWEUsT0FBTyxFQUFFLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTztJQUNuQkMsUUFBUSxDQUFDSiwwREFBVTtJQUNuQixHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ08sUUFBUSxHQUFHLEtBQUssQ0FBQ1IsNENBQUssQ0FBQyxDQUFDO1lBQzVCUyxHQUFHLEVBQUUsQ0FBK0IsaUNBQUdMLE9BQU87WUFDOUNNLE1BQU0sRUFBRSxDQUFLO1FBRWYsQ0FBQztRQUVETCxRQUFRLENBQUNKLDBEQUFVO1FBQ25CLE1BQU0sQ0FBQ08sUUFBUTtJQUVqQixDQUFDLENBQUMsS0FBSyxFQUFFRyxLQUFLLEVBQUUsQ0FBQztRQUNmTixRQUFRLENBQUNKLDBEQUFVO1FBQ25CVyxLQUFLLENBQUMsQ0FBTztRQUNiLE1BQU0sQ0FBQ0QsS0FBSztJQUNkLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvcmVkdXgvYWN0aW9ucy9sb2dpbkFjdGlvbi5qcz84NjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nIH0gZnJvbSAnLi4vY29tbW9uUmVkdWNlcic7XG5cbmNvbnN0IGF1dGhUeXBlID0gJ2F1dGgnO1xuXG4vLyBjb25zdCByZXF1ZXN0RGF0YSA9IHtcbi8vICAgRU1BSUxfSUQ6IGVtYWlsLFxuLy8gICBQQVNTV09SRDogcGFzc3dvcmQsXG4vLyAgIFBMQVRGT1JNOiAnV0VCJyxcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIGAke2F1dGhUeXBlfS9sb2dpbmAsXG4gIGFzeW5jIChyZXF1ZXN0LCB7IGRpc3BhdGNoIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICAgIGRpc3BhdGNoKHNldExvYWRpbmcoKSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyByZXF1ZXN0LFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAvLyBkYXRhOiByZXF1ZXN0RGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKCkpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoKSk7XG4gICAgICBhbGVydCgn7KGw7ZqMIOyLpO2MqCcpO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfSxcbik7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwic2V0TG9hZGluZyIsImF1dGhUeXBlIiwibG9naW4iLCJyZXF1ZXN0IiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJ1cmwiLCJtZXRob2QiLCJlcnJvciIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/actions/loginAction.js\n");

/***/ }),

/***/ "./src/redux/commonReducer.js":
/*!************************************!*\
  !*** ./src/redux/commonReducer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commonSlice\": () => (/* binding */ commonSlice),\n/* harmony export */   \"setLoading\": () => (/* binding */ setLoading),\n/* harmony export */   \"setModal\": () => (/* binding */ setModal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    isLoading: false,\n    isOpen: false\n};\nconst commonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'common',\n    initialState,\n    reducers: {\n        setLoading: (state)=>{\n            state.isLoading = !state.isLoading;\n            console.log('isLoading', state.isLoading);\n        },\n        setModal: (state)=>{\n            state.isOpen = !state.isOpen;\n        }\n    }\n});\nconst { setLoading , setModal ,  } = commonSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commonSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvY29tbW9uUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFFOUMsS0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsU0FBUyxFQUFFLEtBQUs7SUFDaEJDLE1BQU0sRUFBRSxLQUFLO0FBQ2YsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsV0FBVyxHQUFHSiw2REFBVyxDQUFDLENBQUM7SUFDdENLLElBQUksRUFBRSxDQUFRO0lBQ2RKLFlBQVk7SUFDWkssUUFBUSxFQUFFLENBQUM7UUFDVEMsVUFBVSxHQUFHQyxLQUFLLEdBQUssQ0FBQztZQUN0QkEsS0FBSyxDQUFDTixTQUFTLElBQUlNLEtBQUssQ0FBQ04sU0FBUztZQUNsQ08sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFFRixLQUFLLENBQUNOLFNBQVM7UUFDMUMsQ0FBQztRQUNEUyxRQUFRLEdBQUdILEtBQUssR0FBSyxDQUFDO1lBQ3BCQSxLQUFLLENBQUNMLE1BQU0sSUFBSUssS0FBSyxDQUFDTCxNQUFNO1FBQzlCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQyxDQUFDLENBQ1pJLFVBQVUsR0FDVkksUUFBUSxJQUNWLENBQUMsR0FBR1AsV0FBVyxDQUFDUSxPQUFPO0FBRXZCLGlFQUFlUixXQUFXLENBQUNTLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLy4vc3JjL3JlZHV4L2NvbW1vblJlZHVjZXIuanM/N2VhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGlzT3BlbjogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb21tb24nLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0TG9hZGluZzogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSAhc3RhdGUuaXNMb2FkaW5nO1xuICAgICAgY29uc29sZS5sb2coJ2lzTG9hZGluZycsIHN0YXRlLmlzTG9hZGluZyk7XG4gICAgfSxcbiAgICBzZXRNb2RhbDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5pc09wZW4gPSAhc3RhdGUuaXNPcGVuO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc2V0TG9hZGluZyxcbiAgc2V0TW9kYWwsXG59ID0gY29tbW9uU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgY29tbW9uU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZyIsImlzT3BlbiIsImNvbW1vblNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0TG9hZGluZyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInNldE1vZGFsIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/commonReducer.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();