/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Hlc series
 */
const Hlc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "hlc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function HlcSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
HlcSeries.type = "Series";
Hlc.Series = HlcSeries;
HlcSeries._HCReact = {
    type: "Series",
    HC_Option: "series.hlc",
    childOption: "series.hlc",
};
Hlc.type = "SeriesChart";
export default Hlc;
//# sourceMappingURL=Hlc.js.map