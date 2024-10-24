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
 * Bar series
 */
const Bar = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bar",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function BarSeries(_props) {
    return null;
}
BarSeries.type = "Series";
Bar.Series = BarSeries;
// TODO: Fix typings
// @ts-ignore:
BarSeries.defaultProps = {
    type: "bar",
};
Bar.type = "SeriesChart";
export default Bar;
//# sourceMappingURL=Bar.js.map