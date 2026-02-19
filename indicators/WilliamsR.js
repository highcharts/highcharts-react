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
import SeriesMod from "highcharts/esm/indicators/williams-r.src.js";
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
 * WilliamsR series
 */
const WilliamsR = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "williamsr",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function WilliamsRSeries(_props) {
    return null;
}
WilliamsRSeries.type = "Series";
WilliamsR.Series = WilliamsRSeries;
WilliamsRSeries._HCReact = {
    type: "Series",
    HCOption: "series.williamsr",
    childOption: "series.williamsr",
};
WilliamsR.type = "SeriesChart";
export default WilliamsR;
//# sourceMappingURL=WilliamsR.js.map