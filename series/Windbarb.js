/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/windbarb.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Windbarb series
 */
const Windbarb = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "windbarb",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function WindbarbSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
WindbarbSeries.type = "Series";
Windbarb.Series = WindbarbSeries;
WindbarbSeries._HCReact = {
    type: "Series",
    HC_Option: "series.windbarb",
    childOption: "series.windbarb",
};
Windbarb.type = "SeriesChart";
export default Windbarb;
//# sourceMappingURL=Windbarb.js.map