(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5350:
/***/ ((module) => {

// Exports
module.exports = {
	"mainAddButton": "Add_mainAddButton__jwM2b",
	"container": "Add_container__nehfK",
	"wrapper": "Add_wrapper__JHSck",
	"close": "Add_close__1Bqhj",
	"item": "Add_item__pgcYA",
	"label": "Add_label__jItnq",
	"input": "Add_input__EuiD8",
	"priceContainer": "Add_priceContainer__WuGaE",
	"inputSm": "Add_inputSm__dPDFU",
	"extra": "Add_extra__3fi1Q",
	"extraItems": "Add_extraItems__GWk48",
	"extraItem": "Add_extraItem__9Z9sH",
	"addButton": "Add_addButton__6OqWh"
};


/***/ }),

/***/ 9923:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Featured_container__djdhp",
	"arrowContainer": "Featured_arrowContainer__eRP7q",
	"wrapper": "Featured_wrapper__Up3ZO",
	"imgContainer": "Featured_imgContainer__bP_Gp"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 9836:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "PizzaCard_container__mVRTr",
	"title": "PizzaCard_title__sZOH_",
	"price": "PizzaCard_price___VsOO",
	"desc": "PizzaCard_desc__n11RA"
};


/***/ }),

/***/ 2003:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "PizzaList_container__zgXeF",
	"desc": "PizzaList_desc__kbamW",
	"wrapper": "PizzaList_wrapper__hlf57",
	"title": "PizzaList_title__RoCAI"
};


/***/ }),

/***/ 4313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Add.module.css
var Add_module = __webpack_require__(5350);
var Add_module_default = /*#__PURE__*/__webpack_require__.n(Add_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Add.jsx





const Add = ({ setClose  })=>{
    const { 0: file , 1: setFile  } = (0,external_react_.useState)(null);
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)(null);
    const { 0: desc , 1: setDesc  } = (0,external_react_.useState)(null);
    const { 0: prices , 1: setPrices  } = (0,external_react_.useState)([]);
    const { 0: extraOptions , 1: setExtraOptions  } = (0,external_react_.useState)([]);
    const { 0: extra , 1: setExtra  } = (0,external_react_.useState)(null);
    const changePrice = (e, index)=>{
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };
    const handleExtraInput = (e)=>{
        setExtra({
            ...extra,
            [e.target.name]: e.target.value
        });
    };
    const handleExtra = (e)=>{
        setExtraOptions((prev)=>[
                ...prev,
                extra
            ]
        );
    };
    const handleCreate = async ()=>{
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await external_axios_default().post("https://api.cloudinary.com/v1_1/dsbyq4sj1/image/upload", data);
            const { url  } = uploadRes.data;
            const newProduct = {
                title,
                desc,
                prices,
                extraOptions,
                img: url
            };
            await external_axios_default().post("http://localhost:3000/api/products", newProduct);
            setClose(true);
        } catch (err) {
            console.log(err);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Add_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Add_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    onClick: ()=>setClose(true)
                    ,
                    className: (Add_module_default()).close,
                    children: "X"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Add a new Pizza"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Choose an image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "file",
                            onChange: (e)=>setFile(e.target.files[0])
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Title"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: (Add_module_default()).input,
                            type: "text",
                            onChange: (e)=>setTitle(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Desc"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            rows: 4,
                            type: "text",
                            onChange: (e)=>setDesc(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Prices"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Add_module_default()).priceContainer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Small",
                                    onChange: (e)=>changePrice(e, 0)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Medium",
                                    onChange: (e)=>changePrice(e, 1)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Large",
                                    onChange: (e)=>changePrice(e, 2)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Add_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: (Add_module_default()).label,
                            children: "Extra"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Add_module_default()).extra,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "text",
                                    placeholder: "Item",
                                    name: "text",
                                    onChange: handleExtraInput
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: `${(Add_module_default()).input} ${(Add_module_default()).inputSm}`,
                                    type: "number",
                                    placeholder: "Price",
                                    name: "price",
                                    onChange: handleExtraInput
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (Add_module_default()).extraButton,
                                    onClick: handleExtra,
                                    children: "Add"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Add_module_default()).extraItems,
                            children: extraOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (Add_module_default()).extraItem,
                                    children: option.text
                                }, option.text)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (Add_module_default()).addButton,
                    onClick: handleCreate,
                    children: "Create"
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Add = (Add);

