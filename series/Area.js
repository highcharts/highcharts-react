/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts } from "../Highcharts";
/**
 * Area series
 */
const Area = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "area",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function AreaSeries(_props) {
    return null;
}
AreaSeries.type = "Series";
Area.Series = AreaSeries;
// TODO: Fix typings
// @ts-ignore:
AreaSeries.defaultProps = {
    type: "area",
};
Area.type = "SeriesChart";
export default Area;
//# sourceMappingURL=Area.js.map