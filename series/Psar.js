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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PSAR/PSARIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Psar series
 */
const Psar = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "psar",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PsarSeries(_props) {
    return null;
}
PsarSeries.type = "Series";
Psar.Series = PsarSeries;
// TODO: Fix typings
// @ts-ignore:
PsarSeries.defaultProps = {
    type: "psar",
};
Psar.type = "SeriesChart";
export default Psar;
//# sourceMappingURL=Psar.js.map