;// CONCATENATED MODULE: ./components/AddButton.jsx


const AddButton = ({ setClose  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: ()=>setClose(false)
        ,
        className: (Add_module_default()).mainAddButton,
        children: "Add New Pizza"
    }));
};
/* harmony default export */ const components_AddButton = (AddButton);

// EXTERNAL MODULE: ./styles/Featured.module.css
var Featured_module = __webpack_require__(9923);
var Featured_module_default = /*#__PURE__*/__webpack_require__.n(Featured_module);
;// CONCATENATED MODULE: ./components/Featured.jsx




const Featured = ()=>{
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(0);
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png", 
    ];
    const handleArrow = (direction)=>{
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Featured_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).arrowContainer,
                style: {
                    left: 0
                },
                onClick: ()=>handleArrow("l")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/img/arrowl.png",
                    alt: "",
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).wrapper,
                style: {
                    transform: `translateX(${-100 * index}vw)`
                },
                children: images.map((img, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Featured_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: img,
                            alt: "",
                            layout: "fill",
                            objectFit: "contain"
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Featured_module_default()).arrowContainer,
                style: {
                    right: 0
                },
                onClick: ()=>handleArrow("r")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/img/arrowr.png",
                    layout: "fill",
                    alt: "",
                    objectFit: "contain"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Featured = (Featured);

// EXTERNAL MODULE: ./styles/PizzaList.module.css
var PizzaList_module = __webpack_require__(2003);
var PizzaList_module_default = /*#__PURE__*/__webpack_require__.n(PizzaList_module);
// EXTERNAL MODULE: ./styles/PizzaCard.module.css
var PizzaCard_module = __webpack_require__(9836);
var PizzaCard_module_default = /*#__PURE__*/__webpack_require__.n(PizzaCard_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/PizzaCard.jsx




const PizzaCard = ({ pizza  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PizzaCard_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/product/${pizza._id}`,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: pizza.img,
                    alt: "",
                    width: "500",
                    height: "500"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (PizzaCard_module_default()).title,
                children: pizza.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (PizzaCard_module_default()).price,
                children: [
                    "$",
                    pizza.prices[0]
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (PizzaCard_module_default()).desc,
                children: pizza.desc
            })
        ]
    }));
};
/* harmony default export */ const components_PizzaCard = (PizzaCard);

;// CONCATENATED MODULE: ./components/PizzaList.jsx



const PizzaList = ({ pizzaList  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PizzaList_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (PizzaList_module_default()).title,
                children: "THE BEST PIZZA IN TOWN"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (PizzaList_module_default()).desc,
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PizzaList_module_default()).wrapper,
                children: pizzaList.map((pizza)=>/*#__PURE__*/ jsx_runtime_.jsx(components_PizzaCard, {
                        pizza: pizza
                    }, pizza._id)
                )
            })
        ]
    }));
};
/* harmony default export */ const components_PizzaList = (PizzaList);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.js










function Home({ pizzaList , admin  }) {
    const { 0: close , 1: setClose  } = (0,external_react_.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Pizza Restaurant in Newyork"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Best pizza shop in town"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Featured, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_AddButton, {
                setClose: setClose
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_PizzaList, {
                pizzaList: pizzaList
            }),
            !close && /*#__PURE__*/ jsx_runtime_.jsx(components_Add, {
                setClose: setClose
            })
        ]
    }));
};
const getServerSideProps = async (ctx)=>{
    var ref;
    const myCookie = ((ref = ctx.req) === null || ref === void 0 ? void 0 : ref.cookies) || "";
    let admin = false;
    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }
    const res = await external_axios_default().get("http://localhost:3000/api/products");
    return {
        props: {
            pizzaList: res.data,
            admin
        }
    };
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,664], () => (__webpack_exec__(4313)));
module.exports = __webpack_exports__;

})();