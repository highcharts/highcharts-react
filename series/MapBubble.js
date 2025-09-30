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
    HC_Option: "series.mapbubble",
    childOption: "series.mapbubble",
};
MapBubble.type = "SeriesChart";
export default MapBubble;
//# sourceMappingURL=MapBubble.js.map