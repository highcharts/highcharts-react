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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Aroonoscillator series
 */
const Aroonoscillator = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "aroonoscillator",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AroonoscillatorSeries(_props) {
    return null;
}
AroonoscillatorSeries.type = "Series";
Aroonoscillator.Series = AroonoscillatorSeries;
// TODO: Fix typings
// @ts-ignore:
AroonoscillatorSeries.defaultProps = {
    type: "aroonoscillator",
};
Aroonoscillator.type = "SeriesChart";
export default Aroonoscillator;
//# sourceMappingURL=Aroonoscillator.js.map