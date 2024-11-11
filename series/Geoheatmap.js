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
import SeriesMod from "highcharts/es-modules/Series/GeoHeatmap/GeoHeatmapSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Geoheatmap series
 */
const Geoheatmap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "geoheatmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function GeoheatmapSeries(_props) {
    return null;
}
GeoheatmapSeries.type = "Series";
Geoheatmap.Series = GeoheatmapSeries;
// TODO: Fix typings
// @ts-ignore:
GeoheatmapSeries.defaultProps = {
    type: "geoheatmap",
};
Geoheatmap.type = "SeriesChart";
export default Geoheatmap;
//# sourceMappingURL=Geoheatmap.js.map