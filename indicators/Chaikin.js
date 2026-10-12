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
import "../seriesModules/Chaikin.js";
/**
 * Chaikin Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `chaikin`. Declare the data with
 * `<Chaikin.Series>`, or use `ChaikinSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import Chaikin from '@highcharts/react/indicators/Chaikin';
 *
 * <Chaikin>
 *   <Chaikin.Series options={{ linkedTo: 'prices' }} />
 * </Chaikin>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.chaikin
 */
function Chaikin(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "chaikin",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Chaikin Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `chaikin` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { ChaikinSeries } from '@highcharts/react/indicators/Chaikin';
 *
 * <StockChart>
 *   <ChaikinSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.chaikin
 */
export function ChaikinSeries(_props) {
    return null;
}
ChaikinSeries.type = "Series";
Chaikin.Series = ChaikinSeries;
ChaikinSeries._HCReact = {
    type: "Series",
    HCOption: "series.chaikin",
    childOption: "series.chaikin",
};
Chaikin.type = "SeriesChart";
export default Chaikin;
