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
import SeriesMod from "highcharts/es-modules/Series/Funnel3D/Funnel3DSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function Funnel3dSeries(_props) {
    return null;
}
Funnel3dSeries.type = "Series";
Funnel3d.Series = Funnel3dSeries;
// TODO: Fix typings
// @ts-ignore:
Funnel3dSeries.defaultProps = {
    type: "funnel3d",
};
Funnel3d.type = "SeriesChart";
export default Funnel3d;
//# sourceMappingURL=Funnel3d.js.map