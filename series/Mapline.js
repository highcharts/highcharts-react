/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Mapline series
 */
const Mapline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MaplineSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
MaplineSeries.type = "Series";
Mapline.Series = MaplineSeries;
MaplineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.mapline",
    childOption: "series.mapline",
};
Mapline.type = "SeriesChart";
export default Mapline;
//# sourceMappingURL=Mapline.js.map