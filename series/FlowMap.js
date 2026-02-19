/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/flowmap.src.js";
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
 * FlowMap series
 */
const FlowMap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "flowmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
export function FlowMapSeries(_props) {
    return null;
}
FlowMapSeries.type = "Series";
FlowMap.Series = FlowMapSeries;
FlowMapSeries._HCReact = {
    type: "Series",
    HCOption: "series.flowmap",
    childOption: "series.flowmap",
};
FlowMap.type = "SeriesChart";
export default FlowMap;
//# sourceMappingURL=FlowMap.js.map