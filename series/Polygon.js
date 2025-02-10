/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Polygon/PolygonSeries.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Polygon series
 */
const Polygon = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "polygon",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PolygonSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PolygonSeries.type = "Series";
Polygon.Series = PolygonSeries;
PolygonSeries._HCReact = {
    type: "Series",
    HC_Option: "series.polygon",
    childOption: "series.polygon",
};
Polygon.type = "SeriesChart";
export default Polygon;
//# sourceMappingURL=Polygon.js.map