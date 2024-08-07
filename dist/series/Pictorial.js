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
import SeriesMod from "highcharts/es-modules/Series/Pictorial/PictorialSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Pictorial series
 */
var Pictorial = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "pictorial",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Pictorial.Series = function (_props) { return React.createElement(React.Fragment, null); };
Pictorial.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Pictorial.Series.defaultProps = {
    type: "pictorial",
};
Pictorial.type = "SeriesChart";
export default Pictorial;
//# sourceMappingURL=Pictorial.js.map