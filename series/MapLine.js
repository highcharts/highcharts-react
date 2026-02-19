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
    HCOption: "series.mapline",
    childOption: "series.mapline",
};
MapLine.type = "SeriesChart";
export default MapLine;
//# sourceMappingURL=MapLine.js.map