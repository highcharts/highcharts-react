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
import SeriesMod from "highcharts/es-modules/Series/Waterfall/WaterfallSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Waterfall series
 */
const Waterfall = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "waterfall",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function WaterfallSeries(_props) {
    return null;
}
WaterfallSeries.type = "Series";
Waterfall.Series = WaterfallSeries;
// TODO: Fix typings
// @ts-ignore:
WaterfallSeries.defaultProps = {
    type: "waterfall",
};
Waterfall.type = "SeriesChart";
export default Waterfall;
//# sourceMappingURL=Waterfall.js.map