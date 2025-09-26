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
import SeriesMod from "highcharts/esm/highcharts-more.src.js";
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
 * PackedBubble series
 */
const PackedBubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "packedbubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PackedBubbleSeries(_props) {
    return null;
}
PackedBubbleSeries.type = "Series";
PackedBubble.Series = PackedBubbleSeries;
PackedBubbleSeries._HCReact = {
    type: "Series",
    HC_Option: "series.packedbubble",
    childOption: "series.packedbubble",
};
PackedBubble.type = "SeriesChart";
export default PackedBubble;
//# sourceMappingURL=PackedBubble.js.map