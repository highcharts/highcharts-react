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
import SeriesMod from "highcharts/esm/modules/venn.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Venn series
 */
const Venn = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "venn",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function VennSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
VennSeries.type = "Series";
Venn.Series = VennSeries;
VennSeries._HCReact = {
    type: "Series",
    HC_Option: "series.venn",
    childOption: "series.venn",
};
Venn.type = "SeriesChart";
export default Venn;
//# sourceMappingURL=Venn.js.map