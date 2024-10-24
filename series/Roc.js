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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/ROC/ROCIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Roc series
 */
const Roc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "roc",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function RocSeries(_props) {
    return null;
}
RocSeries.type = "Series";
Roc.Series = RocSeries;
// TODO: Fix typings
// @ts-ignore:
RocSeries.defaultProps = {
    type: "roc",
};
Roc.type = "SeriesChart";
export default Roc;
//# sourceMappingURL=Roc.js.map