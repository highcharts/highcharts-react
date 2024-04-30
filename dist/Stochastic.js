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
import Mod from "highcharts/es-modules/Stock/Indicators/Stochastic/StochasticIndicator.js";
Mod(HighchartsNS);
/**
 * Stochastic series
 */
var Stochastic = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "stochastic",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Stochastic.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Stochastic.Series.defaultProps = {
    type: "stochastic",
};
export default Stochastic;
//# sourceMappingURL=Stochastic.js.map