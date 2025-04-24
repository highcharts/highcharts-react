/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/vwap.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Vwap series
 */
const Vwap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vwap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function VwapSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
VwapSeries.type = "Series";
Vwap.Series = VwapSeries;
VwapSeries._HCReact = {
    type: "Series",
    HC_Option: "series.vwap",
    childOption: "series.vwap",
};
Vwap.type = "SeriesChart";
export default Vwap;
//# sourceMappingURL=Vwap.js.map