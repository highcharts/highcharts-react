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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/IKH/IKHIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
// TODO: Fix typings
// @ts-ignore:
IkhSeries.defaultProps = {
    type: "ikh",
};
Ikh.type = "SeriesChart";
export default Ikh;
//# sourceMappingURL=Ikh.js.map