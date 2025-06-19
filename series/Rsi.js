/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/rsi.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
// TODO: replace uses of this with _HCReact.type
RsiSeries.type = "Series";
Rsi.Series = RsiSeries;
RsiSeries._HCReact = {
    type: "Series",
    HC_Option: "series.rsi",
    childOption: "series.rsi",
};
Rsi.type = "SeriesChart";
export default Rsi;
//# sourceMappingURL=Rsi.js.map