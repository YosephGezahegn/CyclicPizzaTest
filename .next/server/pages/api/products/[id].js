"use strict";
(() => {
var exports = {};
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5748);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6183);


async function handler(req, res) {
    const { method , query: { id  } , cookies  } = req;
    const token = cookies.token;
    (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (method === "GET") {
        try {
            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "PUT") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authenticated!");
        }
        try {
            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {
        if (!token || token !== process.env.token) {
            return res.status(401).json("Not authenticated!");
        }
        try {
            await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(id);
            res.status(200).json("The product has been deleted!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [420], () => (__webpack_exec__(7503)));
module.exports = __webpack_exports__;

})();