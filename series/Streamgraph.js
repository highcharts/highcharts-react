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
import SeriesMod from "highcharts/es-modules/Series/Streamgraph/StreamgraphSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Streamgraph series
 */
const Streamgraph = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "streamgraph",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function StreamgraphSeries(_props) {
    return null;
}
StreamgraphSeries.type = "Series";
Streamgraph.Series = StreamgraphSeries;
// TODO: Fix typings
// @ts-ignore:
StreamgraphSeries.defaultProps = {
    type: "streamgraph",
};
Streamgraph.type = "SeriesChart";
export default Streamgraph;
//# sourceMappingURL=Streamgraph.js.map