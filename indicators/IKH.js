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
import SeriesMod from "highcharts/esm/indicators/ichimoku-kinko-hyo.src.js";
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
 * IKH series
 */
const IKH = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ikh",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function IKHSeries(_props) {
    return null;
}
IKHSeries.type = "Series";
IKH.Series = IKHSeries;
IKHSeries._HCReact = {
    type: "Series",
    HCOption: "series.ikh",
    childOption: "series.ikh",
};
IKH.type = "SeriesChart";
export default IKH;
//# sourceMappingURL=IKH.js.map