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
import { useState, React,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "./Highcharts";
import Mod from "highcharts/es-modules/Stock/Indicators/Zigzag/ZigzagIndicator.js";
Mod(HighchartsNS);
/**
 * Zigzag series
 */
var Zigzag = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "zigzag",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Zigzag.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Zigzag.Series.defaultProps = {
    type: "zigzag",
};
export default Zigzag;
//# sourceMappingURL=Zigzag.js.map