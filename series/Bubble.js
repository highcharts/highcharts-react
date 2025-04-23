/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/bubble.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Bubble series
 */
const Bubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function BubbleSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
BubbleSeries.type = "Series";
Bubble.Series = BubbleSeries;
BubbleSeries._HCReact = {
    type: "Series",
    HC_Option: "series.bubble",
    childOption: "series.bubble",
};
Bubble.type = "SeriesChart";
export default Bubble;
//# sourceMappingURL=Bubble.js.map