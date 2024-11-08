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
import SeriesMod from "highcharts/es-modules/Series/Variwide/VariwideSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
VariwideSeries.type = "Series";
Variwide.Series = VariwideSeries;
// TODO: Fix typings
// @ts-ignore:
VariwideSeries.defaultProps = {
    type: "variwide",
};
Variwide.type = "SeriesChart";
export default Variwide;
//# sourceMappingURL=Variwide.js.map