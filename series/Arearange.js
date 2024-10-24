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
import SeriesMod from "highcharts/es-modules/Series/AreaRange/AreaRangeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Arearange series
 */
const Arearange = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "arearange",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ArearangeSeries(_props) {
    return null;
}
ArearangeSeries.type = "Series";
Arearange.Series = ArearangeSeries;
// TODO: Fix typings
// @ts-ignore:
ArearangeSeries.defaultProps = {
    type: "arearange",
};
Arearange.type = "SeriesChart";
export default Arearange;
//# sourceMappingURL=Arearange.js.map