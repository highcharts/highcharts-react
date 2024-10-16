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
 * Mappoint series
 */
const Mappoint = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mappoint",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
Mappoint.Series = (_props) => React.createElement(React.Fragment, null);
Mappoint.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Mappoint.Series.defaultProps = {
    type: "mappoint",
};
Mappoint.type = "SeriesChart";
export default Mappoint;
//# sourceMappingURL=Mappoint.js.map