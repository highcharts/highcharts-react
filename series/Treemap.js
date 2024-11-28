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
import SeriesMod from "highcharts/es-modules/Series/Treemap/TreemapSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Treemap series
 */
const Treemap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "treemap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function TreemapSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
TreemapSeries.type = "Series";
Treemap.Series = TreemapSeries;
TreemapSeries._HCReact = {
    type: "Series",
    HC_Option: "series.treemap",
    childOption: "series.treemap",
};
// TODO: Fix typings
// @ts-ignore:
TreemapSeries.defaultProps = {
    type: "treemap",
};
Treemap.type = "SeriesChart";
export default Treemap;
//# sourceMappingURL=Treemap.js.map