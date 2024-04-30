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
import Mod from "highcharts/es-modules/Series/BoxPlot/BoxPlotSeries.js";
Mod(HighchartsNS);
/**
 * Boxplot series
 */
var Boxplot = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "boxplot",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Boxplot.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Boxplot.Series.defaultProps = {
    type: "boxplot",
};
export default Boxplot;
//# sourceMappingURL=Boxplot.js.map