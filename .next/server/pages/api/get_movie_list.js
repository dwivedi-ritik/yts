"use strict";
(() => {
var exports = {};
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// Server side api to get from yts
const URL = "https://yts.mx/api/v2/list_movies.json";
async function handler(req, res) {
    if (req.method == "POST") {
        const query = JSON.parse(req.body);
        const api_res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: URL,
            method: "get",
            params: {
                ...query
            }
        });
        res.status(200).json({
            data: api_res.data
        });
        return;
    }
    res.status(400).json({
        error: "invalid paramaters"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7586));
module.exports = __webpack_exports__;

})();