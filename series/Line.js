/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts";
/**
 * Line series
 */
const Line = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "line",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function LineSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LineSeries.type = "Series";
Line.Series = LineSeries;
LineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.line",
    childOption: "series.line",
};
// TODO: Fix typings
// @ts-ignore:
LineSeries.defaultProps = {
    type: "line",
};
Line.type = "SeriesChart";
export default Line;
//# sourceMappingURL=Line.js.map