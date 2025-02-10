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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/SMA/SMAIndicator.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Sma series
 */
const Sma = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sma",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function SmaSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
SmaSeries.type = "Series";
Sma.Series = SmaSeries;
SmaSeries._HCReact = {
    type: "Series",
    HC_Option: "series.sma",
    childOption: "series.sma",
};
Sma.type = "SeriesChart";
export default Sma;
//# sourceMappingURL=Sma.js.map