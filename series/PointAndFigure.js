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
import "../seriesModules/PointAndFigure.js";
/**
 * The Point and Figure series represents changes in stock price movements,
 * without focusing on the time and volume. Each data point is created when the
 * `boxSize` criteria is met. Opposite column of points gets created only when
 * the `reversalAmount` threshold is met.
 *
 * A ready-made chart with `chart.type` set to `pointandfigure`. Declare the
 * data with `<PointAndFigure.Series>`, or use `PointAndFigureSeries` inside a
 * plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import PointAndFigure from '@highcharts/react/series/PointAndFigure';
 *
 * <PointAndFigure>
 *   <PointAndFigure.Series data={[1, 2, 3]} />
 * </PointAndFigure>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.pointandfigure
 */
function PointAndFigure(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pointandfigure",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * The Point and Figure series represents changes in stock price movements,
 * without focusing on the time and volume. Each data point is created when the
 * `boxSize` criteria is met. Opposite column of points gets created only when
 * the `reversalAmount` threshold is met.
 *
 * Renders the `pointandfigure` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { PointAndFigureSeries } from '@highcharts/react/series/PointAndFigure';
 *
 * <StockChart>
 *   <PointAndFigureSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.pointandfigure
 */
export function PointAndFigureSeries(_props) {
    return null;
}
PointAndFigureSeries.type = "Series";
PointAndFigure.Series = PointAndFigureSeries;
PointAndFigureSeries._HCReact = {
    type: "Series",
    HCOption: "series.pointandfigure",
    childOption: "series.pointandfigure",
};
PointAndFigure.type = "SeriesChart";
export default PointAndFigure;
