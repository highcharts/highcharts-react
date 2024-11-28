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
import SeriesMod from "highcharts/es-modules/Series/VariablePie/VariablePieSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Variablepie series
 */
const Variablepie = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "variablepie",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function VariablepieSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
VariablepieSeries.type = "Series";
Variablepie.Series = VariablepieSeries;
VariablepieSeries._HCReact = {
    type: "Series",
    HC_Option: "series.variablepie",
    childOption: "series.variablepie",
};
// TODO: Fix typings
// @ts-ignore:
VariablepieSeries.defaultProps = {
    type: "variablepie",
};
Variablepie.type = "SeriesChart";
export default Variablepie;
//# sourceMappingURL=Variablepie.js.map