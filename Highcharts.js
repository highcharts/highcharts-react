/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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
import React, { useState, useEffect, useRef,
// @ts-ignore
 } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import HC from "highcharts/es-modules/masters/highcharts.src.js";
// Add data-hc-option to allowed attributes
if (HC.AST.allowedAttributes.indexOf("data-hc-option") === -1) {
    HC.AST.allowedAttributes.push("data-hc-option");
}
// import * as Data from 'highcharts/es-modules/data';
export const HighchartsNS = HC;
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
    /**
     * @param {ReactNode[]} children
     */
    function renderChildren(children) {
        return renderHTML
            ? renderHTML(children)
            : children.filter((c) => typeof c === "string").join(""); // fallback
    }
    /**
     * @param {ReactElement[]} children
     * @param {Object} obj
     * @param {Object} meta
     */
    function handleChildren(children, obj, meta) {
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
            if (lostChildren.length) {
                objInsert(obj, meta.childOption, renderChildren(lostChildren));
            }
            return;
        }
        objInsert(obj, meta.childOption, renderChildren(children));
    }
    /**
     * @param {ReactElementWithMeta} child
     */
    function handleChild(child) {
        var _a, _b, _c;
        var _d;
        if (typeof child === "object") {
            const { _HCReact: meta } = (_a = child.type) !== null && _a !== void 0 ? _a : {};
            if (meta && meta.type === "HC_Option" && meta.HCOption) {
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
                    if (children.$$typeof === Symbol.for("react.element") &&
                        "props" in children) {
                        // If there's only a children prop
                        if (((_c = children.props) === null || _c === void 0 ? void 0 : _c.children) &&
                            Object.keys(children.props).length === 1) {
                            handleChildren(children.props.children, insertInto, meta);
                        }
                        else {
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
export function Highcharts(props) {
    const [chartConfig, setChartConfig] = useState(Object.assign(Object.assign({
        title: { text: props.title || "My Chart" },
    }, props.options || {}), Object.assign({ series: props.children
            ? toArr(props.children)
                .filter((c) => c.type.type === "Series")
                .map((c) => Object.assign({
                type: c.props.type || "line",
                data: c.props.data || [],
            }, c.props.options || {}))
            : [] }, getChildProps(props.children, renderToStaticMarkup)), props.options || {}));
    const containerRef = useRef();
    const chartRef = useRef();
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
            const children = toArr(props.children).filter((c) => c.type.type === "Series");
            children.forEach((c, i) => {
                console.log("Adding series to chart");
                if (c.props) {
                    if (c.props.options) {
                        Object.assign(chartConfig.series[i], c.props.options);
                    }
                    chartConfig.series[i] = Object.assign(Object.assign({}, chartConfig.series[i]), c.props);
                }
            });
            setChartConfig(Object.assign({}, chartConfig));
        }
    };
    // Update the chart on render
    useEffect(() => {
        console.log(JSON.stringify(chartConfig, undefined, "  "));
        if (!chartRef.current) {
            console.log("Creating chart using", props.chartConstructor || "chart", "constructor");
            chartRef.current = HC[props.chartConstructor || "chart"](containerRef.current, chartConfig);
        }
        else {
            console.log("Updating chart");
            appendProps(chartConfig);
            appendSeries(); // chartConfig
            setChartConfig(chartConfig);
            chartRef.current.update(Object.assign(Object.assign({}, chartConfig), getChildProps(props.children, renderToStaticMarkup)));
        }
    });
    return React.createElement("div", { ref: containerRef });
}
export function HighchartsSeries(props) {
    return null;
}
HighchartsSeries.type = "Series";
Highcharts.Series = HighchartsSeries;
export default Highcharts;
//# sourceMappingURL=Highcharts.js.map