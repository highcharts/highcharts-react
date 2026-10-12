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
import "../seriesModules/PC.js";
/**
 * Price channel (PC). This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `pc`. Declare the data with
 * `<PC.Series>`, or use `PCSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import PC from '@highcharts/react/indicators/PC';
 *
 * <PC>
 *   <PC.Series options={{ linkedTo: 'prices' }} />
 * </PC>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.pc
 */
function PC(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Price channel (PC). This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `pc` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { PCSeries } from '@highcharts/react/indicators/PC';
 *
 * <StockChart>
 *   <PCSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.pc
 */
export function PCSeries(_props) {
    return null;
}
PCSeries.type = "Series";
PC.Series = PCSeries;
PCSeries._HCReact = {
    type: "Series",
    HCOption: "series.pc",
    childOption: "series.pc",
};
PC.type = "SeriesChart";
export default PC;
