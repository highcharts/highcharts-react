/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */
import { useState, React,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "./Highcharts";
import Mod from "highcharts/es-modules/Series/Candlestick/CandlestickSeriesDefaults.js";
// Specified in overrides
import stock_mod from "highcharts/modules/stock";
Mod(HighchartsNS);
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
// TODO: Fix typings
// @ts-ignore:
Candlestick.Series.defaultProps = {
    type: "candlestick",
};
export default Candlestick;
//# sourceMappingURL=Candlestick.js.map