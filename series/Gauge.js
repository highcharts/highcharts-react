/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Gauge/GaugeSeries.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Gauge series
 */
const Gauge = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "gauge",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function GaugeSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
GaugeSeries.type = "Series";
Gauge.Series = GaugeSeries;
GaugeSeries._HCReact = {
    type: "Series",
    HC_Option: "series.gauge",
    childOption: "series.gauge",
};
Gauge.type = "SeriesChart";
export default Gauge;
//# sourceMappingURL=Gauge.js.map