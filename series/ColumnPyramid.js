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
import "highcharts/es-modules/masters/highcharts-more.src.js";
/**
 * Column pyramid series display one pyramid per value along an X axis. To
 * display horizontal pyramids, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * A ready-made chart with `chart.type` set to `columnpyramid`. Declare the
 * data with `<ColumnPyramid.Series>`, or use `ColumnPyramidSeries` inside a
 * plain `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <ColumnPyramid>
 *   <ColumnPyramid.Series data={[1, 2, 3]} />
 * </ColumnPyramid>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.columnpyramid
 */
function ColumnPyramid(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "columnpyramid",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * Column pyramid series display one pyramid per value along an X axis. To
 * display horizontal pyramids, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * Renders the `columnpyramid` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ColumnPyramidSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.columnpyramid
 */
export function ColumnPyramidSeries(_props) {
    return null;
}
ColumnPyramidSeries.type = "Series";
ColumnPyramid.Series = ColumnPyramidSeries;
ColumnPyramidSeries._HCReact = {
    type: "Series",
    HCOption: "series.columnpyramid",
    childOption: "series.columnpyramid",
};
ColumnPyramid.type = "SeriesChart";
export default ColumnPyramid;
