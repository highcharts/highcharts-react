/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Scatter3D/Scatter3DSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function Scatter3dSeries(_props) {
    return null;
}
Scatter3dSeries.type = "Series";
Scatter3d.Series = Scatter3dSeries;
// TODO: Fix typings
// @ts-ignore:
Scatter3dSeries.defaultProps = {
    type: "scatter3d",
};
Scatter3d.type = "SeriesChart";
export default Scatter3d;
//# sourceMappingURL=Scatter3d.js.map