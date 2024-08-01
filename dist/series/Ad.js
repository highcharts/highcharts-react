/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-01
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/AD/ADIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Ad series
 */
var Ad = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "ad",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ad.Series = function (_props) { return React.createElement(React.Fragment, null); };
Ad.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Ad.Series.defaultProps = {
    type: "ad",
};
Ad.type = "SeriesChart";
export default Ad;
//# sourceMappingURL=Ad.js.map