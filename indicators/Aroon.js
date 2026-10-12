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
import "../seriesModules/Aroon.js";
/**
 * Aroon. This series requires the `linkedTo` option to be set and should be
 * loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `aroon`. Declare the data with
 * `<Aroon.Series>`, or use `AroonSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import Aroon from '@highcharts/react/indicators/Aroon';
 *
 * <Aroon>
 *   <Aroon.Series options={{ linkedTo: 'prices' }} />
 * </Aroon>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.aroon
 */
function Aroon(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "aroon",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Aroon. This series requires the `linkedTo` option to be set and should be
 * loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `aroon` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { AroonSeries } from '@highcharts/react/indicators/Aroon';
 *
 * <StockChart>
 *   <AroonSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.aroon
 */
export function AroonSeries(_props) {
    return null;
}
AroonSeries.type = "Series";
Aroon.Series = AroonSeries;
AroonSeries._HCReact = {
    type: "Series",
    HCOption: "series.aroon",
    childOption: "series.aroon",
};
Aroon.type = "SeriesChart";
export default Aroon;
