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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/ABands/ABandsIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Abands series
 */
const Abands = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "abands",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AbandsSeries(_props) {
    return null;
}
AbandsSeries.type = "Series";
Abands.Series = AbandsSeries;
// TODO: Fix typings
// @ts-ignore:
AbandsSeries.defaultProps = {
    type: "abands",
};
Abands.type = "SeriesChart";
export default Abands;
//# sourceMappingURL=Abands.js.map