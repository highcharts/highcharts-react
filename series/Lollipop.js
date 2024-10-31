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
import SeriesMod from "highcharts/es-modules/Series/Lollipop/LollipopSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Lollipop series
 */
const Lollipop = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "lollipop",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function LollipopSeries(_props) {
    return null;
}
LollipopSeries.type = "Series";
Lollipop.Series = LollipopSeries;
// TODO: Fix typings
// @ts-ignore:
LollipopSeries.defaultProps = {
    type: "lollipop",
};
Lollipop.type = "SeriesChart";
export default Lollipop;
//# sourceMappingURL=Lollipop.js.map