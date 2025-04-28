/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/williamsr.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Williamsr series
 */
const Williamsr = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "williamsr",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function WilliamsrSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
WilliamsrSeries.type = "Series";
Williamsr.Series = WilliamsrSeries;
WilliamsrSeries._HCReact = {
    type: "Series",
    HC_Option: "series.williamsr",
    childOption: "series.williamsr",
};
Williamsr.type = "SeriesChart";
export default Williamsr;
//# sourceMappingURL=Williamsr.js.map