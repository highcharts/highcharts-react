/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/treegraph.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
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
TreegraphSeries.type = "Series";
Treegraph.Series = TreegraphSeries;
TreegraphSeries._HCReact = {
    type: "Series",
    HC_Option: "series.treegraph",
    childOption: "series.treegraph",
};
Treegraph.type = "SeriesChart";
export default Treegraph;
//# sourceMappingURL=Treegraph.js.map