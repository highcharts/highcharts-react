/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Windbarb/WindbarbSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Windbarb series
 */
const Windbarb = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "windbarb",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function WindbarbSeries(_props) {
    return null;
}
WindbarbSeries.type = "Series";
Windbarb.Series = WindbarbSeries;
// TODO: Fix typings
// @ts-ignore:
WindbarbSeries.defaultProps = {
    type: "windbarb",
};
Windbarb.type = "SeriesChart";
export default Windbarb;
//# sourceMappingURL=Windbarb.js.map