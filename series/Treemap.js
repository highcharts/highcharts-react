/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/modules/treemap.src.js";
/**
 * A treemap displays hierarchical data using nested rectangles. The data can
 * be laid out in varying ways depending on options.
 *
 * A ready-made chart with `chart.type` set to `treemap`. Declare the data with
 * `<Treemap.Series>`, or use `TreemapSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Treemap>
 *   <Treemap.Series data={[1, 2, 3]} />
 * </Treemap>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.treemap
 */
function Treemap(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "treemap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A treemap displays hierarchical data using nested rectangles. The data can
 * be laid out in varying ways depending on options.
 *
 * Renders the `treemap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <TreemapSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.treemap
 */
export function TreemapSeries(_props) {
    return null;
}
TreemapSeries.type = "Series";
Treemap.Series = TreemapSeries;
TreemapSeries._HCReact = {
    type: "Series",
    HCOption: "series.treemap",
    childOption: "series.treemap",
};
Treemap.type = "SeriesChart";
export default Treemap;
