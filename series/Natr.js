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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/NATR/NATRIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Natr series
 */
const Natr = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "natr",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function NatrSeries(_props) {
    return null;
}
NatrSeries.type = "Series";
Natr.Series = NatrSeries;
// TODO: Fix typings
// @ts-ignore:
NatrSeries.defaultProps = {
    type: "natr",
};
Natr.type = "SeriesChart";
export default Natr;
//# sourceMappingURL=Natr.js.map