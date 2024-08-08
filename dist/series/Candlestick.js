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
import SeriesMod from "highcharts/es-modules/Series/Candlestick/CandlestickSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
// Specified in overrides
import stock_mod from "highcharts/modules/stock";
stock_mod(HighchartsNS);
/**
 * Candlestick series
 */
var Candlestick = function (props) {
    var chartConfig = useState(Object.assign(Object.assign({
        chart: { type: "candlestick" },
        plotOptions: { series: { type: "candlestick" } },
    }, props.options || {}), props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Candlestick.Series = function (_props) { return React.createElement(React.Fragment, null); };
Candlestick.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Candlestick.Series.defaultProps = {
    type: "candlestick",
};
Candlestick.type = "SeriesChart";
export default Candlestick;
//# sourceMappingURL=Candlestick.js.map