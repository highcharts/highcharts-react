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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/EMA/EMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Ema series
 */
const Ema = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ema",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function EmaSeries(_props) {
    return null;
}
EmaSeries.type = "Series";
Ema.Series = EmaSeries;
// TODO: Fix typings
// @ts-ignore:
EmaSeries.defaultProps = {
    type: "ema",
};
Ema.type = "SeriesChart";
export default Ema;
//# sourceMappingURL=Ema.js.map