/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, useEffect, useRef, useImperativeHandle, useMemo,
// @ts-ignore
 } from "react";
import HC from "highcharts/esm/highcharts.src.js";
// Add data-hc-option to allowed attributes
if (HC.AST.allowedAttributes.indexOf("data-hc-option") === -1) {
    HC.AST.allowedAttributes.push("data-hc-option");
}
export let Highcharts = HC;
export const Logger = {
    logLevel: "silent",
    log(...content) {
        if (this.logLevel === "debug") {
            console.log(...content);
        }
    },
};
/**
 * Sets the global Highcharts reference.
 *
 * If no argument is provided, resets Highcharts to the default instance.
 */
export function setHighcharts(newHC) {
    if (newHC === undefined) {
        Highcharts = HC;
        delete Highcharts.__provided;
        return;
    }
    Highcharts = newHC;
    Highcharts.__provided = true;
}
/**
 * Returns the current global Highcharts reference.
 *
 */
export function getHighcharts() {
    return Highcharts;
}
const toArr = (thing) => (Array.isArray(thing) ? thing.flat() : [thing]);
function getChildProps(children, renderHTML = undefined) {
    const optionsFromChildren = {};
    /** Insert value into object by dot.notation path */
    function objInsert(obj, path, value = null) {
        const keys = path.split(".");
        let current = obj;
        for (let i = 0; i < keys.length - 1; i++) {
            const k = keys[i];
            if (!current[k])
                current[k] = {};
            current = current[k];
        }
        current[keys[keys.length - 1]] = value;
        return obj;
    }
    function renderChildren(arr) {
        return renderHTML
            ? renderHTML(arr)
            : arr.filter((c) => typeof c === "string").join("");
    }
    /** Type guard for React elements with meta */
    function isReactElementWithMeta(value) {
        return (typeof value === "object" &&
            value !== null &&
            "$$typeof" in value &&
            "props" in value);
    }
    function updateChildMeta(childMeta, parentMeta) {
        return Object.assign(Object.assign({}, childMeta), { childOption: parentMeta.childOption
                ? `${parentMeta.childOption}.${childMeta.childOption}`
                : childMeta.childOption, HCOption: parentMeta.HCOption
                ? `${parentMeta.HCOption}.${childMeta.HCOption}`
                : childMeta.HCOption });
    }
    /** Handles the Series component passed as a child. */
    function handleSeriesChild(child, series) {
        var _a, _b, _c, _d;
        if (!isReactElementWithMeta(child)) {
            return;
        }
        const _e = (_a = child.props) !== null && _a !== void 0 ? _a : {}, { children, options, type, data } = _e, seriesObj = __rest(_e, ["children", "options", "type", "data"]);
        series.push(Object.assign({
            type: type !== null && type !== void 0 ? type : (_d = (_c = (_b = child.type) === null || _b === void 0 ? void 0 : _b._HCReact) === null || _c === void 0 ? void 0 : _c.HCOption) === null || _d === void 0 ? void 0 : _d.replace("series.", ""),
            data: data || [],
        }, seriesObj, options, children && getChildProps(children, renderHTML)));
    }
    function handleChildren(children, obj, meta) {
        var _a, _b, _c;
        if (!children)
            return;
        if (meta.childOption === "series") {
            const series = [];
            const childArray = Array.isArray(children) ? children : [children];
            for (const child of childArray) {
                handleSeriesChild(child, series);
            }
            if (series.length > 0) {
                objInsert(obj, "series", series);
            }
            return;
        }
        if (Array.isArray(children) &&
            children.some((c) => { var _a; return (_a = c === null || c === void 0 ? void 0 : c.props) === null || _a === void 0 ? void 0 : _a["data-hc-option"]; })) {
            const lostChildren = [];
            for (const child of children) {
                const optKey = (_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a["data-hc-option"];
                if (optKey) {
                    objInsert(obj, optKey, renderChildren([child]));
                }
                else {
                    lostChildren.push(child);
                }
            }
            if (lostChildren.length && meta.childOption) {
                objInsert(obj, meta.childOption, renderChildren(lostChildren));
            }
            return;
        }
        const nonOptionChildren = [];
        if (Array.isArray(children)) {
            for (const c of children) {
                if ((_b = c === null || c === void 0 ? void 0 : c.type) === null || _b === void 0 ? void 0 : _b._HCReact) {
                    const childMeta = c.type._HCReact;
                    c.type._HCReact = updateChildMeta(childMeta, meta);
                    handleChild(c);
                    continue;
                }
                nonOptionChildren.push(c);
            }
        }
        else {
            const c = children;
            if ((_c = c === null || c === void 0 ? void 0 : c.type) === null || _c === void 0 ? void 0 : _c._HCReact) {
                const childMeta = c.type._HCReact;
                c.type._HCReact = updateChildMeta(childMeta, meta);
                handleChild(c);
            }
            else {
                nonOptionChildren.push(c);
            }
        }
        if (meta.childOption) {
            const childrenToRender = nonOptionChildren.length > 0 ? nonOptionChildren : [children];
            objInsert(obj, meta.childOption, renderChildren(childrenToRender));
        }
    }
    function handleChild(child) {
        var _a, _b, _c, _d;
        var _e;
        if (!child || typeof child !== "object")
            return;
        const meta = (_a = child.type) === null || _a === void 0 ? void 0 : _a._HCReact;
        if (!(meta === null || meta === void 0 ? void 0 : meta.HCOption))
            return;
        const optionParent = ((_b = optionsFromChildren[_e = meta.HCOption]) !== null && _b !== void 0 ? _b : (optionsFromChildren[_e] = meta.isArrayType ? [] : {}));
        const parentIsArray = Array.isArray(optionParent);
        const insertInto = parentIsArray ? {} : optionParent;
        const _f = (_c = child.props) !== null && _c !== void 0 ? _c : {}, { children: childChildren } = _f, props = __rest(_f, ["children"]);
        if (meta.defaultOptions)
            Object.assign(insertInto, meta.defaultOptions);
        Object.assign(insertInto, props);
        if (typeof childChildren === "string" && meta.childOption) {
            objInsert(insertInto, meta.childOption, childChildren);
        }
        else if (Array.isArray(childChildren)) {
            handleChildren(childChildren, insertInto, meta);
        }
        else if (isReactElementWithMeta(childChildren) && renderHTML) {
            if (((_d = childChildren.props) === null || _d === void 0 ? void 0 : _d.children) &&
                Object.keys(childChildren.props).length === 1) {
                handleChildren(childChildren.props.children, insertInto, meta);
            }
            else if (meta.childOption) {
                objInsert(insertInto, meta.childOption, renderHTML(childChildren));
            }
        }
        if (parentIsArray) {
            optionsFromChildren[meta.HCOption].push(insertInto);
        }
    }
    if (Array.isArray(children)) {
        children.flat().forEach((c) => handleChild(c));
    }
    else {
        handleChild(children);
    }
    return optionsFromChildren;
}
function renderToHTML(el) {
    // React prop names to their HTML attribute equivalents map.
    const ATTR_MAP = {
        className: "class",
        htmlFor: "for",
        tabIndex: "tabindex",
        colSpan: "colspan",
        rowSpan: "rowspan",
        dateTime: "datetime",
        readOnly: "readonly",
        maxLength: "maxlength",
        minLength: "minlength",
    };
    // HTML void elements that don't have closing tags.
    const VOID_TAGS = new Set([
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
    ]);
    // HTML entity escape map.
    const ESC_MAP = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    };
    // Escapes special HTML characters in text content.
    function esc(s) {
        return s.replace(/[&<>"']/g, (c) => ESC_MAP[c]);
    }
    // Escapes special characters in attribute values (only quotes & ampersands).
    function escAttr(s) {
        return s.replace(/["&]/g, (c) => ESC_MAP[c]);
    }
    // Maps React prop names to HTML attribute names.
    function mapAttrName(k) {
        const name = ATTR_MAP[k] || k;
        // Handle data-* and aria-* attributes.
        if (name.startsWith("data-") || name.startsWith("aria-")) {
            return name.toLowerCase();
        }
        // Handle data-* and aria-* like camelCase props.
        if (name.startsWith("data") || name.startsWith("aria")) {
            return name.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        }
        return name;
    }
    // Recursively renders an element and its children to HTML.
    function render(el) {
        var _a;
        // Return empty string for null/undefined, booleans, and non-React elements.
        if (el === null || el === undefined || typeof el === "boolean") {
            return "";
        }
        // Return escaped string for strings.
        if (typeof el === "string") {
            return esc(el);
        }
        // Return stringified number for numbers.
        if (typeof el === "number") {
            return String(el);
        }
        // Return concatenated string for arrays.
        if (Array.isArray(el)) {
            return el.map(render).join("");
        }
        const element = el;
        // Return empty string for unknown element types.
        if (!(element === null || element === void 0 ? void 0 : element.$$typeof)) {
            return "";
        }
        // Call function components with props and render the result.
        if (typeof element.type === "function") {
            return render(element.type(element.props || {}));
        }
        // Render fragment components.
        if (element.type === Symbol.for("react.fragment")) {
            return render((_a = element.props) === null || _a === void 0 ? void 0 : _a.children);
        }
        // Render DOM elements (HTML tags).
        if (typeof element.type === "string") {
            const _b = element.props || {}, { children, key, ref, dangerouslySetInnerHTML, suppressContentEditableWarning, suppressHydrationWarning } = _b, props = __rest(_b, ["children", "key", "ref", "dangerouslySetInnerHTML", "suppressContentEditableWarning", "suppressHydrationWarning"]);
            const tag = element.type;
            const attrs = [];
            // Build attribute string from props.
            for (const [k, v] of Object.entries(props)) {
                // Skip null or undefined values.
                if (v === null || v === undefined) {
                    continue;
                }
                // Skip event handlers (onClick, onChange, etc.).
                if (k.startsWith("on") && typeof v === "function") {
                    continue;
                }
                // Only add boolean attributes if true.
                if (typeof v === "boolean") {
                    if (v) {
                        attrs.push(mapAttrName(k));
                    }
                    continue;
                }
                // Convert style objects to CSS string.
                if (k === "style" && typeof v === "object" && !Array.isArray(v)) {
                    const css = Object.entries(v)
                        .filter(([_, val]) => val != null)
                        .map(([p, val]) => {
                        const prop = p.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
                        return `${prop}:${val}`;
                    })
                        .join(";");
                    if (css)
                        attrs.push(`style="${escAttr(css)}"`);
                    continue;
                }
                // Map React names to HTML and handle data-/aria- attributes.
                attrs.push(`${mapAttrName(k)}="${escAttr(String(v))}"`);
            }
            const attrsStr = attrs.length ? " " + attrs.join(" ") : "";
            // Void elements are self-closing (no children, no closing tag).
            if (VOID_TAGS.has(tag)) {
                return `<${tag}${attrsStr}>`;
            }
            // Regular elements with content.
            const content = typeof dangerouslySetInnerHTML === "object" &&
                dangerouslySetInnerHTML !== null &&
                "__html" in dangerouslySetInnerHTML &&
                dangerouslySetInnerHTML.__html != null
                ? String(dangerouslySetInnerHTML.__html)
                : render(children);
            return `<${tag}${attrsStr}>${content}</${tag}>`;
        }
        return "";
    }
    return render(el);
}
// React v20+ notice: forwardRef will be removed
// https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop
export const Chart = forwardRef(function Chart(props, ref) {
    if (props.highcharts) {
        setHighcharts(props.highcharts);
    }
    const renderHTML = useMemo(() => {
        var _a;
        return (_a = props.renderToHTML) !== null && _a !== void 0 ? _a : renderToHTML;
    }, [props.renderToHTML]);
    const chartConfig = useMemo(() => Highcharts.merge(Object.assign({
        title: { text: props.title || undefined },
        chart: { allowMutatingData: false },
    }, props.options || {}), Object.assign({ series: props.children
            ? toArr(props.children)
                .filter((c) => { var _a; return ((_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a.type) === "Series"; })
                .map((c) => {
                var _a, _b, _c;
                const { children, type, id, className, data, options } = c.props;
                return Highcharts.merge(Object.assign(Object.assign({ type: type !== null && type !== void 0 ? type : (_c = (_b = (_a = c.type) === null || _a === void 0 ? void 0 : _a._HCReact) === null || _b === void 0 ? void 0 : _b.HCOption) === null || _c === void 0 ? void 0 : _c.replace("series.", ""), data: data || [] }, (id && { id })), (className && { className })), Object.assign(Object.assign({}, (options || {})), getChildProps(children, renderHTML)));
            })
            : [] }, getChildProps(props.children, renderHTML)), props.options || {}), [props.children, props.options, renderHTML]);
    const containerRef = useRef();
    const chartRef = useRef();
    useImperativeHandle(ref, () => ({
        get chart() {
            return chartRef.current;
        },
        get container() {
            return containerRef.current;
        },
    }), []);
    // Update the chart on render
    useEffect(() => {
        Logger.log(JSON.stringify(chartConfig, undefined, "  "));
        /** Append prop to chart config */
        const appendProps = (config) => {
            var _a;
            var _b;
            (_a = (_b = config.title).text) !== null && _a !== void 0 ? _a : (_b.text = props.title);
        };
        /** Append series to chart config */
        const appendSeries = () => {
            // config: HC.Options
            if (props.children) {
                const children = toArr(props.children).filter((c) => { var _a; return ((_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a.type) === "Series"; });
                children.forEach((c, i) => {
                    var _a, _b, _c;
                    if (c.props) {
                        const _d = c.props, { children, type, options } = _d, otherProps = __rest(_d, ["children", "type", "options"]);
                        if (options) {
                            chartConfig.series[i] = Highcharts.merge(chartConfig.series[i], options);
                        }
                        chartConfig.series[i] = Highcharts.merge(chartConfig.series[i], Object.assign(Object.assign({ type: type !== null && type !== void 0 ? type : (_c = (_b = (_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a._HCReact) === null || _b === void 0 ? void 0 : _b.HCOption) === null || _c === void 0 ? void 0 : _c.replace("series.", "") }, getChildProps(c.props.children, renderHTML)), otherProps));
                    }
                });
            }
        };
        if (!chartRef.current) {
            const HCConstructor = props.chartConstructor || "chart";
            Logger.log("Creating chart using", HCConstructor, "constructor");
            chartRef.current = getHighcharts()[HCConstructor](containerRef.current, chartConfig);
        }
        else {
            Logger.log("Updating chart", JSON.parse(JSON.stringify(chartConfig)));
            appendProps(chartConfig);
            appendSeries(); // chartConfig
            chartRef.current.update(Object.assign(Object.assign({}, chartConfig), getChildProps(props.children, renderHTML)), true, true);
        }
    }, [chartConfig, props.chartConstructor, props.children, renderHTML]);
    return React.createElement("div", Object.assign({}, props.containerProps, { ref: containerRef }));
});
export function Series(props) {
    return null;
}
Series.type = "Series";
Chart.Series = Series;
export default Chart;
//# sourceMappingURL=Highcharts.js.map