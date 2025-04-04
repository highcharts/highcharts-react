/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Scatter3D/Scatter3DSeries.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Scatter3d series
 */
const Scatter3d = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "scatter3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function Scatter3dSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
Scatter3dSeries.type = "Series";
Scatter3d.Series = Scatter3dSeries;
Scatter3dSeries._HCReact = {
    type: "Series",
    HC_Option: "series.scatter3d",
    childOption: "series.scatter3d",
};
Scatter3d.type = "SeriesChart";
export default Scatter3d;
//# sourceMappingURL=Scatter3d.js.map