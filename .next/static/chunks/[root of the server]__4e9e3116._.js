(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__4e9e3116._.js", {

"[next]/internal/font/google/bricolage_grotesque_782e3f7e.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "bricolage_grotesque_782e3f7e-module__SvI0Uq__className",
});
}}),
"[next]/internal/font/google/bricolage_grotesque_782e3f7e.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bricolage_grotesque_782e3f7e$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/bricolage_grotesque_782e3f7e.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bricolage_grotesque_782e3f7e$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Bricolage Grotesque', 'Bricolage Grotesque Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bricolage_grotesque_782e3f7e$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bricolage_grotesque_782e3f7e$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/bodoni_moda_27b8a2f3.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "bodoni_moda_27b8a2f3-module__klsHLa__className",
});
}}),
"[next]/internal/font/google/bodoni_moda_27b8a2f3.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_27b8a2f3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/bodoni_moda_27b8a2f3.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_27b8a2f3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Bodoni Moda', 'Bodoni Moda Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_27b8a2f3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_27b8a2f3$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/app/demo-5/hooks/useMousePositionRef.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMousePositionRef": (()=>useMousePositionRef)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useMousePositionRef = (containerRef)=>{
    _s();
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMousePositionRef.useEffect": ()=>{
            const updatePosition = {
                "useMousePositionRef.useEffect.updatePosition": (x, y)=>{
                    if (containerRef && containerRef.current) {
                        const rect = containerRef.current.getBoundingClientRect();
                        const relativeX = x - rect.left - rect.width / 2; // Center-relative X
                        const relativeY = y - rect.top - rect.height / 2; // Center-relative Y
                        positionRef.current = {
                            x: relativeX,
                            y: relativeY
                        };
                    } else {
                        positionRef.current = {
                            x,
                            y
                        }; // Fallback if no container
                    }
                }
            }["useMousePositionRef.useEffect.updatePosition"];
            const handleMouseMove = {
                "useMousePositionRef.useEffect.handleMouseMove": (ev)=>{
                    updatePosition(ev.clientX, ev.clientY);
                }
            }["useMousePositionRef.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "useMousePositionRef.useEffect.handleTouchMove": (ev)=>{
                    if (ev.touches.length > 0) {
                        const touch = ev.touches[0];
                        updatePosition(touch.clientX, touch.clientY);
                    }
                }
            }["useMousePositionRef.useEffect.handleTouchMove"];
            // Listen for both mouse and touch events
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("touchmove", handleTouchMove);
            return ({
                "useMousePositionRef.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("touchmove", handleTouchMove);
                }
            })["useMousePositionRef.useEffect"];
        }
    }["useMousePositionRef.useEffect"], [
        containerRef
    ]);
    return positionRef;
};
_s(useMousePositionRef, "wdm/GIdX7aVuOs+0pdbCxBOBD6o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/demo-5/components/Floating.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FloatingElement": (()=>FloatingElement),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$hooks$2f$useMousePositionRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/demo-5/hooks/useMousePositionRef.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const FloatingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const cn = (...classes)=>{
    return classes.filter(Boolean).join(" ");
};
const Floating = ({ children, className, sensitivity = 1, easingFactor = 0.05, ...props })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const mousePositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$hooks$2f$useMousePositionRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePositionRef"])(containerRef);
    const registerElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Floating.useCallback[registerElement]": (id, element, depth)=>{
            elementsMap.current.set(id, {
                element,
                depth,
                currentPosition: {
                    x: 0,
                    y: 0
                }
            });
        }
    }["Floating.useCallback[registerElement]"], []);
    const unregisterElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Floating.useCallback[unregisterElement]": (id)=>{
            elementsMap.current.delete(id);
        }
    }["Floating.useCallback[unregisterElement]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "Floating.useAnimationFrame": ()=>{
            if (!containerRef.current) return;
            elementsMap.current.forEach({
                "Floating.useAnimationFrame": (data)=>{
                    const strength = data.depth * sensitivity / 20;
                    // Calculate new target position
                    const newTargetX = mousePositionRef.current.x * strength;
                    const newTargetY = mousePositionRef.current.y * strength;
                    // Check if we need to update
                    const dx = newTargetX - data.currentPosition.x;
                    const dy = newTargetY - data.currentPosition.y;
                    // Update position only if we're still moving
                    data.currentPosition.x += dx * easingFactor;
                    data.currentPosition.y += dy * easingFactor;
                    data.element.style.transform = `translate3d(${data.currentPosition.x}px, ${data.currentPosition.y}px, 0)`;
                }
            }["Floating.useAnimationFrame"]);
        }
    }["Floating.useAnimationFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingContext.Provider, {
        value: {
            registerElement,
            unregisterElement
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: cn("absolute top-0 left-0 w-full h-full", className),
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/demo-5/components/Floating.js",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/demo-5/components/Floating.js",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_s(Floating, "kj3HQewE1oM0oZrdxaBLZDJl+Ow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$hooks$2f$useMousePositionRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMousePositionRef"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"]
    ];
});
_c = Floating;
const __TURBOPACK__default__export__ = Floating;
const FloatingElement = ({ children, className, depth = 1 })=>{
    _s1();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.random().toString(36).substring(7));
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FloatingContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingElement.useEffect": ()=>{
            if (!elementRef.current || !context) return;
            const nonNullDepth = depth ?? 0.01;
            context.registerElement(idRef.current, elementRef.current, nonNullDepth);
            return ({
                "FloatingElement.useEffect": ()=>context.unregisterElement(idRef.current)
            })["FloatingElement.useEffect"];
        }
    }["FloatingElement.useEffect"], [
        depth,
        context
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        className: cn("absolute will-change-transform", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/app/demo-5/components/Floating.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
};
_s1(FloatingElement, "iyJ8rPZfWFQSr9mfNiY+5TowXfA=");
_c1 = FloatingElement;
var _c, _c1;
__turbopack_context__.k.register(_c, "Floating");
__turbopack_context__.k.register(_c1, "FloatingElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/demo-5/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bricolage_grotesque_782e3f7e$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/bricolage_grotesque_782e3f7e.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_27b8a2f3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/bodoni_moda_27b8a2f3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/demo-5/components/Floating.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const Demo5 = ()=>{
    _s();
    const subscribeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSubscribeButton = (e)=>{
        e.preventDefault();
        const target = subscribeRef.current;
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
            const input = target.querySelector("input");
            setTimeout(()=>{
                if (input) input.focus();
            }, 450);
        }
    };
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // START :: Subscribe button
    const [buttonState, setButtonState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isValidEmail = (email)=>{
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };
    const buttonCopy = {
        idle: "Subscribe",
        loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent mx-auto"
        }, void 0, false, {
            fileName: "[project]/app/demo-5/page.js",
            lineNumber: 50,
            columnNumber: 7
        }, this),
        success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-[var(--primary)] flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "3",
                        d: "M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11",
                        color: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 54,
                        columnNumber: 92
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/demo-5/page.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Done"
                }, void 0, false, {
                    fileName: "[project]/app/demo-5/page.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/demo-5/page.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (buttonState === "success") return;
        if (!isValidEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }
        setError("");
        setButtonState("loading");
        setTimeout(()=>{
            setButtonState("success");
            console.log("Collected Email:", email);
        }, 1750);
        setTimeout(()=>{
            // setButtonState("idle")
            setEmail("");
        }, 3500);
    };
    // END :: Subscribe button
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `main-content-5 ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bricolage_grotesque_782e3f7e$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} w-full overflow-hidden`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    opacity: 0,
                    translateY: -60
                },
                animate: {
                    opacity: 1,
                    translateY: 0
                },
                transition: {
                    duration: 0.3,
                    delay: 1
                },
                className: "fixed w-full top-0 z-[5000] py-3 sm:py-5 px-5 bg-linear-to-t from-[var(--bg)]/0 to-[var(--bg)]/90 backdrop-blur-[1px] origin-top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap md:justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "font-bold text-2xl",
                                    href: "/",
                                    "aria-label": "Logo",
                                    children: "Slink & CO"
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${menuOpen ? "flex bg-white rounded-lg" : "hidden md:flex"} order-last md:order-none w-full mt-2 md:mt-0 py-6 md:py-0 flex flex-col md:flex-row md:w-1/3 text-center gap-4 md:gap-12 justify-center items-center transition-all duration-300`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none",
                                        children: "Resources"
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/3 text-end ml-auto md:ml-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "hover:scale-[1.03] transition duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-11 w-auto",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 120.7 41",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "#A6A6A6",
                                                    d: "M110.1 0H7.5l-2 .2A7 7 0 0 0 2 2 6 6 0 0 0 .2 5.5l-.2 2v25l.2 2A7 7 0 0 0 2 38a6 6 0 0 0 3.5 1.8l3 .2h102.7l3-.2a7 7 0 0 0 3.5-1.8 6 6 0 0 0 1.8-3.5l.2-2v-25l-.2-2a7 7 0 0 0-1.8-3.5A6 6 0 0 0 114 .2l-2-.2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/demo-5/page.js",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8.4 39.1 5.7 39a6 6 0 0 1-3-1.6 5 5 0 0 1-1.6-3l-.2-2.9v-24l.2-1.8a6 6 0 0 1 1.5-3 6 6 0 0 1 3-1.6l2-.2h104.6l1.8.2 1.7.5a6 6 0 0 1 3 4v28.7a6 6 0 0 1-1.6 3A5 5 0 0 1 114 39l-2.8.1z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/demo-5/page.js",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M24.8 20.3c0-2.8 2.2-4 2.3-4.2a5 5 0 0 0-4-2.1c-1.6-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-1q-3 .1-4.5 2.8c-2 3.3-.5 8.2 1.4 11 .9 1.3 2 2.7 3.4 2.7s1.9-.9 3.6-.9c1.6 0 2.1.9 3.5.9 1.5 0 2.5-1.4 3.4-2.7 1-1.5 1.5-3 1.5-3.1 0 0-2.9-1.1-3-4.4M22 12.2q1.3-1.5 1.2-3.5a5 5 0 0 0-3.3 1.7c-.6.8-1.3 2.1-1.1 3.3q2 0 3.2-1.5m20.3 14.9h-4.7l-1.2 3.4h-2L39 18.1h2l4.6 12.4h-2zm-4.2-1.5h3.7L40 20zm17.1.4c0 2.8-1.5 4.6-3.8 4.6q-2 0-2.9-1.6v4.5h-1.9v-12h1.8v1.4q1-1.6 3-1.6c2.2 0 3.8 1.9 3.8 4.7m-2 0q-.1-3-2.3-3-2.3.1-2.4 3 .1 2.9 2.4 3 2.2-.1 2.4-3m11.8 0q-.2 4.4-3.8 4.6-2 0-2.8-1.6v4.5h-1.9v-12h1.8v1.4q.8-1.6 3-1.6c2.2 0 3.7 1.9 3.7 4.7m-1.9 0q-.1-3-2.4-3-2.2.1-2.4 3 .2 2.9 2.4 3 2.3-.1 2.4-3m8.5 1q.3 2 3 2c1.5 0 2.7-.7 2.7-1.8q0-1.5-2.3-2l-1.6-.4q-3.4-.7-3.4-3.3c0-2.2 1.9-3.6 4.6-3.6s4.4 1.4 4.4 3.6h-1.8q-.4-2-2.7-2c-2.3 0-2.5.8-2.5 1.9q0 1.2 2.3 1.7l1.3.4q3.8.8 3.6 3.4-.2 3.6-4.8 3.8c-2.7 0-4.6-1.4-4.7-3.7zm11.6-7.7v2.1h1.8V23h-1.8v5q0 1.2 1.1 1.1h.7v1.5h-1q-2.8.1-2.6-2.4V23h-1.3v-1.5h1.3v-2.1zM86 26q.2-4.5 4.4-4.7c2.6 0 4.3 1.8 4.3 4.7 0 2.8-1.7 4.6-4.3 4.6-2.7 0-4.3-1.8-4.3-4.6m6.8 0q-.1-3-2.4-3.1c-2.3-.1-2.4 1.1-2.4 3q0 3.1 2.4 3.2c2.4 0 2.4-1.2 2.4-3.1m3.3-4.6H98V23q.5-1.6 2.2-1.7l.6.1v1.8l-.8-.2q-1.9.1-2 2.1v5.4h-1.8zm13.2 6.4c-.3 1.7-1.9 2.8-4 2.8-2.5 0-4.2-1.8-4.2-4.6s1.7-4.7 4.2-4.7 4 1.8 4 4.5v.6h-6.3v.1q.1 2.5 2.4 2.6 1.7 0 2.1-1.3zm-6.3-2.7h4.5q-.1-2.2-2.2-2.3-2 .2-2.3 2.3M38 8.7q1.9.1 2 2-.2 1.9-2 2h-1.4v2h-1v-6zM36.6 12h1.2q1.2 0 1.2-1.2t-1.2-1.2h-1.2zm4.6-1.8h.8v.7h.1q.2-.8 1.2-.8h.4v1l-.5-.1q-1 0-1.1 1v2.7h-1zm7.2 3.3q-.4 1.3-2 1.3-1.9-.1-2-2.3.1-2.3 2-2.4 2 .1 2 2.3v.3h-3.1q0 1.3 1.2 1.3.8 0 1-.5zM45.3 12h2.2q0-1-1-1.1-1.1 0-1.2 1.1m4.4.7V12h2.7v.8zm3.9-.3q0-2.2 2.1-2.3 2 .1 2.1 2.3 0 2.3-2.1 2.4-2 0-2.1-2.4m3.3 0q0-1.5-1.2-1.5t-1.2 1.5 1.2 1.6 1.2-1.6m2.1-2.2h.9v.7q.4-.8 1.3-.8h.4v1L61 11q-1.1 0-1.2 1v2.7H59zm3.2 2.2q0-2.2 1.9-2.3 1 0 1.3.8h.1V8.4h.9v6.3h-.9V14q-.5.8-1.4.8-1.8-.2-1.9-2.4m1 0q0 1.6 1.1 1.6t1.2-1.6-1.2-1.5q-1.1 0-1.2 1.5m8.6 1.1q-.4 1.3-2 1.3-2-.1-2-2.3 0-2.3 2-2.4 2 .1 2 2.3v.3h-3.2q0 1.3 1.2 1.3 1 0 1.1-.5zM68.5 12h2.3q0-1-1-1.1-1.2 0-1.3 1.1m4.5-1.8h.8v.7q.4-.8 1.3-.8h.3v1L75 11q-1.1 0-1.2 1v2.7h-.9zm5.6 2.2q.1-2.2 2.2-2.3 2 .1 2.1 2.3 0 2.3-2.1 2.4-2 0-2.2-2.4m3.4 0q0-1.5-1.2-1.5t-1.2 1.5 1.2 1.6q1.1 0 1.2-1.6m2-2.2h1v.7q.3-.8 1.4-.8 1.5 0 1.5 1.7v2.9H87V12q0-1-1-1c-1 0-1 .4-1 1v2.7h-1zM93 9v1.2h1v.8h-1v2.3q0 .7.6.7h.3v.7h-.5q-1.4 0-1.4-1.2V11h-.7v-.8h.7V9.1zm2.1-.6h.9V11q.5-.8 1.4-.8 1.5 0 1.6 1.7v2.9h-.9V12q0-1-1-1t-1 1v2.7h-1zm9.1 5.1q-.4 1.3-2 1.3-2-.1-2-2.3.1-2.3 2-2.4 2 .1 2 2.3v.3h-3.1q0 1.3 1.2 1.3.8 0 1-.5zM101 12h2.2q0-1-1-1.1-1.1 0-1.2 1.1",
                                                    fill: "#FFF"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/demo-5/page.js",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/demo-5/page.js",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cursor-pointer block md:hidden text-black ml-4 relative w-6 h-6",
                                type: "button",
                                "aria-label": "Open Menu",
                                title: "Open Menu",
                                onClick: ()=>setMenuOpen(!menuOpen),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 6 6 18"
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 123,
                                                columnNumber: 237
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m6 6 12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 123,
                                                columnNumber: 259
                                            }, this)
                                        ]
                                    }, "open", true, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "4",
                                                x2: "20",
                                                y1: "12",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 129,
                                                columnNumber: 238
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "4",
                                                x2: "20",
                                                y1: "6",
                                                y2: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 129,
                                                columnNumber: 276
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "4",
                                                x2: "20",
                                                y1: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 129,
                                                columnNumber: 312
                                            }, this)
                                        ]
                                    }, "close", true, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/demo-5/page.js",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/demo-5/page.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative max-w-[1410px] mx-auto h-screen max-h-[1000px] flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "z-50 text-center space-y-4 items-center flex flex-col px-6",
                        initial: {
                            opacity: 0,
                            scale: 1.1
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            visualDuration: 0.4,
                            bounce: 0.3,
                            delay: 0.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl md:text-6xl leading-[1.2] mb-4 md:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Slink Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `!italic uppercase text-3xl md:text-5xl ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$bodoni_moda_27b8a2f3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                                                children: "Launching"
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            " SOON"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "md:text-lg mb-6 md:mb-8 text-balance text-black/75",
                                children: "Placehold your website with Slink."
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSubscribeButton,
                                className: "cursor-pointer bg-[var(--primary)] inline-block text-white px-7 py-3 rounded-lg hover:brightness-115 transition duration-300",
                                children: "Join the waitlist"
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sensitivity: -0.5,
                        className: "no-transform-mobile [&_img]:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                                depth: 1.5,
                                className: "top-[12%] lg:top-[16%] start-3 lg:start-[10%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.5,
                                        y: -100,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        visualDuration: 0.4,
                                        bounce: 0.3,
                                        delay: 0.3 + 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/demo-5/01.jpg",
                                        alt: "01",
                                        className: "d-block w-16 lg:w-36 aspect-square object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg",
                                        height: 100,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                                depth: 2,
                                className: "top-20 lg:top-[-5%] end-[-5%] lg:end-[13%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.5,
                                        y: -100,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        visualDuration: 0.4,
                                        bounce: 0.3,
                                        delay: 0.3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/demo-5/06.jpg",
                                        alt: "03",
                                        className: "d-block w-26 lg:w-40 aspect-[4/5] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg",
                                        height: 100,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                                depth: 1.75,
                                className: "bottom-10 sm:bottom-25 start-[8%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.5,
                                        y: 100,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        visualDuration: 0.4,
                                        bounce: 0.3,
                                        delay: 0.3 + 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/demo-5/04.jpg",
                                        alt: "04",
                                        className: "d-block w-20 lg:w-36 aspect-[4/5] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg",
                                        height: 100,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                                depth: 2.5,
                                className: "bottom-0 lg:bottom-[-5%] start-[15%] hidden sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.5,
                                        y: 100,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        visualDuration: 0.4,
                                        bounce: 0.3,
                                        delay: 0.3 + 0.35
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/demo-5/03.jpg",
                                        alt: "05",
                                        className: "d-block w-26 lg:w-46 aspect-[8/10] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg",
                                        height: 100,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                                depth: 1,
                                className: "bottom-[-7%] start-[40%] lg:start-[45%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.5,
                                        y: 100,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        visualDuration: 0.4,
                                        bounce: 0.3,
                                        delay: 0.3 + 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/demo-5/07.jpg",
                                        alt: "07",
                                        className: "d-block w-20 lg:w-32 aspect-[8/10] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg",
                                        height: 100,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                                depth: 1.75,
                                className: "bottom-[5%] end-[17%] hidden sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.5,
                                        y: 100,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        visualDuration: 0.4,
                                        bounce: 0.3,
                                        delay: 0.3 + 0.25
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/demo-5/02.jpg",
                                        alt: "08",
                                        className: "d-block w-18 lg:w-28 aspect-square object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg",
                                        height: 100,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$demo$2d$5$2f$components$2f$Floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                                depth: 2.5,
                                className: "bottom-10 md:bottom-[10%] end-[6%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.5,
                                        y: 100,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        visualDuration: 0.4,
                                        bounce: 0.3,
                                        delay: 0.3 + 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/demo-5/05.jpg",
                                        alt: "06",
                                        className: "d-block w-24 lg:w-42 aspect-[8/12] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg",
                                        height: 100,
                                        width: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo-5/page.js",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-30 pb-16 px-6",
                style: {
                    background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.05) 100%, rgba(255,255,255,0) 100%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl sm:text-3xl mb-6 sm:mb-8 leading-snug max-w-[550px] mx-auto text-balance text-center",
                        children: "Join our newsletter to be the first to know when Slink launches."
                    }, void 0, false, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        ref: subscribeRef,
                        onSubmit: handleSubmit,
                        className: "max-w-96 mx-auto border-2 border-transparent focus-within:border-[var(--primary)] rounded-[10px] group transition duration-200 shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "peer text-sm sm:text-base bg-white text-black block w-full h-12 ps-4 focus:outline-none focus:bg-white focus:text-black transition duration-200 focus:placeholder:text-black/50 rounded-s-lg",
                                    type: "email",
                                    name: "email",
                                    id: "email",
                                    placeholder: "eg: alex@email.com",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cursor-pointer text-sm sm:text-base bg-white text-black hover:text-[var(--primary)] peer-focus:text-[var(--primary)] px-5 flex-1 h-12 w-full transition duration-200 focus:outline-none focus:shadow-none relative after:absolute after:content-[''] after:h-4 after:w-px after:left-0 after:top-[calc(50%-8px)] after:bg-black/25 rounded-e-lg overflow-clip",
                                    type: "submit",
                                    "aria-label": "Submit notify email",
                                    disabled: buttonState === "loading",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "popLayout",
                                        initial: false,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "flex items-center gap-2",
                                            transition: {
                                                type: "spring",
                                                duration: 0.3,
                                                bounce: 0
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: -25
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 25
                                            },
                                            children: buttonCopy[buttonState]
                                        }, buttonState, false, {
                                            fileName: "[project]/app/demo-5/page.js",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo-5/page.js",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/demo-5/page.js",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-dark text-xs mt-2 text-center",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 350,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo-5/page.js",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "px-8 py-8 mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:flex-row flex-col justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2 text-center md:text-start order-2 md:order-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-balance inline-block",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " by Slink — Developed by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0",
                                            href: "https://themeforest.net/user/platol/portfolio",
                                            "aria-label": "Slink",
                                            children: "Platol"
                                        }, void 0, false, {
                                            fileName: "[project]/app/demo-5/page.js",
                                            lineNumber: 358,
                                            columnNumber: 125
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2 mb-6 md:mb-0 order-1 md:order-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex items-center justify-center md:justify-end flex-wrap gap-4 [&_li]:leading-[0] [&_a]:bg-white [&_a]:rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "hover:scale-105 transition duration-200 inline-block p-3",
                                                href: "#",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 512 512",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/demo-5/page.js",
                                                        lineNumber: 364,
                                                        columnNumber: 119
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/demo-5/page.js",
                                                    lineNumber: 364,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/demo-5/page.js",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "hover:scale-105 transition duration-200 inline-block p-3",
                                                href: "#",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 512 512",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/demo-5/page.js",
                                                        lineNumber: 369,
                                                        columnNumber: 119
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/demo-5/page.js",
                                                    lineNumber: 369,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/demo-5/page.js",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "hover:scale-105 transition duration-200 inline-block p-3",
                                                href: "#",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 448 512",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/demo-5/page.js",
                                                        lineNumber: 374,
                                                        columnNumber: 119
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/demo-5/page.js",
                                                    lineNumber: 374,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/demo-5/page.js",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/demo-5/page.js",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/demo-5/page.js",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo-5/page.js",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo-5/page.js",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/demo-5/page.js",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/demo-5/page.js",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo-5/page.js",
        lineNumber: 85,
        columnNumber: 5
    }, this);
};
_s(Demo5, "usmoBJ6S87TMNmTTmig+b1I0akc=");
_c = Demo5;
const __TURBOPACK__default__export__ = Demo5;
var _c;
__turbopack_context__.k.register(_c, "Demo5");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__4e9e3116._.js.map