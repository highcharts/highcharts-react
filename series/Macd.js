/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/MACD/MACDIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Macd series
 */
const Macd = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "macd",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function MacdSeries(_props) {
    return null;
}
MacdSeries.type = "Series";
Macd.Series = MacdSeries;
// TODO: Fix typings
// @ts-ignore:
MacdSeries.defaultProps = {
    type: "macd",
};
Macd.type = "SeriesChart";
export default Macd;
//# sourceMappingURL=Macd.js.map