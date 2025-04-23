/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/streamgraph.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
// TODO: replace uses of this with _HCReact.type
StreamgraphSeries.type = "Series";
Streamgraph.Series = StreamgraphSeries;
StreamgraphSeries._HCReact = {
    type: "Series",
    HC_Option: "series.streamgraph",
    childOption: "series.streamgraph",
};
Streamgraph.type = "SeriesChart";
export default Streamgraph;
//# sourceMappingURL=Streamgraph.js.map