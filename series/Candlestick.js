/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
// Specified in overrides
import stock_mod from "highcharts/esm/modules/stock.js";
typeof stock_mod === "function" && stock_mod(getHighcharts());
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
CandlestickSeries._HCReact = {
    type: "Series",
    HC_Option: "series.candlestick",
    childOption: "series.candlestick",
};
Candlestick.type = "SeriesChart";
export default Candlestick;
//# sourceMappingURL=Candlestick.js.map