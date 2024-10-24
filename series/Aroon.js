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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Aroon/AroonIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Aroon series
 */
const Aroon = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "aroon",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AroonSeries(_props) {
    return null;
}
AroonSeries.type = "Series";
Aroon.Series = AroonSeries;
// TODO: Fix typings
// @ts-ignore:
AroonSeries.defaultProps = {
    type: "aroon",
};
Aroon.type = "SeriesChart";
export default Aroon;
//# sourceMappingURL=Aroon.js.map