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
 * The area range series is a cartesian series with higher and lower values for
 * each point along an X axis, where the area between the values is shaded.
 *
 * A ready-made chart with `chart.type` set to `arearange`. Declare the data
 * with `<AreaRange.Series>`, or use `AreaRangeSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <AreaRange>
 *   <AreaRange.Series data={[1, 2, 3]} />
 * </AreaRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.arearange
 */
function AreaRange(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "arearange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The area range series is a cartesian series with higher and lower values for
 * each point along an X axis, where the area between the values is shaded.
 *
 * Renders the `arearange` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.arearange
 */
export function AreaRangeSeries(_props) {
    return null;
}
AreaRangeSeries.type = "Series";
AreaRange.Series = AreaRangeSeries;
AreaRangeSeries._HCReact = {
    type: "Series",
    HCOption: "series.arearange",
    childOption: "series.arearange",
};
AreaRange.type = "SeriesChart";
export default AreaRange;
