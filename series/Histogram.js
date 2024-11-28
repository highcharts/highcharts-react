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
import SeriesMod from "highcharts/es-modules/Series/Histogram/HistogramSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Histogram series
 */
const Histogram = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "histogram",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function HistogramSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
HistogramSeries.type = "Series";
Histogram.Series = HistogramSeries;
HistogramSeries._HCReact = {
    type: "Series",
    HC_Option: "series.histogram",
    childOption: "series.histogram",
};
// TODO: Fix typings
// @ts-ignore:
HistogramSeries.defaultProps = {
    type: "histogram",
};
Histogram.type = "SeriesChart";
export default Histogram;
//# sourceMappingURL=Histogram.js.map