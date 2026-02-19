/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
/**
 * Spline series
 */
const Spline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "spline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SplineSeries(_props) {
    return null;
}
SplineSeries.type = "Series";
Spline.Series = SplineSeries;
SplineSeries._HCReact = {
    type: "Series",
    HCOption: "series.spline",
    childOption: "series.spline",
};
Spline.type = "SeriesChart";
export default Spline;
//# sourceMappingURL=Spline.js.map