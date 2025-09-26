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
 * HLC series
 */
const HLC = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "hlc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function HLCSeries(_props) {
    return null;
}
HLCSeries.type = "Series";
HLC.Series = HLCSeries;
HLCSeries._HCReact = {
    type: "Series",
    HC_Option: "series.hlc",
    childOption: "series.hlc",
};
HLC.type = "SeriesChart";
export default HLC;
//# sourceMappingURL=HLC.js.map