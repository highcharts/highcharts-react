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
 * Heatmap series
 */
const Heatmap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "heatmap",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Heatmap.Series = (_props) => React.createElement(React.Fragment, null);
Heatmap.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Heatmap.Series.defaultProps = {
    type: "heatmap",
};
Heatmap.type = "SeriesChart";
export default Heatmap;
//# sourceMappingURL=Heatmap.js.map