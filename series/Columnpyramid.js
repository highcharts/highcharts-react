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
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/highcharts-more.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
}
/**
 * ColumnPyramid series
 */
const ColumnPyramid = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "columnpyramid",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ColumnPyramidSeries(_props) {
    return null;
}
ColumnPyramidSeries.type = "Series";
ColumnPyramid.Series = ColumnPyramidSeries;
ColumnPyramidSeries._HCReact = {
    type: "Series",
    HC_Option: "series.columnpyramid",
    childOption: "series.columnpyramid",
};
ColumnPyramid.type = "SeriesChart";
export default ColumnPyramid;
//# sourceMappingURL=ColumnPyramid.js.map