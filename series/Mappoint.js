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
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Mappoint series
 */
const Mappoint = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mappoint",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MappointSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
MappointSeries.type = "Series";
Mappoint.Series = MappointSeries;
MappointSeries._HCReact = {
    type: "Series",
    HC_Option: "series.mappoint",
    childOption: "series.mappoint",
};
Mappoint.type = "SeriesChart";
export default Mappoint;
//# sourceMappingURL=Mappoint.js.map