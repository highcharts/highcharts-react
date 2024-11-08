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
import SeriesMod from "highcharts/es-modules/Series/Pictorial/PictorialSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Pictorial series
 */
const Pictorial = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pictorial",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PictorialSeries(_props) {
    return null;
}
PictorialSeries.type = "Series";
Pictorial.Series = PictorialSeries;
// TODO: Fix typings
// @ts-ignore:
PictorialSeries.defaultProps = {
    type: "pictorial",
};
Pictorial.type = "SeriesChart";
export default Pictorial;
//# sourceMappingURL=Pictorial.js.map