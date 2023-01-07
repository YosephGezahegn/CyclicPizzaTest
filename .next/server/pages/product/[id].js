(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 5033:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Product_container__fK9cn",
	"left": "Product_left__t1_qe",
	"right": "Product_right__2w1I_",
	"imgContainer": "Product_imgContainer__3gh7N",
	"price": "Product_price__8ZgaT",
	"sizes": "Product_sizes__uNB_o",
	"size": "Product_size__zLz_n",
	"number": "Product_number__L2CFz",
	"ingredients": "Product_ingredients__oDfGg",
	"option": "Product_option__w3fvy",
	"checkbox": "Product_checkbox__aPxwX",
	"quantity": "Product_quantity__TGWXW",
	"button": "Product_button__O4U5w",
	"title": "Product_title__1JLOK"
};


/***/ }),

/***/ 2195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5033);
/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1388);







const Product = ({ pizza  })=>{
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pizza.prices[0]);
    const { 0: size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: extras , 1: setExtras  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const changePrice = (number)=>{
        setPrice(price + number);
    };
    const handleSize = (sizeIndex)=>{
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };
    const handleChange = (e, option)=>{
        const checked = e.target.checked;
        if (checked) {
            changePrice(option.price);
            setExtras((prev)=>[
                    ...prev,
                    option
                ]
            );
        } else {
            changePrice(-option.price);
            setExtras(extras.filter((extra)=>extra._id !== option._id
            ));
        }
    };
    const handleClick = ()=>{
        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_5__/* .addProduct */ .gK)({
            ...pizza,
            extras,
            price,
            quantity
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().left),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().imgContainer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: pizza.img,
                        objectFit: "contain",
                        layout: "fill",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().right),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: pizza.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().price),
                        children: [
                            "$",
                            price
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().desc),
                        children: pizza.desc
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().choose),
                        children: "Choose the size"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().sizes),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().size),
                                onClick: ()=>handleSize(0)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        src: "/img/size.png",
                                        layout: "fill",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().number),
                                        children: "Small"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().size),
                                onClick: ()=>handleSize(1)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        src: "/img/size.png",
                                        layout: "fill",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().number),
                                        children: "Medium"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().size),
                                onClick: ()=>handleSize(2)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        src: "/img/size.png",
                                        layout: "fill",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().number),
                                        children: "Large"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().choose),
                        children: "Choose additional ingredients"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().ingredients),
                        children: pizza.extraOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().option),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "checkbox",
                                        id: option.text,
                                        name: option.text,
                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().checkbox),
                                        onChange: (e)=>handleChange(e, option)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "double",
                                        children: option.text
                                    })
                                ]
                            }, option._id)
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().add),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: (e)=>setQuantity(e.target.value)
                                ,
                                type: "number",
                                defaultValue: 1,
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().quantity)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                onClick: handleClick,
                                children: "Add to Cart"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
const getServerSideProps = async ({ params  })=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            pizza: res.data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


/***/ }),

/***/ 1388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gK": () => (/* binding */ addProduct),
/* harmony export */   "mc": () => (/* binding */ reset),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action)=>{
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});
const { addProduct , reset  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(2195)));
module.exports = __webpack_exports__;

})();