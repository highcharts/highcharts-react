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
import "../seriesModules/Momentum.js";
/**
 * Momentum. This series requires `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `momentum`. Declare the data
 * with `<Momentum.Series>`, or use `MomentumSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import Momentum from '@highcharts/react/indicators/Momentum';
 *
 * <Momentum>
 *   <Momentum.Series options={{ linkedTo: 'prices' }} />
 * </Momentum>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.momentum
 */
function Momentum(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "momentum",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Momentum. This series requires `linkedTo` option to be set.
 *
 * Renders the `momentum` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { MomentumSeries } from '@highcharts/react/indicators/Momentum';
 *
 * <StockChart>
 *   <MomentumSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.momentum
 */
export function MomentumSeries(_props) {
    return null;
}
MomentumSeries.type = "Series";
Momentum.Series = MomentumSeries;
MomentumSeries._HCReact = {
    type: "Series",
    HCOption: "series.momentum",
    childOption: "series.momentum",
};
Momentum.type = "SeriesChart";
export default Momentum;
