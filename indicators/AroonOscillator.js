/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/indicators/aroon-oscillator.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
}
/**
 * AroonOscillator series
 */
const AroonOscillator = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "aroonoscillator",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AroonOscillatorSeries(_props) {
    return null;
}
AroonOscillatorSeries.type = "Series";
AroonOscillator.Series = AroonOscillatorSeries;
AroonOscillatorSeries._HCReact = {
    type: "Series",
    HC_Option: "series.aroonoscillator",
    childOption: "series.aroonoscillator",
};
AroonOscillator.type = "SeriesChart";
export default AroonOscillator;
//# sourceMappingURL=AroonOscillator.js.map