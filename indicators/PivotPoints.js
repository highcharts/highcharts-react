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
import "../seriesModules/PivotPoints.js";
/**
 * Pivot points indicator. This series requires the `linkedTo` option to be set
 * and should be loaded after `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `pivotpoints`. Declare the data
 * with `<PivotPoints.Series>`, or use `PivotPointsSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import PivotPoints from '@highcharts/react/indicators/PivotPoints';
 *
 * <PivotPoints>
 *   <PivotPoints.Series options={{ linkedTo: 'prices' }} />
 * </PivotPoints>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.pivotpoints
 */
function PivotPoints(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pivotpoints",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Pivot points indicator. This series requires the `linkedTo` option to be set
 * and should be loaded after `stock/indicators/indicators.js` file.
 *
 * Renders the `pivotpoints` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { PivotPointsSeries } from '@highcharts/react/indicators/PivotPoints';
 *
 * <StockChart>
 *   <PivotPointsSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.pivotpoints
 */
export function PivotPointsSeries(_props) {
    return null;
}
PivotPointsSeries.type = "Series";
PivotPoints.Series = PivotPointsSeries;
PivotPointsSeries._HCReact = {
    type: "Series",
    HCOption: "series.pivotpoints",
    childOption: "series.pivotpoints",
};
PivotPoints.type = "SeriesChart";
export default PivotPoints;
