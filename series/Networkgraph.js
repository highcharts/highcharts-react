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
import SeriesMod from "highcharts/es-modules/Series/Networkgraph/NetworkgraphSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Networkgraph series
 */
const Networkgraph = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "networkgraph",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function NetworkgraphSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
NetworkgraphSeries.type = "Series";
Networkgraph.Series = NetworkgraphSeries;
NetworkgraphSeries._HCReact = {
    type: "Series",
    HC_Option: "series.networkgraph",
    childOption: "series.networkgraph",
};
// TODO: Fix typings
// @ts-ignore:
NetworkgraphSeries.defaultProps = {
    type: "networkgraph",
};
Networkgraph.type = "SeriesChart";
export default Networkgraph;
//# sourceMappingURL=Networkgraph.js.map