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
import SeriesMod from "highcharts/es-modules/Series/Pie/PieSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Pie series
 */
var Pie = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "pie",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Pie.Series = function (_props) { return React.createElement(React.Fragment, null); };
Pie.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Pie.Series.defaultProps = {
    type: "pie",
};
Pie.type = "SeriesChart";
export default Pie;
//# sourceMappingURL=Pie.js.map