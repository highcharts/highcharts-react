/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
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
AreaSeries.type = "Series";
Area.Series = AreaSeries;
AreaSeries._HCReact = {
    type: "Series",
    HCOption: "series.area",
    childOption: "series.area",
};
Area.type = "SeriesChart";
export default Area;
//# sourceMappingURL=Area.js.map