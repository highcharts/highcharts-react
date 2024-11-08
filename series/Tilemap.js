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
import SeriesMod from "highcharts/es-modules/Series/Tilemap/TilemapSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Tilemap series
 */
const Tilemap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "tilemap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function TilemapSeries(_props) {
    return null;
}
TilemapSeries.type = "Series";
Tilemap.Series = TilemapSeries;
// TODO: Fix typings
// @ts-ignore:
TilemapSeries.defaultProps = {
    type: "tilemap",
};
Tilemap.type = "SeriesChart";
export default Tilemap;
//# sourceMappingURL=Tilemap.js.map