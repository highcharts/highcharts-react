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
 * MapData series
 */
const MapData = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapdata",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapDataSeries(_props) {
    return null;
}
MapDataSeries.type = "Series";
MapData.Series = MapDataSeries;
MapDataSeries._HCReact = {
    type: "Series",
    HCOption: "series.mapdata",
    childOption: "series.mapdata",
};
MapData.type = "SeriesChart";
export default MapData;
//# sourceMappingURL=MapData.js.map