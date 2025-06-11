/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/sunburst.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Sunburst series
 */
const Sunburst = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sunburst",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SunburstSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
SunburstSeries.type = "Series";
Sunburst.Series = SunburstSeries;
SunburstSeries._HCReact = {
    type: "Series",
    HC_Option: "series.sunburst",
    childOption: "series.sunburst",
};
Sunburst.type = "SeriesChart";
export default Sunburst;
//# sourceMappingURL=Sunburst.js.map