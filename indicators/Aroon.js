/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/indicators/aroon.src.js";
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
 * Aroon series
 */
const Aroon = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "aroon",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AroonSeries(_props) {
    return null;
}
AroonSeries.type = "Series";
Aroon.Series = AroonSeries;
AroonSeries._HCReact = {
    type: "Series",
    HC_Option: "series.aroon",
    childOption: "series.aroon",
};
Aroon.type = "SeriesChart";
export default Aroon;
//# sourceMappingURL=Aroon.js.map