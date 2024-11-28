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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/OBV/OBVIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Obv series
 */
const Obv = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "obv",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ObvSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ObvSeries.type = "Series";
Obv.Series = ObvSeries;
ObvSeries._HCReact = {
    type: "Series",
    HC_Option: "series.obv",
    childOption: "series.obv",
};
// TODO: Fix typings
// @ts-ignore:
ObvSeries.defaultProps = {
    type: "obv",
};
Obv.type = "SeriesChart";
export default Obv;
//# sourceMappingURL=Obv.js.map