/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/funnel3d.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Funnel3d series
 */
const Funnel3d = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "funnel3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function Funnel3dSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
Funnel3dSeries.type = "Series";
Funnel3d.Series = Funnel3dSeries;
Funnel3dSeries._HCReact = {
    type: "Series",
    HC_Option: "series.funnel3d",
    childOption: "series.funnel3d",
};
Funnel3d.type = "SeriesChart";
export default Funnel3d;
//# sourceMappingURL=Funnel3d.js.map