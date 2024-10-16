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
 * Hlc series
 */
const Hlc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "hlc",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Hlc.Series = (_props) => React.createElement(React.Fragment, null);
Hlc.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Hlc.Series.defaultProps = {
    type: "hlc",
};
Hlc.type = "SeriesChart";
export default Hlc;
//# sourceMappingURL=Hlc.js.map