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
import Mod from "highcharts/es-modules/Series/Heatmap/HeatmapSeries.js";
Mod(HighchartsNS);
/**
 * Heatmap series
 */
var Heatmap = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "heatmap",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Heatmap.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Heatmap.Series.defaultProps = {
    type: "heatmap",
};
export default Heatmap;
//# sourceMappingURL=Heatmap.js.map