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
import Mod from "highcharts/es-modules/Stock/Indicators/LinearRegression/LinearRegressionIndicator.js";
Mod(HighchartsNS);
/**
 * Linearregression series
 */
var Linearregression = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "linearregression",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Linearregression.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Linearregression.Series.defaultProps = {
    type: "linearregression",
};
export default Linearregression;
//# sourceMappingURL=Linearregression.js.map