/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/modules/pointandfigure.src.js";
/**
 * PointAndFigure series
 */
const PointAndFigure = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pointandfigure",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
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
