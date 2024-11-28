/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts";
/**
 * Ohlc series
 */
const Ohlc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ohlc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function OhlcSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
OhlcSeries.type = "Series";
Ohlc.Series = OhlcSeries;
OhlcSeries._HCReact = {
    type: "Series",
    HC_Option: "series.ohlc",
    childOption: "series.ohlc",
};
// TODO: Fix typings
// @ts-ignore:
OhlcSeries.defaultProps = {
    type: "ohlc",
};
Ohlc.type = "SeriesChart";
export default Ohlc;
//# sourceMappingURL=Ohlc.js.map