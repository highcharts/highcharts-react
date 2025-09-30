/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/highcharts-3d.src.js";
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
 * Scatter3D series
 */
const Scatter3D = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "scatter3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function Scatter3DSeries(_props) {
    return null;
}
Scatter3DSeries.type = "Series";
Scatter3D.Series = Scatter3DSeries;
Scatter3DSeries._HCReact = {
    type: "Series",
    HC_Option: "series.scatter3d",
    childOption: "series.scatter3d",
};
Scatter3D.type = "SeriesChart";
export default Scatter3D;
//# sourceMappingURL=Scatter3D.js.map