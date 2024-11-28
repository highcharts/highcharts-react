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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/NATR/NATRIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function NatrSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
NatrSeries.type = "Series";
Natr.Series = NatrSeries;
NatrSeries._HCReact = {
    type: "Series",
    HC_Option: "series.natr",
    childOption: "series.natr",
};
// TODO: Fix typings
// @ts-ignore:
NatrSeries.defaultProps = {
    type: "natr",
};
Natr.type = "SeriesChart";
export default Natr;
//# sourceMappingURL=Natr.js.map