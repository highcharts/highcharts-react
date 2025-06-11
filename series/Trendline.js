/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/trendline.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Trendline series
 */
const Trendline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "trendline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function TrendlineSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
TrendlineSeries.type = "Series";
Trendline.Series = TrendlineSeries;
TrendlineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.trendline",
    childOption: "series.trendline",
};
Trendline.type = "SeriesChart";
export default Trendline;
//# sourceMappingURL=Trendline.js.map