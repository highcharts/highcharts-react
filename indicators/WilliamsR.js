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
import "../seriesModules/WilliamsR.js";
/**
 * Williams %R. This series requires the `linkedTo` option to be set and should
 * be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `williamsr`. Declare the data
 * with `<WilliamsR.Series>`, or use `WilliamsRSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import WilliamsR from '@highcharts/react/indicators/WilliamsR';
 *
 * <WilliamsR>
 *   <WilliamsR.Series options={{ linkedTo: 'prices' }} />
 * </WilliamsR>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.williamsr
 */
function WilliamsR(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "williamsr",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Williams %R. This series requires the `linkedTo` option to be set and should
 * be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `williamsr` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { WilliamsRSeries } from '@highcharts/react/indicators/WilliamsR';
 *
 * <StockChart>
 *   <WilliamsRSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.williamsr
 */
export function WilliamsRSeries(_props) {
    return null;
}
WilliamsRSeries.type = "Series";
WilliamsR.Series = WilliamsRSeries;
WilliamsRSeries._HCReact = {
    type: "Series",
    HCOption: "series.williamsr",
    childOption: "series.williamsr",
};
WilliamsR.type = "SeriesChart";
export default WilliamsR;
