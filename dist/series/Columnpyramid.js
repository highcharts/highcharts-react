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
import SeriesMod from "highcharts/es-modules/Series/ColumnPyramid/ColumnPyramidSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Columnpyramid series
 */
var Columnpyramid = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "columnpyramid",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Columnpyramid.Series = function (_props) { return React.createElement(React.Fragment, null); };
Columnpyramid.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Columnpyramid.Series.defaultProps = {
    type: "columnpyramid",
};
Columnpyramid.type = "SeriesChart";
export default Columnpyramid;
//# sourceMappingURL=Columnpyramid.js.map