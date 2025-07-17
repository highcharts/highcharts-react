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
import SeriesMod from "highcharts/esm/modules/treemap.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
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
Treemap.type = "SeriesChart";
export default Treemap;
//# sourceMappingURL=Treemap.js.map