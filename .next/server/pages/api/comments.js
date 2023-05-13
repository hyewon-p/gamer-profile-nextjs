"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 7921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./data/comments.js
const comments = [
    {
        id: 1,
        text: "first"
    },
    {
        id: 2,
        text: "second"
    },
    {
        id: 3,
        text: "third"
    }, 
];

;// CONCATENATED MODULE: ./pages/api/comments/index.tsx

function handler(req, res) {
    res.status(200).json(comments);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7921));
module.exports = __webpack_exports__;

})();