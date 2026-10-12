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
import "../seriesModules/CMO.js";
/**
 * Chande Momentum Oscillator (CMO) technical indicator. This series requires
 * the `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `cmo`. Declare the data with
 * `<CMO.Series>`, or use `CMOSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import CMO from '@highcharts/react/indicators/CMO';
 *
 * <CMO>
 *   <CMO.Series options={{ linkedTo: 'prices' }} />
 * </CMO>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.cmo
 */
function CMO(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cmo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Chande Momentum Oscillator (CMO) technical indicator. This series requires
 * the `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * Renders the `cmo` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { CMOSeries } from '@highcharts/react/indicators/CMO';
 *
 * <StockChart>
 *   <CMOSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.cmo
 */
export function CMOSeries(_props) {
    return null;
}
CMOSeries.type = "Series";
CMO.Series = CMOSeries;
CMOSeries._HCReact = {
    type: "Series",
    HCOption: "series.cmo",
    childOption: "series.cmo",
};
CMO.type = "SeriesChart";
export default CMO;
