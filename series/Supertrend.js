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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Supertrend/SupertrendIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Supertrend series
 */
const Supertrend = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "supertrend",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function SupertrendSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
SupertrendSeries.type = "Series";
Supertrend.Series = SupertrendSeries;
SupertrendSeries._HCReact = {
    type: "Series",
    HC_Option: "series.supertrend",
    childOption: "series.supertrend",
};
// TODO: Fix typings
// @ts-ignore:
SupertrendSeries.defaultProps = {
    type: "supertrend",
};
Supertrend.type = "SeriesChart";
export default Supertrend;
//# sourceMappingURL=Supertrend.js.map