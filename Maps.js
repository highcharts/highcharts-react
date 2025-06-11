/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
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
import React, { useEffect, useRef, useImperativeHandle,
// @ts-ignore
 } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import HC from "highcharts/esm/highmaps.src.js";
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
const toArr = (thing) => (Array.isArray(thing) ? thing : [thing]);
function getChildProps(children, renderHTML = undefined) {
    const optionsFromChildren = {};
    // TODO: Bundle this from utils
    function objInsert(obj, key, value = null) {
        const keys = key.split(".");
        let current = obj;
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!current[key]) {
                current[key] = {};
            }
            current = current[key];
        }
        current[keys[keys.length - 1]] = value;
        return obj;
    }
    function renderChildren(children) {
        return renderHTML
            ? renderHTML(children)
            : children.filter((c) => typeof c === "string").join(""); // fallback
    }
    /**
     * Updates the _HCReact metadata for a child.
     */
    function updateChildMeta(childMeta, parentMeta) {
        return Object.assign(Object.assign({}, childMeta), { childOption: `${parentMeta.childOption}.${childMeta.childOption}`, HCOption: `${parentMeta.HCOption}.${childMeta.HCOption}` });
    }
    function handleChildren(children, obj, meta) {
        var _a;
        if (Array.isArray(children) &&
            children.some((c) => c.props && c.props["data-hc-option"])) {
            const lostChildren = [];
            for (const child of children) {
                if (child.props["data-hc-option"]) {
                    objInsert(obj, `${child.props["data-hc-option"]}`, renderChildren([child]));
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
                if ((_a = c.type) === null || _a === void 0 ? void 0 : _a._HCReact) {
                    const { _HCReact: childMeta } = c.type;
                    c.type._HCReact = updateChildMeta(childMeta, meta);
                    handleChild(c);
                    continue;
                }
                nonOptionChildren.push(c);
            }
        }
        if (meta.childOption) {
            // If children is an array, render the children that are not options.
            // Otherwise, render the children prop
            const childrenToRender = nonOptionChildren.length
                ? nonOptionChildren
                : [children];
            objInsert(obj, meta.childOption, renderChildren(childrenToRender));
        }
    }
    function handleChild(child) {
        var _a, _b, _c;
        var _d;
        if (child && typeof child === "object") {
            const { _HCReact: meta } = (_a = child.type) !== null && _a !== void 0 ? _a : {};
            if (meta && meta.HCOption) {
                const optionParent = ((_b = optionsFromChildren[_d = meta.HCOption]) !== null && _b !== void 0 ? _b : (optionsFromChildren[_d] = meta.isArrayType ? [] : {}));
                const _e = child.props, { children } = _e, props = __rest(_e, ["children"]);
                const parentIsArray = Array.isArray(optionParent);
                const insertInto = parentIsArray ? {} : optionParent;
                if (meta.defaultOptions) {
                    Object.assign(insertInto, meta.defaultOptions);
                }
                Object.assign(insertInto, props);
                // TODO: if the child has children we have to unpack it
                if (typeof children === "string" && meta.childOption) {
                    objInsert(insertInto, meta.childOption, children);
                }
                else if (children &&
                    typeof children === "object" &&
                    "$$typeof" in children &&
                    renderHTML) {
                    if ((children.$$typeof === Symbol.for("react.element") ||
                        children.$$typeof === Symbol.for("react.transitional.element")) &&
                        "props" in children) {
                        // If there's only a children prop
                        if (((_c = children.props) === null || _c === void 0 ? void 0 : _c.children) &&
                            Object.keys(children.props).length === 1) {
                            handleChildren(children.props.children, insertInto, meta);
                        }
                        else if (meta.childOption) {
                            objInsert(insertInto, meta.childOption, renderHTML(children));
                        }
                    }
                }
                else if (Array.isArray(children)) {
                    handleChildren(children, insertInto, meta);
                }
                // Push to the option if array type
                if (parentIsArray) {
                    optionsFromChildren[meta.HCOption].push(insertInto);
                }
            }
        }
    }
    if (Array.isArray(children)) {
        children.forEach(handleChild);
    }
    else {
        handleChild(children);
    }
    return optionsFromChildren;
}
// TODO: The config merge needs to use a deep merge instead of Object.assign
export function MapsChart(props) {
    if (props.highcharts) {
        setHighcharts(props.highcharts);
    }
    const chartConfig = Object.assign(Object.assign({
        title: { text: props.title || undefined },
    }, props.options || {}), Object.assign({ series: props.children
            ? toArr(props.children)
                .filter((c) => { var _a; return ((_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a.type) === "Series"; })
                .map((c) => {
                var _a, _b, _c;
                return Object.assign({
                    type: (_a = c.props.type) !== null && _a !== void 0 ? _a : (_c = (_b = c.type) === null || _b === void 0 ? void 0 : _b._HCReact) === null || _c === void 0 ? void 0 : _c.HC_Option.replace("series.", ""),
                    data: c.props.data || [],
                }, Object.assign(Object.assign({}, (c.props.options || {})), getChildProps(c.props.children, renderToStaticMarkup)));
            })
            : [] }, getChildProps(props.children, renderToStaticMarkup)), props.options || {});
    const containerRef = useRef();
    const chartRef = useRef();
    useImperativeHandle(props.ref, () => ({
        get chart() {
            return chartRef.current;
        },
        container: containerRef,
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
                        Object.assign(chartConfig.series[i], options);
                    }
                    chartConfig.series[i] = Object.assign(Object.assign(Object.assign(Object.assign({}, chartConfig.series[i]), { type: type !== null && type !== void 0 ? type : (_a = c === null || c === void 0 ? void 0 : c.type) === null || _a === void 0 ? void 0 : _a._HCReact.HC_Option.replace("series.", "") }), getChildProps(c.props.children)), otherProps);
                }
            });
        }
    };
    // Update the chart on render
    useEffect(() => {
        Logger.log(JSON.stringify(chartConfig, undefined, "  "));
        if (!chartRef.current) {
            const HCConstructor = props.chartConstructor || "mapChart";
            Logger.log("Creating chart using", HCConstructor, "constructor");
            chartRef.current = getHighcharts()[HCConstructor](containerRef.current, chartConfig);
        }
        else {
            Logger.log("Updating chart", JSON.parse(JSON.stringify(chartConfig)));
            appendProps(chartConfig);
            appendSeries(); // chartConfig
            chartRef.current.update(Object.assign(Object.assign({}, chartConfig), getChildProps(props.children, renderToStaticMarkup)), true);
        }
    });
    return React.createElement("div", { ref: containerRef });
}
export function MapsSeries(props) {
    return null;
}
MapsSeries.type = "Series";
MapsChart.Series = MapsSeries;
export default MapsChart;
//# sourceMappingURL=Maps.js.map