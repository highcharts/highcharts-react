/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Heatmap/HeatmapSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
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
Heatmap.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Heatmap.Series.defaultProps = {
    type: "heatmap",
};
Heatmap.type = "SeriesChart";
export default Heatmap;
//# sourceMappingURL=Heatmap.js.map