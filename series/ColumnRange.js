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
 * The column range is a cartesian series type with higher and lower Y values
 * along an X axis. To display horizontal bars, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * A ready-made chart with `chart.type` set to `columnrange`. Declare the data
 * with `<ColumnRange.Series>`, or use `ColumnRangeSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <ColumnRange>
 *   <ColumnRange.Series data={[1, 2, 3]} />
 * </ColumnRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.columnrange
 */
function ColumnRange(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "columnrange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The column range is a cartesian series type with higher and lower Y values
 * along an X axis. To display horizontal bars, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * Renders the `columnrange` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ColumnRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.columnrange
 */
export function ColumnRangeSeries(_props) {
    return null;
}
ColumnRangeSeries.type = "Series";
ColumnRange.Series = ColumnRangeSeries;
ColumnRangeSeries._HCReact = {
    type: "Series",
    HCOption: "series.columnrange",
    childOption: "series.columnrange",
};
ColumnRange.type = "SeriesChart";
export default ColumnRange;
