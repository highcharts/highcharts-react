/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/boxplot.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Boxplot series
 */
const Boxplot = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "boxplot",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function BoxplotSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
BoxplotSeries.type = "Series";
Boxplot.Series = BoxplotSeries;
BoxplotSeries._HCReact = {
    type: "Series",
    HC_Option: "series.boxplot",
    childOption: "series.boxplot",
};
Boxplot.type = "SeriesChart";
export default Boxplot;
//# sourceMappingURL=Boxplot.js.map