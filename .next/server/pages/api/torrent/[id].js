"use strict";
(() => {
var exports = {};
exports.id = 160;
exports.ids = [160];
exports.modules = {

/***/ 868:
/***/ ((module) => {

module.exports = import("got");;

/***/ }),

/***/ 3018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var got__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([got__WEBPACK_IMPORTED_MODULE_0__]);
got__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const MAIN_URL = "https://yts.mx/torrent/download";
async function handler(req, res) {
    if (req.method == "GET") {
        const { id  } = req.query;
        let st = got__WEBPACK_IMPORTED_MODULE_0__["default"].stream(`${MAIN_URL}/${id}`);
        st.pipe(res);
    } else {
        res.status(400).send("Not a valid request");
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3018));
module.exports = __webpack_exports__;

})();