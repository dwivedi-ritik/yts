"use strict";
(() => {
var exports = {};
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const MAIN_URL = "https://yts.mx/api/v2/movie_details.json";
async function handler(req, res) {
    if (req.method == "GET") {
        const { movie_id  } = req.query;
        const query = {
            "movie_id": movie_id
        };
        let api_res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            url: MAIN_URL,
            method: "get",
            params: {
                ...query
            }
        });
        let response = await api_res.data;
        res.status(200).json({
            response: response.data
        });
        return;
    } else {
        res.status(400).send("Invalid Request");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4625));
module.exports = __webpack_exports__;

})();