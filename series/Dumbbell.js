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
import "highcharts/es-modules/masters/modules/dumbbell.src.js";
/**
 * The dumbbell series is a cartesian series with higher and lower values for
 * each point along an X axis, connected with a line between the values.
 *
 * A ready-made chart with `chart.type` set to `dumbbell`. Declare the data
 * with `<Dumbbell.Series>`, or use `DumbbellSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Dumbbell>
 *   <Dumbbell.Series data={[1, 2, 3]} />
 * </Dumbbell>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.dumbbell
 */
function Dumbbell(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dumbbell",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The dumbbell series is a cartesian series with higher and lower values for
 * each point along an X axis, connected with a line between the values.
 *
 * Renders the `dumbbell` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <DumbbellSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.dumbbell
 */
export function DumbbellSeries(_props) {
    return null;
}
DumbbellSeries.type = "Series";
Dumbbell.Series = DumbbellSeries;
DumbbellSeries._HCReact = {
    type: "Series",
    HCOption: "series.dumbbell",
    childOption: "series.dumbbell",
};
Dumbbell.type = "SeriesChart";
export default Dumbbell;
