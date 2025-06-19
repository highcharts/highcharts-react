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
import SeriesMod from "highcharts/esm/modules/macd.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function MacdSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
MacdSeries.type = "Series";
Macd.Series = MacdSeries;
MacdSeries._HCReact = {
    type: "Series",
    HC_Option: "series.macd",
    childOption: "series.macd",
};
Macd.type = "SeriesChart";
export default Macd;
//# sourceMappingURL=Macd.js.map