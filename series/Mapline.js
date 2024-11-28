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
// TODO: replace uses of this with _HCReact.type
MaplineSeries.type = "Series";
Mapline.Series = MaplineSeries;
MaplineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.mapline",
    childOption: "series.mapline",
};
// TODO: Fix typings
// @ts-ignore:
MaplineSeries.defaultProps = {
    type: "mapline",
};
Mapline.type = "SeriesChart";
export default Mapline;
//# sourceMappingURL=Mapline.js.map