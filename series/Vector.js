/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Vector/VectorSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Vector series
 */
const Vector = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vector",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function VectorSeries(_props) {
    return null;
}
VectorSeries.type = "Series";
Vector.Series = VectorSeries;
// TODO: Fix typings
// @ts-ignore:
VectorSeries.defaultProps = {
    type: "vector",
};
Vector.type = "SeriesChart";
export default Vector;
//# sourceMappingURL=Vector.js.map