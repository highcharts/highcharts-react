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
import SeriesMod from "highcharts/es-modules/Series/HeikinAshi/HeikinAshiSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Heikinashi series
 */
const Heikinashi = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "heikinashi",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function HeikinashiSeries(_props) {
    return null;
}
HeikinashiSeries.type = "Series";
Heikinashi.Series = HeikinashiSeries;
// TODO: Fix typings
// @ts-ignore:
HeikinashiSeries.defaultProps = {
    type: "heikinashi",
};
Heikinashi.type = "SeriesChart";
export default Heikinashi;
//# sourceMappingURL=Heikinashi.js.map