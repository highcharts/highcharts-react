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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Zigzag/ZigzagIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Zigzag series
 */
const Zigzag = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "zigzag",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ZigzagSeries(_props) {
    return null;
}
ZigzagSeries.type = "Series";
Zigzag.Series = ZigzagSeries;
// TODO: Fix typings
// @ts-ignore:
ZigzagSeries.defaultProps = {
    type: "zigzag",
};
Zigzag.type = "SeriesChart";
export default Zigzag;
//# sourceMappingURL=Zigzag.js.map