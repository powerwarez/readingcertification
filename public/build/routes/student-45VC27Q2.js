import {
  ArrowLeft,
  Book,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CircleHelp,
  Gamepad2,
  Hand,
  KeyRound,
  Palette,
  Rocket,
  Slot,
  User,
  cn,
  cva
} from "/build/_shared/chunk-A54RLQLH.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  Form
} from "/build/_shared/chunk-GTUDTHRQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-3YJ7X6GQ.js";
import {
  require_react_dom
} from "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ui/input.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/input.tsx"
  );
  import.meta.hot.lastModified = "1743567319849.5984";
}
var Input = React.forwardRef(_c = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type, className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/input.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
});
_c2 = Input;
Input.displayName = "Input";
var _c;
var _c2;
$RefreshReg$(_c, "Input$React.forwardRef");
$RefreshReg$(_c2, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/label.tsx
var React4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-label/dist/index.mjs
var React3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = React2.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var NAME = "Label";
var Label = React3.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea"))
          return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1)
          event.preventDefault();
      }
    }
  );
});
Label.displayName = NAME;
var Root = Label;

// app/components/ui/label.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/label.tsx"
  );
  import.meta.hot.lastModified = "1743567319883.8418";
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label2 = React4.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Root, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/label.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Label2;
Label2.displayName = Root.displayName;
var _c3;
var _c22;
$RefreshReg$(_c3, "Label$React.forwardRef");
$RefreshReg$(_c22, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/student.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/student.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/student.tsx"
  );
  import.meta.hot.lastModified = "1743568348818.3604";
}
var meta = () => {
  return [{
    title: "\uCC45\uC787\uC218\uB2E4 - \uD559\uC0DD \uB85C\uADF8\uC778"
  }, {
    name: "description",
    content: "\uCC45\uC787\uC218\uB2E4 \uD559\uC0DD \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4."
  }];
};
function StudentLogin() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-md w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-jua text-purple-600 mb-4", children: "\uC548\uB155, \uCE5C\uAD6C\uB4E4!" }, void 0, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-7xl mb-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Hand, { className: "text-purple-500", size: 80, strokeWidth: 1.5 }, void 0, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xl font-poorstory text-gray-700 rounded-full bg-white bg-opacity-70 py-2 px-4 shadow-md inline-block", children: [
        "\uCC45\uC787\uC218\uB2E4\uC5D0 ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-pink-500 font-bold", children: "\uC785\uC7A5" }, void 0, false, {
          fileName: "app/routes/student.tsx",
          lineNumber: 44,
          columnNumber: 19
        }, this),
        "\uD574\uBCFC\uAE4C\uC694?"
      ] }, void 0, true, {
        fileName: "app/routes/student.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card, { className: "rounded-3xl overflow-hidden shadow-xl border-4 border-pink-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-3 bg-gradient-to-r from-pink-400 to-purple-400" }, void 0, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardHeader, { className: "bg-gradient-to-b from-purple-50 to-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardTitle, { className: "text-2xl font-jua text-purple-600", children: "\uB85C\uADF8\uC778\uD558\uAE30" }, void 0, false, {
          fileName: "app/routes/student.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardDescription, { className: "text-lg font-poorstory", children: "\uBE44\uBC00 \uC5F4\uC1E0\uB85C \uB098\uB9CC\uC758 \uB3C5\uC11C \uC138\uACC4\uB97C \uC5F4\uC5B4\uBCF4\uC138\uC694!" }, void 0, false, {
          fileName: "app/routes/student.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { htmlFor: "studentId", className: "text-lg font-jua text-indigo-700", children: "\uB098\uC758 \uC544\uC774\uB514" }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(User, { className: "text-purple-300", size: 18 }, void 0, false, {
              fileName: "app/routes/student.tsx",
              lineNumber: 60,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/student.tsx",
              lineNumber: 59,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "studentId", name: "studentId", placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694", required: true, className: "pl-10 rounded-xl h-12 text-lg border-2 border-indigo-200 focus:border-indigo-400 font-poorstory" }, void 0, false, {
              fileName: "app/routes/student.tsx",
              lineNumber: 62,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { htmlFor: "password", className: "text-lg font-jua text-indigo-700", children: "\uBE44\uBC00 \uC554\uD638" }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(KeyRound, { className: "text-purple-300", size: 18 }, void 0, false, {
              fileName: "app/routes/student.tsx",
              lineNumber: 69,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/student.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { id: "password", name: "password", type: "password", placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694", required: true, className: "pl-10 rounded-xl h-12 text-lg border-2 border-indigo-200 focus:border-indigo-400 font-poorstory" }, void 0, false, {
              fileName: "app/routes/student.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "checkbox", id: "remember", className: "h-5 w-5 rounded border-purple-300 text-purple-600 focus:ring-purple-600" }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { htmlFor: "remember", className: "font-poorstory text-indigo-700", children: "\uB098\uB97C \uAE30\uC5B5\uD574\uC918!" }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardFooter, { className: "flex flex-col gap-4 bg-gradient-to-b from-white to-purple-50 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { className: "w-full h-14 text-xl font-jua rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\uBAA8\uD5D8 \uC2DC\uC791\uD558\uAE30!" }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Rocket, { size: 24 }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center text-indigo-700 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/help/login", className: "text-purple-500 hover:text-purple-700 hover:underline text-lg font-poorstory flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CircleHelp, { size: 16 }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "\uB3C4\uC6C0\uC774 \uD544\uC694\uD574\uC694!" }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-poorstory text-gray-700 bg-white bg-opacity-70 py-2 px-4 rounded-2xl shadow-md inline-block", children: "\uACC4\uC815\uC774 \uC5C6\uB2E4\uBA74 \uC120\uC0DD\uB2D8\uC5D0\uAC8C \uBB3C\uC5B4\uBCF4\uC138\uC694!" }, void 0, false, {
          fileName: "app/routes/student.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", onClick: () => window.history.back(), className: "mt-4 text-lg font-poorstory bg-white bg-opacity-80 text-purple-600 rounded-full px-6 shadow-md hover:shadow-lg border-2 border-purple-300 flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ArrowLeft, { size: 16 }, void 0, false, {
            fileName: "app/routes/student.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          "\uBA54\uC778 \uD398\uC774\uC9C0\uB85C \uB3CC\uC544\uAC00\uAE30"
        ] }, void 0, true, {
          fileName: "app/routes/student.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 flex justify-center space-x-8", children: [{
        icon: Book,
        delay: 0
      }, {
        icon: Gamepad2,
        delay: 0.1
      }, {
        icon: Palette,
        delay: 0.2
      }, {
        icon: Rocket,
        delay: 0.3
      }].map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "animate-bounce", style: {
        animationDelay: `${item.delay}s`
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(item.icon, { size: 32, className: "text-indigo-600", strokeWidth: 1.5 }, void 0, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 121,
        columnNumber: 17
      }, this) }, i, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 118,
        columnNumber: 31
      }, this)) }, void 0, false, {
        fileName: "app/routes/student.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/student.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c4 = StudentLogin;
var _c4;
$RefreshReg$(_c4, "StudentLogin");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentLogin as default,
  meta
};
//# sourceMappingURL=/build/routes/student-45VC27Q2.js.map
