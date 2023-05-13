"use strict";
(() => {
var exports = {};
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 5217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _store_user_store__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _store_user_store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Favorite = ({ library  })=>{
    const { 0: gameList , 1: setGameList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id  } = router.query;
    const isOwner = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_store_user_store__WEBPACK_IMPORTED_MODULE_5__/* .isOwnerValue */ .Z);
    const getFavoriteGames = async ()=>{
        const fetch = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/api/favorite/user/${id}`);
        setGameList(fetch.data);
        return;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getFavoriteGames();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{}, [
        gameList
    ]);
    const { 0: emptyList , 1: setEmptyList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const makeNew = ()=>{
        setEmptyList((prev)=>[
                ...prev,
                {}
            ]
        );
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mt-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center mb-2 mt-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "font-medium text-lg",
                    children: "\uC120\uD638\uD558\uB294 \uAC8C\uC784"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    gameList.length > 0 && gameList.map((game)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavoriteComponent, {
                            isOwner: isOwner,
                            gameInfo: game,
                            setList: setGameList
                        }, game.game_id)
                    ),
                    emptyList.map((e, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NewComponent, {
                            index: i,
                            setList: setEmptyList,
                            library: library
                        }, "empty" + i)
                    ),
                    isOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: makeNew,
                        className: "group hover:bg-blue-400/50 w-full border-blue-400 border rounded py-1 h-12 text-blue-400 flex justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-4 h-4 stroke-0 fill-blue-400 group-hover:fill-blue-200",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorite);
const NewComponent = ({ index , setList , library  })=>{
    const { 0: gameInfo , 1: setGameInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        title: "\uAC8C\uC784 \uC120\uD0DD",
        image: "",
        playtime: 0
    });
    const createFavorite = async ()=>{
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/favorite/new", {
            gameID: gameInfo.id,
            description: desc
        });
    };
    const { 0: desc , 1: setDesc  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "w-full",
        onSubmit: createFavorite,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative w-full border-blue-400 border rounded py-3 px-5 min-h-[10rem] text-blue-400 flex flex-col ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-blue-400 w-5 h-5 rounded overflow-hidden",
                                children: gameInfo?.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: gameInfo?.image,
                                    width: "100%",
                                    height: "100%"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "font-normal text-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    className: "bg-blue-800/50 rounded px-1 ml-1",
                                    onChange: (e)=>{
                                        setGameInfo(library.filter((g)=>g.id == e.target.value
                                        )[0]);
                                    },
                                    children: [
                                        {
                                            title: "\uAC8C\uC784 \uC120\uD0DD",
                                            image: "",
                                            playtime: 0
                                        },
                                        ...library
                                    ].map((game)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: game.id,
                                            children: game.title
                                        })
                                    )
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grow"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-slate-300 text-sm pt-1",
                                children: gameInfo?.playtime / 60 >= 1 ? ` ${Math.trunc(gameInfo?.playtime / 60)} 시간` : ` ${gameInfo?.playtime} 분`
                            })
                        ]
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        required: true,
                        value: desc,
                        onChange: (e)=>setDesc(e.target.value)
                        ,
                        className: "grow text-white text-sm mt-3 mb-1 px-3 py-1 bg-slate-500/50 rounded"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute left-[-2.2rem] top-1 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "group hover:bg-blue-400/50 border-blue-400 border rounded-full p-[0.35rem] w-7 h-7",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    height: "100%",
                                    viewBox: "0 0 24 24",
                                    className: "group-hover:fill-blue-100 fill-blue-400 stroke-blue-400",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: ()=>setList((prev)=>prev.filter((_, i)=>i != index
                                        )
                                    )
                                ,
                                className: "group hover:bg-red-500/50 border-red-600 border rounded-full p-[0.35rem] w-7 h-7",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    height: "100%",
                                    viewBox: "0 0 24 24",
                                    className: "group-hover:fill-red-100 fill-red-500 stroke-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            " "
        ]
    });
};
const FavoriteComponent = ({ gameInfo , setList , isOwner  })=>{
    const { 0: desc , 1: setDesc  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(gameInfo.description);
    const { game  } = gameInfo;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full border-blue-400 border rounded py-3 px-5 min-h-[10rem] text-blue-400 flex flex-col ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-blue-400 w-5 h-5 rounded overflow-hidden",
                        children: game.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: game.image,
                            width: "100%",
                            height: "100%"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-normal text-white",
                        children: game.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-slate-300 text-sm pt-1",
                        children: game.playtime / 60 >= 1 ? ` ${Math.trunc(game.playtime / 60)} 시간` : ` ${game.playtime} 분`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                disabled: !isOwner,
                className: "grow text-white text-sm mt-3 mb-1 px-3 py-1 bg-slate-500/50 rounded",
                value: desc,
                onChange: (e)=>setDesc(e.target.value)
            }),
            isOwner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute left-[-2.2rem] top-1 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "group hover:bg-blue-400/50 border-blue-400 border rounded-full p-[0.35rem] w-7 h-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 24 24",
                            className: "group-hover:fill-blue-100 fill-blue-400 stroke-blue-400",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setList((prev)=>prev.filter((g)=>g.id != game.id
                                )
                            )
                        ,
                        className: "group hover:bg-red-500/50 border-red-600 border rounded-full p-[0.35rem] w-7 h-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 24 24",
                            className: "group-hover:fill-red-100 fill-red-500 stroke-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
                            })
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FormModal = ({ children , showModal , setShowModal , close ="\uCDE8\uC18C" , ok ="\uD655\uC778" , onSubmit ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative my-6 mx-auto max-w-3xl",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "border-0 rounded-lg shadow-lg relative flex flex-col bg-slate-300 w-[40vw] outline-none focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative p-6 text-black min-h-[6rem]",
                                    children: children
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-end p-3 border-t border-solid border-blue-300 rounded-b",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "text-red-500 background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                            type: "button",
                                            onClick: ()=>setShowModal(false)
                                            ,
                                            children: close
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                            type: "submit",
                                            children: ok
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "opacity-25 fixed inset-0 z-40 bg-black"
                })
            ]
        }) : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormModal);


/***/ }),

/***/ 8195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NewGameModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4996);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewGameModal__WEBPACK_IMPORTED_MODULE_2__, _store_user_store__WEBPACK_IMPORTED_MODULE_4__]);
([_NewGameModal__WEBPACK_IMPORTED_MODULE_2__, _store_user_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Library = ({ appList  })=>{
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isOwner = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_store_user_store__WEBPACK_IMPORTED_MODULE_4__/* .isOwnerValue */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[30%]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center mb-2 mt-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-medium text-lg",
                        children: "\uBCF4\uC720 \uAC8C\uC784"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grow"
                    }),
                    isOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setShowModal(!showModal)
                        ,
                        className: "px-2 py-1 border rounded border-blue-400 text-blue-400 text-sm hover:bg-blue-400/50 hover:text-blue-200",
                        children: "\uCD94\uAC00"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col border border-blue-400 rounded px-1 py-2",
                children: appList.filter((_, i)=>i < 100
                ).map((p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "group relative p-1 grid gap-2 rounded w-full grid-cols-[1rem_1fr] items-center text-start hover:bg-slate-400/50",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: p.image
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-sm truncate",
                                children: p.title
                            })
                        ]
                    }, p.gameID)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewGameModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                showModal: showModal,
                setShowModal: setShowModal
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2834);
/* harmony import */ var _FormModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _store_user_store__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _store_user_store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const NewGameModal = ({ showModal , setShowModal  })=>{
    const { 0: platform , 1: setPlatform  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const platforms = [
        "\uC9C1\uC811 \uC785\uB825",
        "Steam",
        "Nintendo",
        "Playstation",
        "Mobile"
    ];
    const userid = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_store_user_store__WEBPACK_IMPORTED_MODULE_5__/* .userID */ .A);
    const { 0: games , 1: setGames  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: game , 1: setGame  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    // const [showModal, setShowModal] = useState(false);
    const getAppData = async (e)=>{
        setPlatform(e.target.value);
        if (e.target.value != 0) {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("Auth");
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common.Authorization = token;
            const fetchedData = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/api/steam/profile/${userid}`);
            const resData = fetchedData.data.appList;
            setGames(resData.sort((a, b)=>a.name > b.name ? 1 : a.name === b.name ? 0 : -1
            ));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!showModal) {
            setPlatform(0);
            setGame({});
            setGames([]);
        }
    }, [
        showModal
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("Auth");
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common.Authorization = token;
        const fetch = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/api/game/new`, {
            gameID: game.appID,
            title: game.name,
            platform: platform,
            playtime: Number(game.playTime),
            image: game.iconURL
        });
        if (fetch.status == 201) {
            setShowModal(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        showModal: showModal,
        setShowModal: setShowModal,
        ok: "\uCD94\uAC00",
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col gap-2 py-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "w-full font-medium",
                    children: [
                        "\uC5F0\uB3D9 \uD50C\uB7AB\uD3FC",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                            className: "w-2/3 rounded float-right truncate font-normal text-sm py-1",
                            onChange: (e)=>getAppData(e)
                            ,
                            children: platforms.map((p, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: i,
                                    children: p
                                }, i)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "w-full font-medium",
                    children: [
                        "\uAC8C\uC784",
                        games.length > 0 && platform != 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                            className: "rounded w-2/3 float-right truncate font-normal text-sm py-1",
                            onChange: (e)=>{
                                setGame(games.filter((g)=>g.appID == e.target.value
                                )[0]);
                            },
                            children: games.map((g)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: g.appID,
                                    children: g.name
                                }, g.appID)
                            )
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "rounded w-2/3 float-right truncate px-2",
                            onChange: (e)=>setGame((prev)=>({
                                        ...prev,
                                        title: e.target.value
                                    })
                                )
                            ,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "w-full font-medium",
                    children: [
                        "\uD50C\uB808\uC774\uD0C0\uC784",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "w-2/3 float-right flex font-normal text-base",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    required: true,
                                    value: game.playTime ? game.playTime : "",
                                    type: "number",
                                    onChange: (e)=>setGame((prev)=>({
                                                ...prev,
                                                playTime: Number(e.target.value)
                                            })
                                        )
                                    ,
                                    className: "rounded text-black text-end px-2 mr-2 grow"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "shrink-0 text-sm pt-1",
                                    children: `분 ( ${game.playTime ? Math.trunc(game.playTime / 60) : 0} 시간 )`
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewGameModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2834);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _store_user_store__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _store_user_store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Trait = ()=>{
    const token1 = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("Auth");
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common.Authorization = token1;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { id  } = router.query;
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: trash , 1: setTrash  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: emptyList , 1: setEmptyList  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const isOwner = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_store_user_store__WEBPACK_IMPORTED_MODULE_6__/* .isOwnerValue */ .Z);
    const makeNew = ()=>{
        setEmptyList((prev)=>[
                ...prev,
                {}
            ]
        );
    };
    const getData = async ()=>{
        const traits = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/api/trait/user/${id}`);
        traits.status === 201 && setData(traits.data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getData();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{}, [
        data
    ]);
    const saveTraits = async (e)=>{
        // e.preventDefault();
        const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_2__.getCookie)("Auth");
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.common.Authorization = token;
        const fetch = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put("/api/trait/update", {
            c_trait: emptyList,
            u_trait: data,
            d_trait: trash
        });
        if (fetch.status == 200) {
            return;
        } else {
            console.log(fetch);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: saveTraits,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-2 mt-1 flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "font-medium text-lg",
                            children: "\uD56D\uBAA9\uBCC4 \uC124\uBA85"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grow"
                        }),
                        isOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "px-2 py-1 border rounded border-blue-400 text-blue-400 text-sm hover:bg-blue-400/50 hover:text-blue-200",
                            children: "\uC800\uC7A5"
                        })
                    ]
                }),
                data.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                    className: "border border-blue-400 rounded-t-md border-separate border-spacing-0 border-b-0 w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            data.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            width: "25%",
                                            className: "font-medium border-blue-400 border-r border-b leading-3",
                                            children: [
                                                isOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute left-[-1.5rem] h-full justify-center flex flex-col gap-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setData((prev)=>prev.filter((g, index)=>index != i
                                                                )
                                                            );
                                                            setTrash((prev)=>[
                                                                    ...prev,
                                                                    t.id
                                                                ]
                                                            );
                                                        },
                                                        className: "group w-4 h-4 p-[0.1rem]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "100%",
                                                            height: "100%",
                                                            viewBox: "0 0 24 24",
                                                            className: "group-hover:fill-red-100 fill-red-500 stroke-0",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    required: true,
                                                    disabled: !isOwner,
                                                    onChange: (e)=>{
                                                        let newArr = [
                                                            ...data
                                                        ];
                                                        newArr[i] = {
                                                            ...newArr[i],
                                                            label: e.target.value
                                                        };
                                                        setData(newArr);
                                                    },
                                                    className: "text-sm bg-transparent w-full focus:bg-blue-500/50 focus:outline-0 p-2 rounded text-center",
                                                    value: t.label
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            width: "75%",
                                            className: "text-sm border-blue-400 border-b leading-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                required: true,
                                                disabled: !isOwner,
                                                onChange: (e)=>{
                                                    let newArr = [
                                                        ...data
                                                    ];
                                                    newArr[i] = {
                                                        ...newArr[i],
                                                        value: e.target.value
                                                    };
                                                    setData(newArr);
                                                },
                                                className: "text-sm bg-transparent w-full focus:bg-blue-500/50 p-2 focus:outline-0 rounded",
                                                value: t.value
                                            })
                                        })
                                    ]
                                }, i)
                            ),
                            emptyList.map((e1, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            width: "25%",
                                            className: "font-medium border-blue-400 border-r border-b leading-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute left-[-1.5rem] h-full justify-center flex flex-col gap-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        onClick: ()=>setEmptyList((prev)=>prev.filter((g, index)=>index != i
                                                                )
                                                            )
                                                        ,
                                                        className: "group w-4 h-4 p-[0.1rem]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "100%",
                                                            height: "100%",
                                                            viewBox: "0 0 24 24",
                                                            className: "group-hover:fill-red-100 fill-red-500 stroke-0",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    required: true,
                                                    onChange: (e)=>{
                                                        let newArr = [
                                                            ...emptyList
                                                        ];
                                                        newArr[i] = {
                                                            ...newArr[i],
                                                            label: e.target.value
                                                        };
                                                        setEmptyList(newArr);
                                                    },
                                                    className: "text-sm bg-transparent w-full focus:bg-blue-500/50 focus:outline-0 p-2 rounded text-center"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            width: "75%",
                                            className: "border-blue-400 border-b leading-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                required: true,
                                                onChange: (e)=>{
                                                    let newArr = [
                                                        ...emptyList
                                                    ];
                                                    newArr[i] = {
                                                        ...newArr[i],
                                                        value: e.target.value
                                                    };
                                                    setEmptyList(newArr);
                                                },
                                                className: "text-sm bg-transparent w-full focus:bg-blue-500/50 p-2 focus:outline-0 rounded"
                                            })
                                        })
                                    ]
                                }, `empty${i}`)
                            )
                        ]
                    })
                }),
                isOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: makeNew,
                    type: "button",
                    className: "group hover:bg-blue-400/50 border-blue-400 border-t-0 border rounded-b-md h-10 w-full text-blue-400 flex justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "w-3 h-3 stroke-0 fill-blue-400 group-hover:fill-blue-200",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trait);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1943);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8195);
