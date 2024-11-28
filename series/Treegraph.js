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
import SeriesMod from "highcharts/es-modules/Series/Treegraph/TreegraphSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Treegraph series
 */
const Treegraph = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "treegraph",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function TreegraphSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
TreegraphSeries.type = "Series";
Treegraph.Series = TreegraphSeries;
TreegraphSeries._HCReact = {
    type: "Series",
    HC_Option: "series.treegraph",
    childOption: "series.treegraph",
};
// TODO: Fix typings
// @ts-ignore:
TreegraphSeries.defaultProps = {
    type: "treegraph",
};
Treegraph.type = "SeriesChart";
export default Treegraph;
//# sourceMappingURL=Treegraph.js.map