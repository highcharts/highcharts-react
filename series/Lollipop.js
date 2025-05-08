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
import SeriesMod from "highcharts/esm/modules/lollipop.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Lollipop series
 */
const Lollipop = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "lollipop",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function LollipopSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LollipopSeries.type = "Series";
Lollipop.Series = LollipopSeries;
LollipopSeries._HCReact = {
    type: "Series",
    HC_Option: "series.lollipop",
    childOption: "series.lollipop",
};
Lollipop.type = "SeriesChart";
export default Lollipop;
//# sourceMappingURL=Lollipop.js.map