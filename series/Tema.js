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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/TEMA/TEMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Tema series
 */
const Tema = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "tema",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function TemaSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
TemaSeries.type = "Series";
Tema.Series = TemaSeries;
TemaSeries._HCReact = {
    type: "Series",
    HC_Option: "series.tema",
    childOption: "series.tema",
};
// TODO: Fix typings
// @ts-ignore:
TemaSeries.defaultProps = {
    type: "tema",
};
Tema.type = "SeriesChart";
export default Tema;
//# sourceMappingURL=Tema.js.map