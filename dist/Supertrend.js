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
import Mod from "highcharts/es-modules/Stock/Indicators/Supertrend/SupertrendIndicator.js";
Mod(HighchartsNS);
/**
 * Supertrend series
 */
var Supertrend = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "supertrend",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Supertrend.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Supertrend.Series.defaultProps = {
    type: "supertrend",
};
export default Supertrend;
//# sourceMappingURL=Supertrend.js.map