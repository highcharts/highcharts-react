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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/AO/AOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Ao series
 */
const Ao = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ao",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AoSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
AoSeries.type = "Series";
Ao.Series = AoSeries;
AoSeries._HCReact = {
    type: "Series",
    HC_Option: "series.ao",
    childOption: "series.ao",
};
// TODO: Fix typings
// @ts-ignore:
AoSeries.defaultProps = {
    type: "ao",
};
Ao.type = "SeriesChart";
export default Ao;
//# sourceMappingURL=Ao.js.map