/* harmony import */ var _components_Trait__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1149);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Favorite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5217);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_user_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__, _components_Library__WEBPACK_IMPORTED_MODULE_6__, _components_Trait__WEBPACK_IMPORTED_MODULE_7__, _components_Favorite__WEBPACK_IMPORTED_MODULE_9__, _store_user_store__WEBPACK_IMPORTED_MODULE_11__]);
([axios__WEBPACK_IMPORTED_MODULE_4__, _components_Library__WEBPACK_IMPORTED_MODULE_6__, _components_Trait__WEBPACK_IMPORTED_MODULE_7__, _components_Favorite__WEBPACK_IMPORTED_MODULE_9__, _store_user_store__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












axios__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.withCredentials = true;
const getServerSideProps = async (context)=>{
    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("Auth", context);
    axios__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.headers.common.Authorization = token;
    const { id  } = context.query;
    try {
        const fetchedData = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(`${process.env.API_URL}/steam/profile/${id}`);
        const userData = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(`${process.env.API_URL}/user/id/${id}`);
        const libraryData = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`${process.env.API_URL}/game/user/${id}`);
        const resData = fetchedData.data;
        return {
            props: {
                profile: {
                    ...userData.data,
                    url: resData.profile.url,
                    image: resData.profile.avatar.large
                },
                appList: libraryData.data
            }
        };
    } catch (error) {
        console.log(error);
        return {
            props: {}
        };
    }
};
const ProfilePage = ({ appList , profile  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { id  } = router.query;
    const user = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("User");
    const { 0: desc , 1: setDesc  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(profile.description);
    const { 0: descMod , 1: setDescMod  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [isOwner, setIsOwner] = (0,recoil__WEBPACK_IMPORTED_MODULE_10__.useRecoilState)(_store_user_store__WEBPACK_IMPORTED_MODULE_11__/* .isOwnerValue */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsOwner(id == user);
    }, []);
    const saveDesc = async ()=>{
        if (desc != profile.description) {
            const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.getCookie)("Auth");
            axios__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.headers.common.Authorization = token;
            const update = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/api/user/desc", {
                desc: desc
            });
            update.status !== 201 && console.error(update.status);
        }
        setDescMod(!descMod);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        isUser: profile ? true : false,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: profile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-[7.5rem_3fr_1fr] items-center gap-4 mt-3 mb-8 h-[7.5rem]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "h-[7.5rem] w-[7.5rem] rounded border border-blue-400",
                                src: profile?.image
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col grow h-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "py-2 text-lg font-medium",
                                                children: profile.username
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grow"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flexpr-1 items-center mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "rounded-full h-6 w-6 bg-blue-600",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: profile?.url,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "w-full hover:cursor-pointer",
                                                                    src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "rounded-full overflow-hidden h-6 w-6 bg-red-600",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: profile?.url,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "w-full hover:cursor-pointer",
                                                                    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Nintendo_switch_logo.png"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "rounded-full h-6 w-6 bg-white",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: profile?.url,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    className: "w-full hover:cursor-pointer",
                                                                    src: "https://cdn-icons-png.flaticon.com/512/37/37812.png?w=360"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative grow ",
                                        children: [
                                            isOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: descMod ? saveDesc : ()=>setDescMod(true)
                                                ,
                                                className: "absolute top-2 right-2 w-4 h-4",
                                                children: descMod ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "100%",
                                                    height: "100%",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "white",
                                                    fill: "white",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "100%",
                                                    height: "100%",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "white",
                                                    fill: "white",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                disabled: !(descMod && isOwner),
                                                value: desc,
                                                onChange: (v)=>setDesc(v.target.value)
                                                ,
                                                className: "bg-slate-500/50 rounded w-full h-full px-2 py-1"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rounded border border-blue-400 w-full h-full"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grow",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Trait__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Favorite__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        library: appList
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Library__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                appList: appList
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "loading..."
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ userID),
/* harmony export */   "Z": () => (/* binding */ isOwnerValue)
/* harmony export */ });
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const sessionStorageEffect = (key)=>({ setSelf , onSet  })=>{
        const id = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(key);
        if (id !== null) {
            setSelf(id);
        }
    }
;
const userID = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
    effects: [
        sessionStorageEffect("User")
    ]
});
const isOwnerValue = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
    default: false
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = require("react-textarea-autosize");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,63,943], () => (__webpack_exec__(6691)));
module.exports = __webpack_exports__;

})();