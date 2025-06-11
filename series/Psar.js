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
import SeriesMod from "highcharts/esm/modules/psar.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Psar series
 */
const Psar = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "psar",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PsarSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PsarSeries.type = "Series";
Psar.Series = PsarSeries;
PsarSeries._HCReact = {
    type: "Series",
    HC_Option: "series.psar",
    childOption: "series.psar",
};
Psar.type = "SeriesChart";
export default Psar;
//# sourceMappingURL=Psar.js.map