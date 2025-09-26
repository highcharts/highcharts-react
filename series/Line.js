/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
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
LineSeries.type = "Series";
Line.Series = LineSeries;
LineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.line",
    childOption: "series.line",
};
Line.type = "SeriesChart";
export default Line;
//# sourceMappingURL=Line.js.map