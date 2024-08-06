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
import SeriesMod from "highcharts/es-modules/Series/Column/ColumnSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Column series
 */
var Column = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "column",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Column.Series = function (_props) { return React.createElement(React.Fragment, null); };
Column.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Column.Series.defaultProps = {
    type: "column",
};
Column.type = "SeriesChart";
export default Column;
//# sourceMappingURL=Column.js.map