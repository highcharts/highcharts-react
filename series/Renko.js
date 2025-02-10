/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Renko/RenkoSeries.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Renko.type = "SeriesChart";
export default Renko;
//# sourceMappingURL=Renko.js.map