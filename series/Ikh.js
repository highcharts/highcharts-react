/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-22
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/ikh.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Ikh series
 */
const Ikh = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ikh",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function IkhSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
IkhSeries.type = "Series";
Ikh.Series = IkhSeries;
IkhSeries._HCReact = {
    type: "Series",
    HC_Option: "series.ikh",
    childOption: "series.ikh",
};
Ikh.type = "SeriesChart";
export default Ikh;
//# sourceMappingURL=Ikh.js.map