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
import Mod from "highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js";
Mod(HighchartsNS);
/**
 * Areasplinerange series
 */
var Areasplinerange = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "areasplinerange",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Areasplinerange.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Areasplinerange.Series.defaultProps = {
    type: "areasplinerange",
};
export default Areasplinerange;
//# sourceMappingURL=Areasplinerange.js.map