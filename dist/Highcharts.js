/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-01
 *
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import HC from "highcharts/es-modules/masters/highcharts.src.js";
// import * as Data from 'highcharts/es-modules/data';
export var HighchartsNS = HC;
var toArr = function (thing) { return (Array.isArray(thing) ? thing : [thing]); };
function getChildProps(children) {
    var optionsFromChildren = {};
    // TODO: Bundle this from utils
    function objInsert(obj, key, value) {
        if (value === void 0) { value = null; }
        var keys = key.split(".");
        var current = obj;
        for (var i = 0; i < keys.length - 1; i++) {
            var key_1 = keys[i];
            if (!current[key_1]) {
                current[key_1] = {};
            }
            current = current[key_1];
        }
        current[keys[keys.length - 1]] = value;
        return obj;
    }
    function handleChild(child) {
        var _a;
        var _b;
        if (typeof child === "object") {
            var meta_1 = child.type._HCReact;
            if (meta_1 && meta_1.type === "HC_Option" && meta_1.HCOption) {
                var optionParent = ((_a = optionsFromChildren[_b = meta_1.HCOption]) !== null && _a !== void 0 ? _a : (optionsFromChildren[_b] = {}));
                var _c = child.props, children_1 = _c.children, otherProps = __rest(_c, ["children"]);
                // TODO: there will probably be mappings that have to be applied
                Object.entries(otherProps).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return (optionsFromChildren[meta_1.HCOption][key] = value);
                });
                // TODO: if the child has children we have to unpack it
                if (typeof children_1 === "string" && meta_1.childOption) {
                    objInsert(optionParent, meta_1.childOption, children_1);
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
    var _a = useState(Object.assign(Object.assign({
        title: { text: props.title || "My Chart" },
        data: {
            csv: props.csv || undefined,
            csvURL: props.csvURL || undefined,
        },
    }, props.options || {}), __assign({ series: props.children
            ? toArr(props.children)
                .filter(function (c) { return c.type.type === "Series"; })
                .map(function (c) {
                return Object.assign({
                    type: c.props.type || "line",
                    data: c.props.data || [],
                }, c.props.options || {});
            })
            : [] }, getChildProps(props.children)), props.options || {})), chartConfig = _a[0], setChartConfig = _a[1];
    var containerRef = useRef();
    var chartRef = useRef();
    /** Append prop to chart config */
    var appendProps = function (config) {
        var _a, _b, _c;
        var _d, _e, _f;
        (_a = (_d = config.title).text) !== null && _a !== void 0 ? _a : (_d.text = props.title);
        (_b = (_e = config.data).csv) !== null && _b !== void 0 ? _b : (_e.csv = props.csv);
        (_c = (_f = config.data).csvURL) !== null && _c !== void 0 ? _c : (_f.csvURL = props.csvURL);
    };
    /** Append series to chart config */
    var appendSeries = function () {
        // config: HC.Options
        if (props.children) {
            var children = toArr(props.children).filter(function (c) { return c.type.type === "Series"; });
            children.forEach(function (c, i) {
                console.log("Adding series to chart");
                if (c.props) {
                    if (c.props.options) {
                        Object.assign(chartConfig.series[i], c.props.options);
                    }
                    chartConfig.series[i] = __assign(__assign({}, chartConfig.series[i]), c.props);
                }
            });
            setChartConfig(__assign({}, chartConfig));
        }
    };
    // Update the chart on render
    useEffect(function () {
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
            chartRef.current.update(__assign(__assign({}, chartConfig), getChildProps(props.children)));
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