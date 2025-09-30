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
import { Chart } from "../Highcharts.js";
/**
 * MapPoint series
 */
const MapPoint = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mappoint",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapPointSeries(_props) {
    return null;
}
MapPointSeries.type = "Series";
MapPoint.Series = MapPointSeries;
MapPointSeries._HCReact = {
    type: "Series",
    HC_Option: "series.mappoint",
    childOption: "series.mappoint",
};
MapPoint.type = "SeriesChart";
export default MapPoint;
//# sourceMappingURL=MapPoint.js.map