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
import { Chart } from "../Highcharts";
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
// TODO: Fix typings
// @ts-ignore:
AreasplineSeries.defaultProps = {
    type: "areaspline",
};
Areaspline.type = "SeriesChart";
export default Areaspline;
//# sourceMappingURL=Areaspline.js.map