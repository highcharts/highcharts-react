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
import SeriesMod from "highcharts/es-modules/Series/TiledWebMap/TiledWebMapSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Tiledwebmap series
 */
const Tiledwebmap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "tiledwebmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function TiledwebmapSeries(_props) {
    return null;
}
TiledwebmapSeries.type = "Series";
Tiledwebmap.Series = TiledwebmapSeries;
// TODO: Fix typings
// @ts-ignore:
TiledwebmapSeries.defaultProps = {
    type: "tiledwebmap",
};
Tiledwebmap.type = "SeriesChart";
export default Tiledwebmap;
//# sourceMappingURL=Tiledwebmap.js.map