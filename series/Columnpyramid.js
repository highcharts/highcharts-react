/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/columnpyramid.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Columnpyramid.type = "SeriesChart";
export default Columnpyramid;
//# sourceMappingURL=Columnpyramid.js.map