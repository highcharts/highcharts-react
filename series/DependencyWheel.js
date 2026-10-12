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
import "../seriesModules/DependencyWheel.js";
/**
 * A dependency wheel chart is a type of flow diagram, where all nodes are laid
 * out in a circle, and the flow between the are drawn as link bands.
 *
 * A ready-made chart with `chart.type` set to `dependencywheel`. Declare the
 * data with `<DependencyWheel.Series>`, or use `DependencyWheelSeries` inside
 * a plain `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * import DependencyWheel from '@highcharts/react/series/DependencyWheel';
 *
 * <DependencyWheel>
 *   <DependencyWheel.Series data={[1, 2, 3]} />
 * </DependencyWheel>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.dependencywheel
 */
function DependencyWheel(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dependencywheel",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A dependency wheel chart is a type of flow diagram, where all nodes are laid
 * out in a circle, and the flow between the are drawn as link bands.
 *
 * Renders the `dependencywheel` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * import { Chart } from '@highcharts/react';
 * import { DependencyWheelSeries } from '@highcharts/react/series/DependencyWheel';
 *
 * <Chart>
 *   <DependencyWheelSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.dependencywheel
 */
export function DependencyWheelSeries(_props) {
    return null;
}
DependencyWheelSeries.type = "Series";
DependencyWheel.Series = DependencyWheelSeries;
DependencyWheelSeries._HCReact = {
    type: "Series",
    HCOption: "series.dependencywheel",
    childOption: "series.dependencywheel",
};
DependencyWheel.type = "SeriesChart";
export default DependencyWheel;
