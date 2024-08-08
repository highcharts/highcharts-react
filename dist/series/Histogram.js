/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Histogram/HistogramSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Histogram series
 */
var Histogram = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "histogram",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Histogram.Series = function (_props) { return React.createElement(React.Fragment, null); };
Histogram.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Histogram.Series.defaultProps = {
    type: "histogram",
};
Histogram.type = "SeriesChart";
export default Histogram;
//# sourceMappingURL=Histogram.js.map