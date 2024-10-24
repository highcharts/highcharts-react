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
import SeriesMod from "highcharts/es-modules/Series/Pyramid/PyramidSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Pyramid series
 */
const Pyramid = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pyramid",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PyramidSeries(_props) {
    return null;
}
PyramidSeries.type = "Series";
Pyramid.Series = PyramidSeries;
// TODO: Fix typings
// @ts-ignore:
PyramidSeries.defaultProps = {
    type: "pyramid",
};
Pyramid.type = "SeriesChart";
export default Pyramid;
//# sourceMappingURL=Pyramid.js.map