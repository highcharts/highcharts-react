/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/variablepie.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Variablepie.type = "SeriesChart";
export default Variablepie;
//# sourceMappingURL=Variablepie.js.map