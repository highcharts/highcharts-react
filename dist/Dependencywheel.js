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
import Mod from "highcharts/es-modules/Series/DependencyWheel/DependencyWheelSeriesDefaults.js";
Mod(HighchartsNS);
/**
 * Dependencywheel series
 */
var Dependencywheel = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "dependencywheel",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Dependencywheel.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Dependencywheel.Series.defaultProps = {
    type: "dependencywheel",
};
export default Dependencywheel;
//# sourceMappingURL=Dependencywheel.js.map