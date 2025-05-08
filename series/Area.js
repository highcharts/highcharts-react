/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Area series
 */
const Area = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "area",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function AreaSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
AreaSeries.type = "Series";
Area.Series = AreaSeries;
AreaSeries._HCReact = {
    type: "Series",
    HC_Option: "series.area",
    childOption: "series.area",
};
Area.type = "SeriesChart";
export default Area;
//# sourceMappingURL=Area.js.map