/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
// Specified in overrides
import stock_mod from "highcharts/modules/stock";
stock_mod(HighchartsNS);
/**
 * Candlestick series
 */
const Candlestick = (props) => {
    const [chartConfig] = useState(Object.assign(Object.assign({
        chart: { type: "candlestick" },
        plotOptions: { series: { type: "candlestick" } },
    }, props.options || {}), props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Candlestick.Series = (_props) => React.createElement(React.Fragment, null);
Candlestick.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Candlestick.Series.defaultProps = {
    type: "candlestick",
};
Candlestick.type = "SeriesChart";
export default Candlestick;
//# sourceMappingURL=Candlestick.js.map