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
import SeriesMod from "highcharts/esm/modules/tiledwebmap.src.js";
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
 * TiledWebMap series
 */
const TiledWebMap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "tiledwebmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function TiledWebMapSeries(_props) {
    return null;
}
TiledWebMapSeries.type = "Series";
TiledWebMap.Series = TiledWebMapSeries;
TiledWebMapSeries._HCReact = {
    type: "Series",
    HC_Option: "series.tiledwebmap",
    childOption: "series.tiledwebmap",
};
TiledWebMap.type = "SeriesChart";
export default TiledWebMap;
//# sourceMappingURL=TiledWebMap.js.map