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
import SeriesMod from "highcharts/es-modules/Series/Bar/BarSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Bar series
 */
var Bar = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "bar",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Bar.Series = function (_props) { return React.createElement(React.Fragment, null); };
Bar.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Bar.Series.defaultProps = {
    type: "bar",
};
Bar.type = "SeriesChart";
export default Bar;
//# sourceMappingURL=Bar.js.map