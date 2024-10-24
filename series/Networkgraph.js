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
import SeriesMod from "highcharts/es-modules/Series/Networkgraph/NetworkgraphSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function NetworkgraphSeries(_props) {
    return null;
}
NetworkgraphSeries.type = "Series";
Networkgraph.Series = NetworkgraphSeries;
// TODO: Fix typings
// @ts-ignore:
NetworkgraphSeries.defaultProps = {
    type: "networkgraph",
};
Networkgraph.type = "SeriesChart";
export default Networkgraph;
//# sourceMappingURL=Networkgraph.js.map