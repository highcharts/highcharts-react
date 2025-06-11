/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/networkgraph.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Networkgraph.type = "SeriesChart";
export default Networkgraph;
//# sourceMappingURL=Networkgraph.js.map