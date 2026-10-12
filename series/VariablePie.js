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
import "../seriesModules/VariablePie.js";
/**
 * A variable pie series is a two dimensional series type, where each point
 * renders an Y and Z value. Each point is drawn as a pie slice where the size
 * (arc) of the slice relates to the Y value and the radius of pie slice
 * relates to the Z value.
 *
 * A ready-made chart with `chart.type` set to `variablepie`. Declare the data
 * with `<VariablePie.Series>`, or use `VariablePieSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * import VariablePie from '@highcharts/react/series/VariablePie';
 *
 * <VariablePie>
 *   <VariablePie.Series data={[1, 2, 3]} />
 * </VariablePie>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.variablepie
 */
function VariablePie(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "variablepie",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A variable pie series is a two dimensional series type, where each point
 * renders an Y and Z value. Each point is drawn as a pie slice where the size
 * (arc) of the slice relates to the Y value and the radius of pie slice
 * relates to the Z value.
 *
 * Renders the `variablepie` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * import { Chart } from '@highcharts/react';
 * import { VariablePieSeries } from '@highcharts/react/series/VariablePie';
 *
 * <Chart>
 *   <VariablePieSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.variablepie
 */
export function VariablePieSeries(_props) {
    return null;
}
VariablePieSeries.type = "Series";
VariablePie.Series = VariablePieSeries;
VariablePieSeries._HCReact = {
    type: "Series",
    HCOption: "series.variablepie",
    childOption: "series.variablepie",
};
VariablePie.type = "SeriesChart";
export default VariablePie;
