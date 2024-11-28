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
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/VWAP/VWAPIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Vwap series
 */
const Vwap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vwap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function VwapSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
VwapSeries.type = "Series";
Vwap.Series = VwapSeries;
VwapSeries._HCReact = {
    type: "Series",
    HC_Option: "series.vwap",
    childOption: "series.vwap",
};
// TODO: Fix typings
// @ts-ignore:
VwapSeries.defaultProps = {
    type: "vwap",
};
Vwap.type = "SeriesChart";
export default Vwap;
//# sourceMappingURL=Vwap.js.map