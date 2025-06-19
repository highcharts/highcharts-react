/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/arearange.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Arearange series
 */
const Arearange = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "arearange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ArearangeSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ArearangeSeries.type = "Series";
Arearange.Series = ArearangeSeries;
ArearangeSeries._HCReact = {
    type: "Series",
    HC_Option: "series.arearange",
    childOption: "series.arearange",
};
Arearange.type = "SeriesChart";
export default Arearange;
//# sourceMappingURL=Arearange.js.map