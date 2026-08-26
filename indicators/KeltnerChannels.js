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
import "highcharts/es-modules/masters/indicators/keltner-channels.src.js";
/**
 * Keltner Channels. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`,
 * `stock/indicators/atr.js`, and `stock/ema/.js`.
 *
 * A ready-made chart with `chart.type` set to `keltnerchannels`. Declare the
 * data with `<KeltnerChannels.Series>`, or use `KeltnerChannelsSeries` inside
 * a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <KeltnerChannels>
 *   <KeltnerChannels.Series options={{ linkedTo: 'prices' }} />
 * </KeltnerChannels>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.keltnerchannels
 */
function KeltnerChannels(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "keltnerchannels",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Keltner Channels. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`,
 * `stock/indicators/atr.js`, and `stock/ema/.js`.
 *
 * Renders the `keltnerchannels` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <KeltnerChannelsSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.keltnerchannels
 */
export function KeltnerChannelsSeries(_props) {
    return null;
}
KeltnerChannelsSeries.type = "Series";
KeltnerChannels.Series = KeltnerChannelsSeries;
KeltnerChannelsSeries._HCReact = {
    type: "Series",
    HCOption: "series.keltnerchannels",
    childOption: "series.keltnerchannels",
};
KeltnerChannels.type = "SeriesChart";
export default KeltnerChannels;
