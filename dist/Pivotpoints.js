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
import Mod from "highcharts/es-modules/Stock/Indicators/PivotPoints/PivotPointsIndicator.js";
Mod(HighchartsNS);
/**
 * Pivotpoints series
 */
var Pivotpoints = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "pivotpoints",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Pivotpoints.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Pivotpoints.Series.defaultProps = {
    type: "pivotpoints",
};
export default Pivotpoints;
//# sourceMappingURL=Pivotpoints.js.map