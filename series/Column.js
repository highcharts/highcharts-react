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
 * Column series
 */
const Column = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "column",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ColumnSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ColumnSeries.type = "Series";
Column.Series = ColumnSeries;
ColumnSeries._HCReact = {
    type: "Series",
    HC_Option: "series.column",
    childOption: "series.column",
};
// TODO: Fix typings
// @ts-ignore:
ColumnSeries.defaultProps = {
    type: "column",
};
Column.type = "SeriesChart";
export default Column;
//# sourceMappingURL=Column.js.map