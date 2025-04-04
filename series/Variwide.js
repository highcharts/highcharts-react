/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Variwide/VariwideSeries.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Variwide series
 */
const Variwide = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "variwide",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function VariwideSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
VariwideSeries.type = "Series";
Variwide.Series = VariwideSeries;
VariwideSeries._HCReact = {
    type: "Series",
    HC_Option: "series.variwide",
    childOption: "series.variwide",
};
Variwide.type = "SeriesChart";
export default Variwide;
//# sourceMappingURL=Variwide.js.map