/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/zigzag.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
// TODO: replace uses of this with _HCReact.type
ZigzagSeries.type = "Series";
Zigzag.Series = ZigzagSeries;
ZigzagSeries._HCReact = {
    type: "Series",
    HC_Option: "series.zigzag",
    childOption: "series.zigzag",
};
Zigzag.type = "SeriesChart";
export default Zigzag;
//# sourceMappingURL=Zigzag.js.map