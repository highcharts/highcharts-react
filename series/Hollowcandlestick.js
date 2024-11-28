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
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/HollowCandlestick/HollowCandlestickSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function HollowcandlestickSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
HollowcandlestickSeries.type = "Series";
Hollowcandlestick.Series = HollowcandlestickSeries;
HollowcandlestickSeries._HCReact = {
    type: "Series",
    HC_Option: "series.hollowcandlestick",
    childOption: "series.hollowcandlestick",
};
// TODO: Fix typings
// @ts-ignore:
HollowcandlestickSeries.defaultProps = {
    type: "hollowcandlestick",
};
Hollowcandlestick.type = "SeriesChart";
export default Hollowcandlestick;
//# sourceMappingURL=Hollowcandlestick.js.map