/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/WilliamsR/WilliamsRIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Williamsr series
 */
const Williamsr = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "williamsr",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function WilliamsrSeries(_props) {
    return null;
}
WilliamsrSeries.type = "Series";
Williamsr.Series = WilliamsrSeries;
// TODO: Fix typings
// @ts-ignore:
WilliamsrSeries.defaultProps = {
    type: "williamsr",
};
Williamsr.type = "SeriesChart";
export default Williamsr;
//# sourceMappingURL=Williamsr.js.map