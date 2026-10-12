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
import "../seriesModules/Linearregressionslope.js";
/**
 * Linear regression slope indicator. This series requires `linkedTo` option to
 * be set.
 *
 * A ready-made chart with `chart.type` set to `linearregressionslope`. Declare
 * the data with `<Linearregressionslope.Series>`, or use
 * `LinearregressionslopeSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import Linearregressionslope from '@highcharts/react/indicators/Linearregressionslope';
 *
 * <Linearregressionslope>
 *   <Linearregressionslope.Series options={{ linkedTo: 'prices' }} />
 * </Linearregressionslope>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.linearregressionslope
 */
function Linearregressionslope(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregressionslope",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Linear regression slope indicator. This series requires `linkedTo` option to
 * be set.
 *
 * Renders the `linearregressionslope` series type inside a chart component.
 * The most common options are available as props, the rest goes through the
 * `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { LinearregressionslopeSeries } from '@highcharts/react/indicators/Linearregressionslope';
 *
 * <StockChart>
 *   <LinearregressionslopeSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.linearregressionslope
 */
export function LinearregressionslopeSeries(_props) {
    return null;
}
LinearregressionslopeSeries.type = "Series";
Linearregressionslope.Series = LinearregressionslopeSeries;
LinearregressionslopeSeries._HCReact = {
    type: "Series",
    HCOption: "series.linearregressionslope",
    childOption: "series.linearregressionslope",
};
Linearregressionslope.type = "SeriesChart";
export default Linearregressionslope;
