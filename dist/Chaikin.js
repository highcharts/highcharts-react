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
import Mod from "highcharts/es-modules/Stock/Indicators/Chaikin/ChaikinIndicator.js";
Mod(HighchartsNS);
/**
 * Chaikin series
 */
var Chaikin = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "chaikin",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Chaikin.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Chaikin.Series.defaultProps = {
    type: "chaikin",
};
export default Chaikin;
//# sourceMappingURL=Chaikin.js.map