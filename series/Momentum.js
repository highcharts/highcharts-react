/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Momentum/MomentumIndicator.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Momentum series
 */
const Momentum = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "momentum",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function MomentumSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
MomentumSeries.type = "Series";
Momentum.Series = MomentumSeries;
MomentumSeries._HCReact = {
    type: "Series",
    HC_Option: "series.momentum",
    childOption: "series.momentum",
};
Momentum.type = "SeriesChart";
export default Momentum;
//# sourceMappingURL=Momentum.js.map