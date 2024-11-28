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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Chaikin/ChaikinIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Chaikin series
 */
const Chaikin = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "chaikin",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ChaikinSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ChaikinSeries.type = "Series";
Chaikin.Series = ChaikinSeries;
ChaikinSeries._HCReact = {
    type: "Series",
    HC_Option: "series.chaikin",
    childOption: "series.chaikin",
};
// TODO: Fix typings
// @ts-ignore:
ChaikinSeries.defaultProps = {
    type: "chaikin",
};
Chaikin.type = "SeriesChart";
export default Chaikin;
//# sourceMappingURL=Chaikin.js.map