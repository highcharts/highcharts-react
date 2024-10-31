/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/FlowMap/FlowMapSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Flowmap series
 */
const Flowmap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "flowmap",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function FlowmapSeries(_props) {
    return null;
}
FlowmapSeries.type = "Series";
Flowmap.Series = FlowmapSeries;
// TODO: Fix typings
// @ts-ignore:
FlowmapSeries.defaultProps = {
    type: "flowmap",
};
Flowmap.type = "SeriesChart";
export default Flowmap;
//# sourceMappingURL=Flowmap.js.map