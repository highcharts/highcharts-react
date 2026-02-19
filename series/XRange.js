/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/xrange.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
}
/**
 * XRange series
 */
const XRange = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "xrange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function XRangeSeries(_props) {
    return null;
}
XRangeSeries.type = "Series";
XRange.Series = XRangeSeries;
XRangeSeries._HCReact = {
    type: "Series",
    HCOption: "series.xrange",
    childOption: "series.xrange",
};
XRange.type = "SeriesChart";
export default XRange;
//# sourceMappingURL=XRange.js.map