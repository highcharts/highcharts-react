/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/hollowcandlestick.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Hollowcandlestick.type = "SeriesChart";
export default Hollowcandlestick;
//# sourceMappingURL=Hollowcandlestick.js.map