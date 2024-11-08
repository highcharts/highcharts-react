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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/RSI/RSIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Rsi series
 */
const Rsi = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "rsi",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function RsiSeries(_props) {
    return null;
}
RsiSeries.type = "Series";
Rsi.Series = RsiSeries;
// TODO: Fix typings
// @ts-ignore:
RsiSeries.defaultProps = {
    type: "rsi",
};
Rsi.type = "SeriesChart";
export default Rsi;
//# sourceMappingURL=Rsi.js.map