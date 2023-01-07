"use strict";
(() => {
var exports = {};
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5748);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);


const handler = async (req, res)=>{
    const { method , query: { id  } ,  } = req;
    await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (method === "GET") {
        try {
            const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "PUT") {
        try {
            const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [378], () => (__webpack_exec__(569)));
module.exports = __webpack_exports__;

})();