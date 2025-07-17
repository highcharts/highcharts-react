/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-07-17
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/tiledwebmap.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
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
// TODO: replace uses of this with _HCReact.type
TiledwebmapSeries.type = "Series";
Tiledwebmap.Series = TiledwebmapSeries;
TiledwebmapSeries._HCReact = {
    type: "Series",
    HC_Option: "series.tiledwebmap",
    childOption: "series.tiledwebmap",
};
Tiledwebmap.type = "SeriesChart";
export default Tiledwebmap;
//# sourceMappingURL=Tiledwebmap.js.map