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
 * Map series
 */
const Map = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "map",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapSeries(_props) {
    return null;
}
MapSeries.type = "Series";
Map.Series = MapSeries;
MapSeries._HCReact = {
    type: "Series",
    HCOption: "series.map",
    childOption: "series.map",
};
Map.type = "SeriesChart";
export default Map;
//# sourceMappingURL=Map.js.map