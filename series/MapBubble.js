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
 * MapBubble series
 */
const MapBubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapbubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapBubbleSeries(_props) {
    return null;
}
MapBubbleSeries.type = "Series";
MapBubble.Series = MapBubbleSeries;
MapBubbleSeries._HCReact = {
    type: "Series",
    HCOption: "series.mapbubble",
    childOption: "series.mapbubble",
};
MapBubble.type = "SeriesChart";
export default MapBubble;
//# sourceMappingURL=MapBubble.js.map