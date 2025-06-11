/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Areaspline series
 */
const Areaspline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "areaspline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function AreasplineSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
AreasplineSeries.type = "Series";
Areaspline.Series = AreasplineSeries;
AreasplineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.areaspline",
    childOption: "series.areaspline",
};
Areaspline.type = "SeriesChart";
export default Areaspline;
//# sourceMappingURL=Areaspline.js.map