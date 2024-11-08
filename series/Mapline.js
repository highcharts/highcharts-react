/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts";
/**
 * Mapline series
 */
const Mapline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function MaplineSeries(_props) {
    return null;
}
MaplineSeries.type = "Series";
Mapline.Series = MaplineSeries;
// TODO: Fix typings
// @ts-ignore:
MaplineSeries.defaultProps = {
    type: "mapline",
};
Mapline.type = "SeriesChart";
export default Mapline;
//# sourceMappingURL=Mapline.js.map