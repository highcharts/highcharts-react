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
 * The area spline range is a cartesian series type with higher and lower Y
 * values along an X axis. The area inside the range is colored, and the graph
 * outlining the area is a smoothed spline.
 *
 * A ready-made chart with `chart.type` set to `areasplinerange`. Declare the
 * data with `<AreaSplineRange.Series>`, or use `AreaSplineRangeSeries` inside
 * a plain `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <AreaSplineRange>
 *   <AreaSplineRange.Series data={[1, 2, 3]} />
 * </AreaSplineRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.areasplinerange
 */
function AreaSplineRange(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "areasplinerange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The area spline range is a cartesian series type with higher and lower Y
 * values along an X axis. The area inside the range is colored, and the graph
 * outlining the area is a smoothed spline.
 *
 * Renders the `areasplinerange` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaSplineRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.areasplinerange
 */
export function AreaSplineRangeSeries(_props) {
    return null;
}
AreaSplineRangeSeries.type = "Series";
AreaSplineRange.Series = AreaSplineRangeSeries;
AreaSplineRangeSeries._HCReact = {
    type: "Series",
    HCOption: "series.areasplinerange",
    childOption: "series.areasplinerange",
};
AreaSplineRange.type = "SeriesChart";
export default AreaSplineRange;
