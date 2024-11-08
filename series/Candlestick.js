/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
// Specified in overrides
import stock_mod from "highcharts/modules/stock";
stock_mod(Highcharts);
/**
 * Candlestick series
 */
const Candlestick = (props) => {
    const [chartConfig] = useState(Object.assign(Object.assign({
        chart: { type: "candlestick" },
        plotOptions: { series: { type: "candlestick" } },
    }, props.options || {}), props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function CandlestickSeries(_props) {
    return null;
}
CandlestickSeries.type = "Series";
Candlestick.Series = CandlestickSeries;
// TODO: Fix typings
// @ts-ignore:
CandlestickSeries.defaultProps = {
    type: "candlestick",
};
Candlestick.type = "SeriesChart";
export default Candlestick;
//# sourceMappingURL=Candlestick.js.map