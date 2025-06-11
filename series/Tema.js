/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/tema.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Tema.type = "SeriesChart";
export default Tema;
//# sourceMappingURL=Tema.js.map