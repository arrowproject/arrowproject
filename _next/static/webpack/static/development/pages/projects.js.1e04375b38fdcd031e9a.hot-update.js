webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./ui/Logo.js":
/*!********************!*\
  !*** ./ui/Logo.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./ui/theme.js");
var _jsxFileName = "/Users/andreypopp/Workspace/arrow/site/ui/Logo.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Logo(props) {
  var ratio = 220 / 75;
  var width = props.width || 220;
  var height = width / ratio;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: _objectSpread({
      width: width,
      height: height
    }, props.style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
    width: String(width) + "px",
    height: String(height) + "px",
    viewBox: "0 0 624 212",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(-1.000000, 0.000000)",
    fill: _theme__WEBPACK_IMPORTED_MODULE_1__["colors"].textTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M106.705343,169.807649 L103.432432,208 L64.2432432,208 L67.9553615,171.838449 L106.705343,169.807649 Z M47.8577506,172.89172 L39.6486486,208 L1,208 L9.99611241,174.875965 L47.8577506,172.89172 Z M211.742992,164.302859 C210.809406,177.868041 209.638116,192.689099 209.638116,208 L169.167024,208 C168.897216,205.833554 168.627409,203.667107 168.627409,200.417437 C168.627409,193.296729 169.557147,179.443805 170.494093,166.464622 L211.742992,164.302859 Z M154.187234,167.319228 L147.042827,208 L109,208 L115.76855,169.332666 L154.187234,167.319228 Z M320.120968,158.62301 C319.164269,173.684209 317.638116,190.522979 317.638116,208 L277.167024,208 C276.897216,205.833554 276.627409,203.667107 276.627409,200.417437 C276.627409,192.24267 277.852772,175.195066 278.907656,160.782908 L320.120968,158.62301 Z M263.190491,161.60661 L255.042827,208 L217,208 L224.768489,163.620221 L263.190491,161.60661 Z M427.512457,152.99486 C422.080621,177.314234 417.807079,186.263758 411.574032,195.213282 C403.170843,207.938697 391.243736,212 367.931663,212 C340.28246,212 327,206.314176 327,177.072797 C327,172.278105 327.401735,166.359869 328.375329,158.190417 L427.512457,152.99486 Z M589.298083,144.516035 L573.282235,208 L519.398281,208 L523.798065,147.948745 L589.298083,144.516035 Z M507.131034,148.822227 L490.425501,208 L436,208 L441.373741,152.268421 L507.131034,148.822227 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M99.9983461,154.7193 L6.13443528,159.638499 L35.489552,51.5518196 L108.511381,55.3787315 L99.9983461,154.7193 Z M204.635251,149.235512 L110.422183,154.17301 L127.541122,56.376038 L223.688276,61.4148967 C223.232192,64.1414153 222.719167,67.1287692 222.143469,70.4306473 C217.017131,100.490092 211.08137,103.468956 199.20985,110.239102 L198.940043,111.863937 C203.796574,117.280053 204.875803,121.612946 204.875803,139.215324 C204.875803,142.425007 204.785578,145.770529 204.635251,149.235512 Z M219.422122,148.460565 L234.559363,61.9846263 L330.734136,67.0249326 C330.545001,68.1220043 330.348198,69.2564377 330.143469,70.4306473 C325.017131,100.490092 319.08137,103.468956 307.20985,110.239102 L306.940043,111.863937 C311.796574,117.280053 312.875803,121.612946 312.875803,139.215324 C312.875803,140.639135 312.858049,142.089677 312.825169,143.565519 L219.422122,148.460565 Z M434.016067,72.4377092 C432.269977,83.7261564 429.859715,97.9914757 426.615034,116.42401 C425.207166,124.419381 423.900772,131.502556 422.668393,137.808897 L322.441724,143.061537 C324.178792,131.465072 326.667622,116.63252 330.113895,97.2005109 C332.176819,85.4098142 334.021694,75.57925 335.730468,67.2867792 L434.016067,72.4377092 Z M470.275288,135.313908 L434.829409,137.171548 L441.035693,72.8055922 L477.452276,74.7141045 L470.275288,135.313908 Z M492.03463,75.4783333 L548.185025,78.4210508 L545.305953,131.381717 L474.323368,135.101757 L492.03463,75.4783333 Z M550.05132,131.133023 L562.161607,79.1535324 L597.322964,80.996261 L585.138276,129.294194 L550.05132,131.133023 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M47.5117236,36.7420275 L56.6756757,3 L121,3 L117.792822,40.4253037 L47.5117236,36.7420275 Z M138.14651,41.4919953 L144.884368,3 L200.464668,3 C225.556745,3 235,12.2073976 235,30.8929987 C235,35.8541756 234.720513,40.39457 233.948195,46.5127489 L138.14651,41.4919953 Z M245.164751,47.1005837 L252.884368,3 L308.464668,3 C333.556745,3 343,12.2073976 343,30.8929987 C343,37.2583022 342.539923,42.9309356 341.169178,52.1319625 L245.164751,47.1005837 Z M347.036646,52.4394635 C351.807432,32.8793822 355.82581,25.0023282 361.425968,16.7867178 C369.829157,4.33205619 381.756264,0 405.339408,0 C433.259681,0 446,5.95657727 446,35.1979566 C446,40.6537924 445.479835,47.4604753 444.166071,57.529801 L347.036646,52.4394635 Z M450.476723,57.8605282 L455.766476,3 L493.945559,3 L487.220229,59.7861737 L450.476723,57.8605282 Z M504.428129,60.6880016 L521.56447,3 L560.2851,3 L556.999262,63.4431379 L504.428129,60.6880016 Z M573.61892,64.3141373 L587.904011,3 L625,3 L609.062936,66.1716795 L573.61892,64.3141373 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ })

})
//# sourceMappingURL=projects.js.1e04375b38fdcd031e9a.hot-update.js.map