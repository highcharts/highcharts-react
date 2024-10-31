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
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/AD/ADIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Ad series
 */
const Ad = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ad",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AdSeries(_props) {
    return null;
}
AdSeries.type = "Series";
Ad.Series = AdSeries;
// TODO: Fix typings
// @ts-ignore:
AdSeries.defaultProps = {
    type: "ad",
};
Ad.type = "SeriesChart";
export default Ad;
//# sourceMappingURL=Ad.js.map