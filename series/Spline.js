/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts } from "../Highcharts";
/**
 * Spline series
 */
const Spline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "spline",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SplineSeries(_props) {
    return null;
}
SplineSeries.type = "Series";
Spline.Series = SplineSeries;
// TODO: Fix typings
// @ts-ignore:
SplineSeries.defaultProps = {
    type: "spline",
};
Spline.type = "SeriesChart";
export default Spline;
//# sourceMappingURL=Spline.js.map