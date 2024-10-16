/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts } from "../Highcharts";
/**
 * Areaspline series
 */
const Areaspline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "areaspline",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Areaspline.Series = (_props) => React.createElement(React.Fragment, null);
Areaspline.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Areaspline.Series.defaultProps = {
    type: "areaspline",
};
Areaspline.type = "SeriesChart";
export default Areaspline;
//# sourceMappingURL=Areaspline.js.map