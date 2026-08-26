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
import "highcharts/es-modules/masters/indicators/indicators.src.js";
import "highcharts/es-modules/masters/indicators/stochastic.src.js";
import "highcharts/es-modules/masters/indicators/slow-stochastic.src.js";
/**
 * Slow Stochastic oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after `stock/indicators/indicators.js` and
 * `stock/indicators/stochastic.js` files.
 *
 * A ready-made chart with `chart.type` set to `slowstochastic`. Declare the
 * data with `<SlowStochastic.Series>`, or use `SlowStochasticSeries` inside a
 * plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <SlowStochastic>
 *   <SlowStochastic.Series options={{ linkedTo: 'prices' }} />
 * </SlowStochastic>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.slowstochastic
 */
function SlowStochastic(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "slowstochastic",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Slow Stochastic oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after `stock/indicators/indicators.js` and
 * `stock/indicators/stochastic.js` files.
 *
 * Renders the `slowstochastic` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <SlowStochasticSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.slowstochastic
 */
export function SlowStochasticSeries(_props) {
    return null;
}
SlowStochasticSeries.type = "Series";
SlowStochastic.Series = SlowStochasticSeries;
SlowStochasticSeries._HCReact = {
    type: "Series",
    HCOption: "series.slowstochastic",
    childOption: "series.slowstochastic",
};
SlowStochastic.type = "SeriesChart";
export default SlowStochastic;
