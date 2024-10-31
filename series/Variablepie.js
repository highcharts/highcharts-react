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
import SeriesMod from "highcharts/es-modules/Series/VariablePie/VariablePieSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function VariablepieSeries(_props) {
    return null;
}
VariablepieSeries.type = "Series";
Variablepie.Series = VariablepieSeries;
// TODO: Fix typings
// @ts-ignore:
VariablepieSeries.defaultProps = {
    type: "variablepie",
};
Variablepie.type = "SeriesChart";
export default Variablepie;
//# sourceMappingURL=Variablepie.js.map