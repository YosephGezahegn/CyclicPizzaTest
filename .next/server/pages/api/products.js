"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5748);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6183);


async function handler(req, res) {
    const { method , cookies  } = req;
    const token = cookies.token;
    (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (method === "GET") {
        try {
            const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "POST") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authenticated!");
        }
        try {
            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [420], () => (__webpack_exec__(1003)));
module.exports = __webpack_exports__;

})();