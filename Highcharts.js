/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
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
import React, { forwardRef, useEffect, useRef, useImperativeHandle,
// @ts-ignore
 } from "react";
import { renderToStaticMarkup } from "react-dom/server";
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
    function handleChildren(children, obj, meta) {
        var _a, _b, _c;
        if (!children)
            return;
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
// React v20+ notice: forwardRef will be removed
// https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop
export const Chart = forwardRef(function Chart(props, ref) {
    if (props.highcharts) {
        setHighcharts(props.highcharts);
    }
    const chartConfig = Highcharts.merge(Object.assign({
        title: { text: props.title || undefined },
    }, props.options || {}), Object.assign({ series: props.children
            ? toArr(props.children)
                .filter((c) => { var _a; return ((_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a.type) === "Series"; })
                .map((c) => {
                var _a, _b, _c;
                return Highcharts.merge({
                    type: (_a = c.props.type) !== null && _a !== void 0 ? _a : (_c = (_b = c.type) === null || _b === void 0 ? void 0 : _b._HCReact) === null || _c === void 0 ? void 0 : _c.HC_Option.replace("series.", ""),
                    data: c.props.data || [],
                }, Object.assign(Object.assign({}, (c.props.options || {})), getChildProps(c.props.children, renderToStaticMarkup)));
            })
            : [] }, getChildProps(props.children, renderToStaticMarkup)), props.options || {});
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
                var _a;
                if (c.props) {
                    const _b = c.props, { children, type, options } = _b, otherProps = __rest(_b, ["children", "type", "options"]);
                    if (options) {
                        chartConfig.series[i] = Highcharts.merge(chartConfig.series[i], options);
                    }
                    chartConfig.series[i] = Highcharts.merge(chartConfig.series[i], Object.assign(Object.assign({ type: type !== null && type !== void 0 ? type : (_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a._HCReact.HC_Option.replace("series.", "") }, getChildProps(c.props.children)), otherProps));
                }
            });
        }
    };
    // Update the chart on render
    useEffect(() => {
        Logger.log(JSON.stringify(chartConfig, undefined, "  "));
        if (!chartRef.current) {
            const HCConstructor = props.chartConstructor || "chart";
            Logger.log("Creating chart using", HCConstructor, "constructor");
            chartRef.current = getHighcharts()[HCConstructor](containerRef.current, chartConfig);
        }
        else {
            Logger.log("Updating chart", JSON.parse(JSON.stringify(chartConfig)));
            appendProps(chartConfig);
            appendSeries(); // chartConfig
            chartRef.current.update(Object.assign(Object.assign({}, chartConfig), getChildProps(props.children, renderToStaticMarkup)), true, true);
        }
    });
    return React.createElement("div", Object.assign({}, props.containerProps, { ref: containerRef }));
});
export function Series(props) {
    return null;
}
Series.type = "Series";
Chart.Series = Series;
export default Chart;
//# sourceMappingURL=Highcharts.js.map