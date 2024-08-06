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
import SeriesMod from "highcharts/es-modules/Series/Vector/VectorSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Vector series
 */
var Vector = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "vector",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Vector.Series = function (_props) { return React.createElement(React.Fragment, null); };
Vector.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Vector.Series.defaultProps = {
    type: "vector",
};
Vector.type = "SeriesChart";
export default Vector;
//# sourceMappingURL=Vector.js.map