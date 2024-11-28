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
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/ColumnPyramid/ColumnPyramidSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Columnpyramid series
 */
const Columnpyramid = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "columnpyramid",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ColumnpyramidSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ColumnpyramidSeries.type = "Series";
Columnpyramid.Series = ColumnpyramidSeries;
ColumnpyramidSeries._HCReact = {
    type: "Series",
    HC_Option: "series.columnpyramid",
    childOption: "series.columnpyramid",
};
// TODO: Fix typings
// @ts-ignore:
ColumnpyramidSeries.defaultProps = {
    type: "columnpyramid",
};
Columnpyramid.type = "SeriesChart";
export default Columnpyramid;
//# sourceMappingURL=Columnpyramid.js.map