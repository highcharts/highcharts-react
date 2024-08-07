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
import SeriesMod from "highcharts/es-modules/Series/Line/LineSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Line series
 */
var Line = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "line",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Line.Series = function (_props) { return React.createElement(React.Fragment, null); };
Line.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Line.Series.defaultProps = {
    type: "line",
};
Line.type = "SeriesChart";
export default Line;
//# sourceMappingURL=Line.js.map