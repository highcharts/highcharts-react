/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts";
/**
 * Mapbubble series
 */
const Mapbubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapbubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapbubbleSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
MapbubbleSeries.type = "Series";
Mapbubble.Series = MapbubbleSeries;
MapbubbleSeries._HCReact = {
    type: "Series",
    HC_Option: "series.mapbubble",
    childOption: "series.mapbubble",
};
// TODO: Fix typings
// @ts-ignore:
MapbubbleSeries.defaultProps = {
    type: "mapbubble",
};
Mapbubble.type = "SeriesChart";
export default Mapbubble;
//# sourceMappingURL=Mapbubble.js.map