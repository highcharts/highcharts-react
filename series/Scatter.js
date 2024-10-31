/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts } from "../Highcharts";
/**
 * Scatter series
 */
const Scatter = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "scatter",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ScatterSeries(_props) {
    return null;
}
ScatterSeries.type = "Series";
Scatter.Series = ScatterSeries;
// TODO: Fix typings
// @ts-ignore:
ScatterSeries.defaultProps = {
    type: "scatter",
};
Scatter.type = "SeriesChart";
export default Scatter;
//# sourceMappingURL=Scatter.js.map