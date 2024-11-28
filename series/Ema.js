/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/EMA/EMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function EmaSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
EmaSeries.type = "Series";
Ema.Series = EmaSeries;
EmaSeries._HCReact = {
    type: "Series",
    HC_Option: "series.ema",
    childOption: "series.ema",
};
// TODO: Fix typings
// @ts-ignore:
EmaSeries.defaultProps = {
    type: "ema",
};
Ema.type = "SeriesChart";
export default Ema;
//# sourceMappingURL=Ema.js.map