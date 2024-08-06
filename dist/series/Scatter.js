/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-06
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Scatter/ScatterSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Scatter series
 */
var Scatter = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "scatter",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Scatter.Series = function (_props) { return React.createElement(React.Fragment, null); };
Scatter.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Scatter.Series.defaultProps = {
    type: "scatter",
};
Scatter.type = "SeriesChart";
export default Scatter;
//# sourceMappingURL=Scatter.js.map