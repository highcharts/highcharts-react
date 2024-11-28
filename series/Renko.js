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
import SeriesMod from "highcharts/es-modules/Series/Renko/RenkoSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Renko series
 */
const Renko = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "renko",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function RenkoSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
RenkoSeries.type = "Series";
Renko.Series = RenkoSeries;
RenkoSeries._HCReact = {
    type: "Series",
    HC_Option: "series.renko",
    childOption: "series.renko",
};
// TODO: Fix typings
// @ts-ignore:
RenkoSeries.defaultProps = {
    type: "renko",
};
Renko.type = "SeriesChart";
export default Renko;
//# sourceMappingURL=Renko.js.map