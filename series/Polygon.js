/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Polygon/PolygonSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PolygonSeries(_props) {
    return null;
}
PolygonSeries.type = "Series";
Polygon.Series = PolygonSeries;
// TODO: Fix typings
// @ts-ignore:
PolygonSeries.defaultProps = {
    type: "polygon",
};
Polygon.type = "SeriesChart";
export default Polygon;
//# sourceMappingURL=Polygon.js.map