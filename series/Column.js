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
 * Column series
 */
const Column = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "column",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ColumnSeries(_props) {
    return null;
}
ColumnSeries.type = "Series";
Column.Series = ColumnSeries;
// TODO: Fix typings
// @ts-ignore:
ColumnSeries.defaultProps = {
    type: "column",
};
Column.type = "SeriesChart";
export default Column;
//# sourceMappingURL=Column.js.map