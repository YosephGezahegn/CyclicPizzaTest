(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 9539:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Admin_container__7Kd1y",
	"item": "Admin_item__FuGBz",
	"table": "Admin_table__brNHw",
	"button": "Admin_button___uar2"
};


/***/ }),

/***/ 1174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9539);
/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Index = ({ orders , products  })=>{
    const { 0: pizzaList , 1: setPizzaList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(products);
    const { 0: orderList , 1: setOrderList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(orders);
    const status = [
        "preparing",
        "on the way",
        "delivered"
    ];
    const handleDelete = async (id)=>{
        console.log(id);
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("http://localhost:3000/api/products/" + id);
            setPizzaList(pizzaList.filter((pizza)=>pizza._id !== id
            ));
        } catch (err) {
            console.log(err);
        }
    };
    const handleStatus = async (id)=>{
        const item = orderList.filter((order)=>order._id === id
        )[0];
        const currentStatus = item.status;
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().put("http://localhost:3000/api/orders/" + id, {
                status: currentStatus + 1
            });
            setOrderList([
                res.data,
                ...orderList.filter((order)=>order._id !== id
                ), 
            ]);
        } catch (err) {
            console.log(err);
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                        children: "Products"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().table),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().trTitle),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Image"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Id"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Title"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Price"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Action"
                                        })
                                    ]
                                })
                            }),
                            pizzaList.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().trTitle),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    src: product.img,
                                                    width: 50,
                                                    height: 50,
                                                    objectFit: "cover",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    product._id.slice(0, 5),
                                                    "..."
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: product.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    "$",
                                                    product.prices[0]
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
                                                        children: "Edit"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
                                                        onClick: ()=>handleDelete(product._id)
                                                        ,
                                                        children: "Delete"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, product._id)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                        children: "Orders"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().table),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().trTitle),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Id"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Customer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Total"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Payment"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Status"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            children: "Action"
                                        })
                                    ]
                                })
                            }),
                            orderList.map((order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_4___default().trTitle),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    order._id.slice(0, 5),
                                                    "..."
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: order.customer
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                children: [
                                                    "$",
                                                    order.total
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: order.method === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "cash"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "paid"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: status[order.status]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>handleStatus(order._id)
                                                    ,
                                                    children: "Next Stage"
                                                })
                                            })
                                        ]
                                    })
                                }, order._id)
                            )
                        ]
                    })
                ]
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    var ref;
    const myCookie = ((ref = ctx.req) === null || ref === void 0 ? void 0 : ref.cookies) || "";
    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false
            }
        };
    }
    const productRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:3000/api/products");
    const orderRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:3000/api/orders");
    return {
        props: {
            orders: orderRes.data,
            products: productRes.data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(1174)));
module.exports = __webpack_exports__;

})();