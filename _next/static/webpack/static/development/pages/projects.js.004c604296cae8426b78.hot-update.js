webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./ui/Page.js":
/*!********************!*\
  !*** ./ui/Page.js ***!
  \********************/
/*! exports provided: Page, ContentPage, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPage", function() { return ContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./ui/theme.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./ui/Logo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/andreypopp/Workspace/arrow/site/ui/Page.js";







function Wrapper(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children);
}

function Page(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1667694852", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1667694852", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1667694852", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1667694852",
    css: "html,body{margin:0;background-color:".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, ";font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\", \"Segoe UI Symbol\";}.content p{color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";font-size:14pt;font-weight:500;margin-bottom:2em;}.content h2,.content h3,.content h4,.content h5{font-weight:900;color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";text-transform:uppercase;}a{color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";-webkit-text-decoration:none;text-decoration:none;}a:hover{background:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, ";-webkit-text-decoration:none;text-decoration:none;}.wrapper{margin:100px auto;padding:1em;}@media (min-width:800px){.wrapper{width:600px;padding:0em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvdy9zaXRlL3VpL1BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ5QixBQUlvQixBQVEwQixBQVNuQixBQU1tQixBQUlLLEFBS3RCLEFBS0osU0FwQ2dDLEdBcUNoQyxJQXBCcUIsRUFldkIsTUFNWixNQUxGLEtBekJpQixBQWVNLEtBSWMsVUFsQm5CLENBU1MsSUFmTixXQU9ELFNBa0JHLENBVHZCLFFBUkEsQ0FhQSx3Q0FLQSw2RUF6QkEiLCJmaWxlIjoiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL2Fycm93L3NpdGUvdWkvUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFBhZ2UocHJvcHM6IHsgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsXG4gICAgICAgICAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgcCB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgyLFxuICAgICAgICAuY29udGVudCBoMyxcbiAgICAgICAgLmNvbnRlbnQgaDQsXG4gICAgICAgIC5jb250ZW50IGg1IHtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8V3JhcHBlcj57cHJvcHMuY2hpbGRyZW59PC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250ZW50KHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRlbnRQYWdlKHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPExvZ28gd2lkdGg9ezEyMH0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRlbnQ+e3Byb3BzLmNoaWxkcmVufTwvQ29udGVudD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmFjayB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogOTAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2tcIj5cbiAgICAgICAgICAgIEdvIGJhY2tcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IHsgUGFnZSwgQ29udGVudFBhZ2UsIENvbnRlbnQgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrow/site/ui/Page.js */"),
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].bg],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, props.children));
}

function Content(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "content",
    style: props.style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, props.children);
}

function ContentPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "jsx-1399659501" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1399659501",
    css: ".header.jsx-1399659501{margin-bottom:5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvdy9zaXRlL3VpL1BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUcrQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL2Fycm93L3NpdGUvdWkvUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFBhZ2UocHJvcHM6IHsgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsXG4gICAgICAgICAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQgcCB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IGgyLFxuICAgICAgICAuY29udGVudCBoMyxcbiAgICAgICAgLmNvbnRlbnQgaDQsXG4gICAgICAgIC5jb250ZW50IGg1IHtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmd9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8V3JhcHBlcj57cHJvcHMuY2hpbGRyZW59PC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDb250ZW50KHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRlbnRQYWdlKHByb3BzOiB7IHN0eWxlPzogT2JqZWN0LCBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPExvZ28gd2lkdGg9ezEyMH0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbnRlbnQ+e3Byb3BzLmNoaWxkcmVufTwvQ29udGVudD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmFjayB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogOTAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2tcIj5cbiAgICAgICAgICAgIEdvIGJhY2tcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IHsgUGFnZSwgQ29udGVudFBhZ2UsIENvbnRlbnQgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrow/site/ui/Page.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    className: "jsx-1399659501",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 120,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2919437485", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2919437485",
    css: ".back.__jsx-style-dynamic-selector{margin-top:3em;text-transform:uppercase;color:".concat(_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle, ";font-weight:900;font-size:12pt;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9hcnJvdy9zaXRlL3VpL1BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZvQixBQUdzQixlQUNnQix5QkFDSSxtQ0FDbkIsZ0JBQ0QsZUFDWCIsImZpbGUiOiIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvYXJyb3cvc2l0ZS91aS9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+e2NoaWxkcmVufTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gUGFnZShwcm9wczogeyBjaGlsZHJlbj86IFJlYWN0Lk5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5iZ307XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICAgICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIixcbiAgICAgICAgICAgIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCBwIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaDIsXG4gICAgICAgIC5jb250ZW50IGgzLFxuICAgICAgICAuY29udGVudCBoNCxcbiAgICAgICAgLmNvbnRlbnQgaDUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnRleHRUaXRsZX07XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy50ZXh0VGl0bGV9O1xuICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5iZ307XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxXcmFwcGVyPntwcm9wcy5jaGlsZHJlbn08L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRlbnQocHJvcHM6IHsgc3R5bGU/OiBPYmplY3QsIGNoaWxkcmVuPzogUmVhY3QuTm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgc3R5bGU9e3Byb3BzLnN0eWxlfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ29udGVudFBhZ2UocHJvcHM6IHsgc3R5bGU/OiBPYmplY3QsIGNoaWxkcmVuPzogUmVhY3QuTm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1ZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8TG9nbyB3aWR0aD17MTIwfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGVudD57cHJvcHMuY2hpbGRyZW59PC9Db250ZW50PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5iYWNrIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDNlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHtjb2xvcnMudGV4dFRpdGxlfTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmFja1wiPlxuICAgICAgICAgICAgR28gYmFja1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgeyBQYWdlLCBDb250ZW50UGFnZSwgQ29udGVudCB9O1xuIl19 */\n/*@ sourceURL=/Users/andreypopp/Workspace/arrow/site/ui/Page.js */"),
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle],
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2919437485", [_theme__WEBPACK_IMPORTED_MODULE_2__["colors"].textTitle]]]) + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Go back"))));
}



/***/ })

})
//# sourceMappingURL=projects.js.004c604296cae8426b78.hot-update.js.map