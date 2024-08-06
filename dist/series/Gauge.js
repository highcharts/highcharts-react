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
import SeriesMod from "highcharts/es-modules/Series/Gauge/GaugeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Gauge series
 */
var Gauge = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "gauge",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Gauge.Series = function (_props) { return React.createElement(React.Fragment, null); };
Gauge.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Gauge.Series.defaultProps = {
    type: "gauge",
};
Gauge.type = "SeriesChart";
export default Gauge;
//# sourceMappingURL=Gauge.js.map