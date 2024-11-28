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
import SeriesMod from "highcharts/es-modules/Series/Pyramid/PyramidSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PyramidSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PyramidSeries.type = "Series";
Pyramid.Series = PyramidSeries;
PyramidSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pyramid",
    childOption: "series.pyramid",
};
// TODO: Fix typings
// @ts-ignore:
PyramidSeries.defaultProps = {
    type: "pyramid",
};
Pyramid.type = "SeriesChart";
export default Pyramid;
//# sourceMappingURL=Pyramid.js.map