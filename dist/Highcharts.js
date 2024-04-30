/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */
import { useState, useEffect, useRef, React,
// @ts-ignore
 } from "react";
import * as Highcharts from "highcharts";
// import * as Data from 'highcharts/es-modules/data';
export var HighchartsNS = Highcharts;
var toArr = function (thing) { return (Array.isArray(thing) ? thing : [thing]); };
// TODO: The config merge needs to use a deep merge instead of Object.assign
export default function HighchartsComponent(props) {
    var _a = useState(Object.assign(Object.assign({
        title: { text: props.title || "My Chart" },
        data: {
            csv: props.csv || undefined,
            csvURL: props.csvURL || undefined,
        },
    }, props.options || {}), {
        series: props.children
            ? toArr(props.children).map(function (c) {
                return Object.assign({
                    type: c.props.type || "line",
                    data: c.props.data || [],
                }, c.props.options || {});
            })
            : [],
    }, props.options || {})), chartConfig = _a[0], setChartConfig = _a[1];
    var containerRef = useRef();
    var chartRef = useRef();
    /** Append prop to chart config */
    var appendProps = function (config) {
        config.title.text = props.title;
        config.data.csv = props.csv;
        config.data.csvURL = props.csvURL;
    };
    /** Append series to chart config */
    var appendSeries = function () {
        // config: Highcharts.Options
        if (props.children) {
            var children = toArr(props.children);
            children.forEach(function (c, i) {
                console.log("Adding series to chart");
                if (c.props && c.props.data) {
                    chartConfig.series[i].data = c.props.data;
                }
                if (c.props && c.props.options) {
                    Object.assign(chartConfig.series[i], c.props.options);
                }
            });
            setChartConfig(chartConfig);
        }
    };
    // Update the chart on render
    useEffect(function () {
        console.log(JSON.stringify(chartConfig, undefined, "  "));
        if (!chartRef.current) {
            console.log("Creating chart using", props.chartConstructor || "chart", "constructor");
            chartRef.current = Highcharts[props.chartConstructor || "chart"](containerRef.current, chartConfig);
        }
        else {
            console.log("Updating chart");
            appendProps(chartConfig);
            appendSeries(); // chartConfig
            setChartConfig(chartConfig);
            chartRef.current.update(chartConfig);
        }
    });
    return React.createElement("div", { ref: containerRef });
}
//# sourceMappingURL=Highcharts.js.map