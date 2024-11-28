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
import { Chart } from "../Highcharts";
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
// TODO: replace uses of this with _HCReact.type
HeatmapSeries.type = "Series";
Heatmap.Series = HeatmapSeries;
HeatmapSeries._HCReact = {
    type: "Series",
    HC_Option: "series.heatmap",
    childOption: "series.heatmap",
};
// TODO: Fix typings
// @ts-ignore:
HeatmapSeries.defaultProps = {
    type: "heatmap",
};
Heatmap.type = "SeriesChart";
export default Heatmap;
//# sourceMappingURL=Heatmap.js.map