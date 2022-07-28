"use strict";
exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 1770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchComp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/"
var _ = __webpack_require__(2999);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__(1313);
// EXTERNAL MODULE: ./components/NotYetLoaded.js
var NotYetLoaded = __webpack_require__(7326);
;// CONCATENATED MODULE: ./components/Movie.js





const Tags = ({ tag  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",
        children: [
            " ",
            tag
        ]
    }));
};
const Img = ({ src  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: "w-full h-25 object-top",
        src: src,
        alt: ""
    }));
};
const Movie = (props)=>{
    const movie = props.movie;
    let { 0: showImg , 1: setShowImg  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(async ()=>{
        movie.large_cover_image = await (0,utils.imgToBlob)(props.movie.slug);
        setShowImg(true);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            target: "_blank",
            href: "/movie/" + movie.id,
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl",
                children: [
                    showImg ? /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                        src: movie.large_cover_image
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(NotYetLoaded/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-6 py-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-bold text-xl mb-2",
                                        children: movie.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bg-yellow-400 rounded-sm h-4 p-3 sm:h-6 flex justify-center items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs text-bold text-white",
                                            children: movie.rating
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 text-base",
                                children: [
                                    movie.summary.substring(0, 160),
                                    "...."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-6 pt-4 pb-2",
                        children: movie.genres.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx(Tags, {
                                tag: el
                            }, el)
                        )
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Movie = (Movie);

;// CONCATENATED MODULE: ./components/MovieList.js



const MovieList = (props)=>{
    const moviesdata = props.moviesdata.movies;
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-5xl mx-auto",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-3 px-3 sm:px-0 justify-items-center",
                children: moviesdata.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Movie, {
                        movie: el
                    }, el.id)
                )
            })
        })
    }));
};
/* harmony default export */ const components_MovieList = (MovieList);

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(3193);
;// CONCATENATED MODULE: ./components/Landing.js



function Landing() {
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "text-gray-600 body-font",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container px-5 py-24 mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "xl:w-1/2 lg:w-3/4 w-full mx-auto text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "currentColor",
                            className: "inline-block w-8 h-8 text-gray-400 mb-8",
                            viewBox: "0 0 975.036 975.036",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "leading-relaxed text-gray-500 text-xs sm:text-lg",
                            children: "Nobody read these texts well if you still wish too then here you again . This is a web app where you can download hollywood torrents movies. i have added yts mx api but assholes did not added cors in their API so i have to make and host a proxy server. This app written which basic react and tailwind as my first project in react , some Component i copied from tailblocks not all just this section and footer section even logo too lol. i have added github repo in footer section. Switch to deploy branch for all codebase and if you are still reading this than sorry brother you just wasted your 30 sec of life just like rest of life lol"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-gray-900 font-medium title-font tracking-wider text-sm",
                            children: "LORD RISHU"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-gray-500",
                            children: "I made this shit"
                        })
                    ]
                })
            })
        })
    }));
}
/* harmony default export */ const components_Landing = (Landing);

// EXTERNAL MODULE: ./components/Spinner.js
var Spinner = __webpack_require__(6746);
;// CONCATENATED MODULE: ./components/SearchComp.js






const OpsErr = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: "text-sm text-center mt-4 text-gray-400",
        children: "Ops there is nothing out there:("
    }));
};
function SearchComp() {
    let [landing, setLanding] = (0,_.useState)(/*#__PURE__*/ jsx_runtime_.jsx(components_Landing, {}));
    let usrInp = (0,external_react_.useRef)();
    const getData = async (e)=>{
        e.preventDefault();
        setLanding(/*#__PURE__*/ jsx_runtime_.jsx(Spinner/* default */.Z, {}));
        const movies = await fetch("/api/get_movie_list", {
            method: "POST",
            body: JSON.stringify({
                query_term: usrInp.current.value,
                sort_by: "rating",
                limit: 40
            })
        });
        movies = await movies.json();
        if (movies.data.data.movie_count != 0) {
            setLanding(/*#__PURE__*/ jsx_runtime_.jsx(components_MovieList, {
                moviesdata: movies.data.data
            }));
        } else setLanding(/*#__PURE__*/ jsx_runtime_.jsx(OpsErr, {}));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: getData,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col my-4 items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-xl px-3 flex items-baseline gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                        id: "grid-password",
                                        type: "text",
                                        placeholder: "Search Your Movie",
                                        ref: usrInp
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
                                    onClick: getData,
                                    children: "Search"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-gray-600 text-xs italic align-center",
                            children: "Search your favorite hollywood movies and shows."
                        })
                    ]
                })
            }),
            landing
        ]
    }));
}; // Legacy codes


/***/ })

};
;