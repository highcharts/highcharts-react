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
import SeriesMod from "highcharts/es-modules/Series/Funnel/FunnelSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Funnel series
 */
const Funnel = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "funnel",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function FunnelSeries(_props) {
    return null;
}
FunnelSeries.type = "Series";
Funnel.Series = FunnelSeries;
// TODO: Fix typings
// @ts-ignore:
FunnelSeries.defaultProps = {
    type: "funnel",
};
Funnel.type = "SeriesChart";
export default Funnel;
//# sourceMappingURL=Funnel.js.map