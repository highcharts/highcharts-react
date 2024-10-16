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
 * Line series
 */
const Line = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "line",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Line.Series = (_props) => React.createElement(React.Fragment, null);
Line.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Line.Series.defaultProps = {
    type: "line",
};
Line.type = "SeriesChart";
export default Line;
//# sourceMappingURL=Line.js.map