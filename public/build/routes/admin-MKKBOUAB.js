import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ChartColumn,
  CircleCheckBig,
  GraduationCap,
  LogOut,
  Trophy,
  UserRound,
  Users
} from "/build/_shared/chunk-A54RLQLH.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-GTUDTHRQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-3YJ7X6GQ.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/admin.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.tsx"
  );
  import.meta.hot.lastModified = "1743570810951.5125";
}
var meta = () => {
  return [{
    title: "\uCC45\uC787\uC218\uB2E4 - \uC120\uC0DD\uB2D8 \uAD00\uB9AC \uD398\uC774\uC9C0"
  }, {
    name: "description",
    content: "\uCC45\uC787\uC218\uB2E4 \uAD50\uC0AC\uC6A9 \uAD00\uB9AC \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4."
  }];
};
function AdminLandingPage() {
  _s();
  const data = useLoaderData();
  const getIcon = (iconName) => {
    const icons = {
      "GraduationCap": GraduationCap,
      "Trophy": Trophy,
      "BarChart3": ChartColumn,
      "Users": Users
    };
    return icons[iconName];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mb-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", onClick: () => window.history.back(), className: "mt-4 text-lg font-poorstory bg-white bg-opacity-80 text-purple-600 rounded-full px-6 shadow-md hover:shadow-lg border-2 border-purple-300 flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 16 }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-jua text-indigo-700", children: data.title }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-100 rounded-xl font-jua flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { size: 18 }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          "\uB85C\uADF8\uC544\uC6C3"
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none mb-8 rounded-2xl shadow-lg overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-4 top-4 opacity-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpen, { size: 64, strokeWidth: 1 }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "pt-8 pb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-poorstory", children: data.welcomeMessage }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm mt-4 opacity-80 font-poorstory", children: "\uD559\uC0DD\uB4E4\uC5D0\uAC8C \uC0C8\uB85C\uC6B4 \uB3C5\uC11C \uACBD\uD5D8\uC744 \uC120\uBB3C\uD574\uBCF4\uC138\uC694!" }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: data.cards.map((card, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: card.link, className: "block transform hover:scale-105 transition-all duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: `h-full rounded-2xl shadow-lg border-2 ${card.borderColor} overflow-hidden`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 ${card.color}` }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 116,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-5xl mb-4 flex justify-center", children: (() => {
          const IconComponent = getIcon(card.iconName);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { size: 56, className: "text-indigo-600", strokeWidth: 1.5 }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 121,
            columnNumber: 26
          }, this);
        })() }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 118,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-xl font-jua text-indigo-700", children: card.title }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 124,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 font-poorstory", children: card.description }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 127,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 126,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { className: "pt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: `w-full justify-start hover:text-indigo-700 rounded-xl text-indigo-600 font-poorstory flex items-center gap-1`, children: [
        "\uAD00\uB9AC\uD558\uAE30",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { size: 16 }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 132,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 130,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 129,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 115,
      columnNumber: 15
    }, this) }, index, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 114,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "col-span-2 rounded-2xl shadow-lg border-2 border-indigo-100 overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-gradient-to-r from-indigo-400 to-blue-300" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl font-jua text-indigo-700", children: "\uCD5C\uADFC \uD65C\uB3D9" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: data.recentActivities && data.recentActivities.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 146,
          columnNumber: 76
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-xl p-8 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 font-poorstory", children: "\uC544\uC9C1 \uD65C\uB3D9 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 149,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow hover:shadow-md font-jua flex items-center mx-auto gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { size: 18 }, void 0, false, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 151,
              columnNumber: 21
            }, this),
            "\uCCAB \uBC88\uC9F8 \uD65C\uB3D9 \uB9CC\uB4E4\uAE30"
          ] }, void 0, true, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 150,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 148,
          columnNumber: 26
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "rounded-2xl shadow-lg border-2 border-green-100 overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 bg-gradient-to-r from-green-400 to-emerald-300" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl font-jua text-green-700", children: "\uBE60\uB978 \uD1B5\uACC4" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-50 p-4 rounded-xl flex justify-between items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-700 font-jua", children: "\uC774\uBC88 \uB2EC \uC77D\uC740 \uCC45" }, void 0, false, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpen, { size: 20, className: "text-green-500" }, void 0, false, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 168,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold text-green-600 font-poorstory", children: "0 \uAD8C" }, void 0, false, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-50 p-4 rounded-xl flex justify-between items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-blue-700 font-jua", children: "\uCC38\uC5EC \uD559\uC0DD \uC218" }, void 0, false, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserRound, { size: 20, className: "text-blue-500" }, void 0, false, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 175,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold text-blue-600 font-poorstory", children: "0 \uBA85" }, void 0, false, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 176,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-purple-50 p-4 rounded-xl flex justify-between items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-purple-700 font-jua", children: "\uC644\uB8CC\uB41C \uB3C4\uC804\uACFC\uC81C" }, void 0, false, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trophy, { size: 20, className: "text-purple-500" }, void 0, false, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 182,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl font-bold text-purple-600 font-poorstory", children: "0 \uAC1C" }, void 0, false, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 183,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 181,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "mt-12 text-center py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 font-poorstory", children: "\xA9 2025 \uCC45\uC787\uC218\uB2E4 - \uBAA8\uB4E0 \uC120\uC0DD\uB2D8\uACFC \uD559\uC0DD\uC744 \uC704\uD55C \uB3C5\uC11C \uD50C\uB7AB\uD3FC" }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 192,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 191,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(AdminLandingPage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = AdminLandingPage;
var _c;
$RefreshReg$(_c, "AdminLandingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminLandingPage as default,
  meta
};
//# sourceMappingURL=/build/routes/admin-MKKBOUAB.js.map
