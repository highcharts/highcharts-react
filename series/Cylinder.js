/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Cylinder/CylinderSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function CylinderSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
CylinderSeries.type = "Series";
Cylinder.Series = CylinderSeries;
CylinderSeries._HCReact = {
    type: "Series",
    HC_Option: "series.cylinder",
    childOption: "series.cylinder",
};
// TODO: Fix typings
// @ts-ignore:
CylinderSeries.defaultProps = {
    type: "cylinder",
};
Cylinder.type = "SeriesChart";
export default Cylinder;
//# sourceMappingURL=Cylinder.js.map