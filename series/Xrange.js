/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/xrange.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Xrange.type = "SeriesChart";
export default Xrange;
//# sourceMappingURL=Xrange.js.map