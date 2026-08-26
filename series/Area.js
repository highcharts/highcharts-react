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
 * The area series type.
 *
 * A ready-made chart with `chart.type` set to `area`. Declare the data with
 * `<Area.Series>`, or use `AreaSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Area>
 *   <Area.Series data={[1, 2, 3]} />
 * </Area>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.area
 */
function Area(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "area",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The area series type.
 *
 * Renders the `area` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.area
 */
export function AreaSeries(_props) {
    return null;
}
AreaSeries.type = "Series";
Area.Series = AreaSeries;
AreaSeries._HCReact = {
    type: "Series",
    HCOption: "series.area",
    childOption: "series.area",
};
Area.type = "SeriesChart";
export default Area;
