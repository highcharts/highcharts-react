/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "../seriesModules/Sunburst.js";
/**
 * A Sunburst displays hierarchical data, where a level in the hierarchy is
 * represented by a circle. The center represents the root node of the tree.
 * The visualization bears a resemblance to both treemap and pie charts.
 *
 * A ready-made chart with `chart.type` set to `sunburst`. Declare the data
 * with `<Sunburst.Series>`, or use `SunburstSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * import Sunburst from '@highcharts/react/series/Sunburst';
 *
 * <Sunburst>
 *   <Sunburst.Series data={[1, 2, 3]} />
 * </Sunburst>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.sunburst
 */
function Sunburst(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sunburst",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A Sunburst displays hierarchical data, where a level in the hierarchy is
 * represented by a circle. The center represents the root node of the tree.
 * The visualization bears a resemblance to both treemap and pie charts.
 *
 * Renders the `sunburst` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * import { Chart } from '@highcharts/react';
 * import { SunburstSeries } from '@highcharts/react/series/Sunburst';
 *
 * <Chart>
 *   <SunburstSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.sunburst
 */
export function SunburstSeries(_props) {
    return null;
}
SunburstSeries.type = "Series";
Sunburst.Series = SunburstSeries;
SunburstSeries._HCReact = {
    type: "Series",
    HCOption: "series.sunburst",
    childOption: "series.sunburst",
};
Sunburst.type = "SeriesChart";
export default Sunburst;
