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
 * Area series
 */
const Area = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "area",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Area.Series = (_props) => React.createElement(React.Fragment, null);
Area.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Area.Series.defaultProps = {
    type: "area",
};
Area.type = "SeriesChart";
export default Area;
//# sourceMappingURL=Area.js.map