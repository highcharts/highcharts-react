/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts } from "../Highcharts";
/**
 * Map series
 */
const Map = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "map",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MapSeries(_props) {
    return null;
}
MapSeries.type = "Series";
Map.Series = MapSeries;
// TODO: Fix typings
// @ts-ignore:
MapSeries.defaultProps = {
    type: "map",
};
Map.type = "SeriesChart";
export default Map;
//# sourceMappingURL=Map.js.map