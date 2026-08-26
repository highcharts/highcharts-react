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
/**
 * Column series display one column per value along an X axis.
 *
 * A ready-made chart with `chart.type` set to `column`. Declare the data with
 * `<Column.Series>`, or use `ColumnSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Column>
 *   <Column.Series data={[1, 2, 3]} />
 * </Column>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.column
 */
function Column(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "column",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * Column series display one column per value along an X axis.
 *
 * Renders the `column` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ColumnSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.column
 */
export function ColumnSeries(_props) {
    return null;
}
ColumnSeries.type = "Series";
Column.Series = ColumnSeries;
ColumnSeries._HCReact = {
    type: "Series",
    HCOption: "series.column",
    childOption: "series.column",
};
Column.type = "SeriesChart";
export default Column;
