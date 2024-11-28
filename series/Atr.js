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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/ATR/ATRIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Atr series
 */
const Atr = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "atr",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AtrSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
AtrSeries.type = "Series";
Atr.Series = AtrSeries;
AtrSeries._HCReact = {
    type: "Series",
    HC_Option: "series.atr",
    childOption: "series.atr",
};
// TODO: Fix typings
// @ts-ignore:
AtrSeries.defaultProps = {
    type: "atr",
};
Atr.type = "SeriesChart";
export default Atr;
//# sourceMappingURL=Atr.js.map