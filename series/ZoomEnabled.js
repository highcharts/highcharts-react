/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
/**
 * ZoomEnabled series
 */
const ZoomEnabled = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "zoomenabled",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ZoomEnabledSeries(_props) {
    return null;
}
ZoomEnabledSeries.type = "Series";
ZoomEnabled.Series = ZoomEnabledSeries;
ZoomEnabledSeries._HCReact = {
    type: "Series",
    HC_Option: "series.zoomenabled",
    childOption: "series.zoomenabled",
};
ZoomEnabled.type = "SeriesChart";
export default ZoomEnabled;
//# sourceMappingURL=ZoomEnabled.js.map