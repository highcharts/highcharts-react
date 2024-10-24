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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PC/PCIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Pc series
 */
const Pc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pc",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PcSeries(_props) {
    return null;
}
PcSeries.type = "Series";
Pc.Series = PcSeries;
// TODO: Fix typings
// @ts-ignore:
PcSeries.defaultProps = {
    type: "pc",
};
Pc.type = "SeriesChart";
export default Pc;
//# sourceMappingURL=Pc.js.map