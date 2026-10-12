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
import "../seriesModules/Lollipop.js";
/**
 * The lollipop series is a cartesian series with a line anchored from the x
 * axis and a dot at the end to mark the value. Requires `highcharts-more.js`,
 * `modules/dumbbell.js` and `modules/lollipop.js`.
 *
 * A ready-made chart with `chart.type` set to `lollipop`. Declare the data
 * with `<Lollipop.Series>`, or use `LollipopSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * import Lollipop from '@highcharts/react/series/Lollipop';
 *
 * <Lollipop>
 *   <Lollipop.Series data={[1, 2, 3]} />
 * </Lollipop>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.lollipop
 */
function Lollipop(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "lollipop",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * The lollipop series is a cartesian series with a line anchored from the x
 * axis and a dot at the end to mark the value. Requires `highcharts-more.js`,
 * `modules/dumbbell.js` and `modules/lollipop.js`.
 *
 * Renders the `lollipop` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * import { Chart } from '@highcharts/react';
 * import { LollipopSeries } from '@highcharts/react/series/Lollipop';
 *
 * <Chart>
 *   <LollipopSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.lollipop
 */
export function LollipopSeries(_props) {
    return null;
}
LollipopSeries.type = "Series";
Lollipop.Series = LollipopSeries;
LollipopSeries._HCReact = {
    type: "Series",
    HCOption: "series.lollipop",
    childOption: "series.lollipop",
};
Lollipop.type = "SeriesChart";
export default Lollipop;
