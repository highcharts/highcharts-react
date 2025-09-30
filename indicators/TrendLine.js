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
import SeriesMod from "highcharts/esm/indicators/trendline.src.js";
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
 * TrendLine series
 */
const TrendLine = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "trendline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function TrendLineSeries(_props) {
    return null;
}
TrendLineSeries.type = "Series";
TrendLine.Series = TrendLineSeries;
TrendLineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.trendline",
    childOption: "series.trendline",
};
TrendLine.type = "SeriesChart";
export default TrendLine;
//# sourceMappingURL=TrendLine.js.map