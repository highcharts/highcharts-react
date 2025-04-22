/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-22
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/sankey.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Sankey series
 */
const Sankey = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sankey",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SankeySeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
SankeySeries.type = "Series";
Sankey.Series = SankeySeries;
SankeySeries._HCReact = {
    type: "Series",
    HC_Option: "series.sankey",
    childOption: "series.sankey",
};
Sankey.type = "SeriesChart";
export default Sankey;
//# sourceMappingURL=Sankey.js.map