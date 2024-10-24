/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
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