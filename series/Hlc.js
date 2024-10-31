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
 * Hlc series
 */
const Hlc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "hlc",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function HlcSeries(_props) {
    return null;
}
HlcSeries.type = "Series";
Hlc.Series = HlcSeries;
// TODO: Fix typings
// @ts-ignore:
HlcSeries.defaultProps = {
    type: "hlc",
};
Hlc.type = "SeriesChart";
export default Hlc;
//# sourceMappingURL=Hlc.js.map