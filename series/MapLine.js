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
 * MapLine series
 */
const MapLine = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapLineSeries(_props) {
    return null;
}
MapLineSeries.type = "Series";
MapLine.Series = MapLineSeries;
MapLineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.mapline",
    childOption: "series.mapline",
};
MapLine.type = "SeriesChart";
export default MapLine;
//# sourceMappingURL=MapLine.js.map