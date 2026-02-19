/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
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
ScatterSeries.type = "Series";
Scatter.Series = ScatterSeries;
ScatterSeries._HCReact = {
    type: "Series",
    HCOption: "series.scatter",
    childOption: "series.scatter",
};
Scatter.type = "SeriesChart";
export default Scatter;
//# sourceMappingURL=Scatter.js.map