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
 * Ohlc series
 */
const Ohlc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ohlc",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ohlc.Series = (_props) => React.createElement(React.Fragment, null);
Ohlc.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Ohlc.Series.defaultProps = {
    type: "ohlc",
};
Ohlc.type = "SeriesChart";
export default Ohlc;
//# sourceMappingURL=Ohlc.js.map