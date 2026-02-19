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
 * Heatmap series
 */
const Heatmap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "heatmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function HeatmapSeries(_props) {
    return null;
}
HeatmapSeries.type = "Series";
Heatmap.Series = HeatmapSeries;
HeatmapSeries._HCReact = {
    type: "Series",
    HCOption: "series.heatmap",
    childOption: "series.heatmap",
};
Heatmap.type = "SeriesChart";
export default Heatmap;
//# sourceMappingURL=Heatmap.js.map