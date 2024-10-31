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
import SeriesMod from "highcharts/es-modules/Series/HollowCandlestick/HollowCandlestickSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Hollowcandlestick series
 */
const Hollowcandlestick = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "hollowcandlestick",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function HollowcandlestickSeries(_props) {
    return null;
}
HollowcandlestickSeries.type = "Series";
Hollowcandlestick.Series = HollowcandlestickSeries;
// TODO: Fix typings
// @ts-ignore:
HollowcandlestickSeries.defaultProps = {
    type: "hollowcandlestick",
};
Hollowcandlestick.type = "SeriesChart";
export default Hollowcandlestick;
//# sourceMappingURL=Hollowcandlestick.js.map