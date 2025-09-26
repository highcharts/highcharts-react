/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
/**
 * AreaSpline series
 */
const AreaSpline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "areaspline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function AreaSplineSeries(_props) {
    return null;
}
AreaSplineSeries.type = "Series";
AreaSpline.Series = AreaSplineSeries;
AreaSplineSeries._HCReact = {
    type: "Series",
    HC_Option: "series.areaspline",
    childOption: "series.areaspline",
};
AreaSpline.type = "SeriesChart";
export default AreaSpline;
//# sourceMappingURL=AreaSpline.js.map