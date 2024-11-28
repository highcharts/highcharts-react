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
// TODO: replace uses of this with _HCReact.type
MapSeries.type = "Series";
Map.Series = MapSeries;
MapSeries._HCReact = {
    type: "Series",
    HC_Option: "series.map",
    childOption: "series.map",
};
// TODO: Fix typings
// @ts-ignore:
MapSeries.defaultProps = {
    type: "map",
};
Map.type = "SeriesChart";
export default Map;
//# sourceMappingURL=Map.js.map