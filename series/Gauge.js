/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Gauge/GaugeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
GaugeSeries.type = "Series";
Gauge.Series = GaugeSeries;
// TODO: Fix typings
// @ts-ignore:
GaugeSeries.defaultProps = {
    type: "gauge",
};
Gauge.type = "SeriesChart";
export default Gauge;
//# sourceMappingURL=Gauge.js.map