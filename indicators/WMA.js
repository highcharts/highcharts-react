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
import "../seriesModules/WMA.js";
/**
 * Weighted moving average indicator (WMA). This series requires `linkedTo`
 * option to be set.
 *
 * A ready-made chart with `chart.type` set to `wma`. Declare the data with
 * `<WMA.Series>`, or use `WMASeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import WMA from '@highcharts/react/indicators/WMA';
 *
 * <WMA>
 *   <WMA.Series options={{ linkedTo: 'prices' }} />
 * </WMA>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.wma
 */
function WMA(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "wma",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Weighted moving average indicator (WMA). This series requires `linkedTo`
 * option to be set.
 *
 * Renders the `wma` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { WMASeries } from '@highcharts/react/indicators/WMA';
 *
 * <StockChart>
 *   <WMASeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.wma
 */
export function WMASeries(_props) {
    return null;
}
WMASeries.type = "Series";
WMA.Series = WMASeries;
WMASeries._HCReact = {
    type: "Series",
    HCOption: "series.wma",
    childOption: "series.wma",
};
WMA.type = "SeriesChart";
export default WMA;
