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
import SeriesMod from "highcharts/es-modules/Series/OHLC/OHLCSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Ohlc series
 */
var Ohlc = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "ohlc",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ohlc.Series = function (_props) { return React.createElement(React.Fragment, null); };
Ohlc.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Ohlc.Series.defaultProps = {
    type: "ohlc",
};
Ohlc.type = "SeriesChart";
export default Ohlc;
//# sourceMappingURL=Ohlc.js.map