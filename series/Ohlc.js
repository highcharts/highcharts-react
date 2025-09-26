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
 * OHLC series
 */
const OHLC = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ohlc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function OHLCSeries(_props) {
    return null;
}
OHLCSeries.type = "Series";
OHLC.Series = OHLCSeries;
OHLCSeries._HCReact = {
    type: "Series",
    HC_Option: "series.ohlc",
    childOption: "series.ohlc",
};
OHLC.type = "SeriesChart";
export default OHLC;
//# sourceMappingURL=OHLC.js.map