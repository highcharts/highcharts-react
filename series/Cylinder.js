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
import SeriesMod from "highcharts/es-modules/Series/Cylinder/CylinderSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Cylinder series
 */
const Cylinder = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cylinder",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function CylinderSeries(_props) {
    return null;
}
CylinderSeries.type = "Series";
Cylinder.Series = CylinderSeries;
// TODO: Fix typings
// @ts-ignore:
CylinderSeries.defaultProps = {
    type: "cylinder",
};
Cylinder.type = "SeriesChart";
export default Cylinder;
//# sourceMappingURL=Cylinder.js.map