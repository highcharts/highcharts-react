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
import SeriesMod from "highcharts/es-modules/Series/Sunburst/SunburstSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Sunburst series
 */
const Sunburst = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sunburst",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SunburstSeries(_props) {
    return null;
}
SunburstSeries.type = "Series";
Sunburst.Series = SunburstSeries;
// TODO: Fix typings
// @ts-ignore:
SunburstSeries.defaultProps = {
    type: "sunburst",
};
Sunburst.type = "SeriesChart";
export default Sunburst;
//# sourceMappingURL=Sunburst.js.map