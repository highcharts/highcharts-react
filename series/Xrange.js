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
import SeriesMod from "highcharts/es-modules/Series/XRange/XRangeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Xrange series
 */
const Xrange = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "xrange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function XrangeSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
XrangeSeries.type = "Series";
Xrange.Series = XrangeSeries;
XrangeSeries._HCReact = {
    type: "Series",
    HC_Option: "series.xrange",
    childOption: "series.xrange",
};
// TODO: Fix typings
// @ts-ignore:
XrangeSeries.defaultProps = {
    type: "xrange",
};
Xrange.type = "SeriesChart";
export default Xrange;
//# sourceMappingURL=Xrange.js.map