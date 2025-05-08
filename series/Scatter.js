/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Scatter series
 */
const Scatter = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "scatter",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ScatterSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ScatterSeries.type = "Series";
Scatter.Series = ScatterSeries;
ScatterSeries._HCReact = {
    type: "Series",
    HC_Option: "series.scatter",
    childOption: "series.scatter",
};
Scatter.type = "SeriesChart";
export default Scatter;
//# sourceMappingURL=Scatter.js.map