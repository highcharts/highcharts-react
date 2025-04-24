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
import SeriesMod from "highcharts/esm/modules/pivotpoints.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Pivotpoints series
 */
const Pivotpoints = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pivotpoints",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PivotpointsSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PivotpointsSeries.type = "Series";
Pivotpoints.Series = PivotpointsSeries;
PivotpointsSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pivotpoints",
    childOption: "series.pivotpoints",
};
Pivotpoints.type = "SeriesChart";
export default Pivotpoints;
//# sourceMappingURL=Pivotpoints.js.map