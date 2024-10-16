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
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Zigzag/ZigzagIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Zigzag series
 */
const Zigzag = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "zigzag",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Zigzag.Series = (_props) => React.createElement(React.Fragment, null);
Zigzag.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Zigzag.Series.defaultProps = {
    type: "zigzag",
};
Zigzag.type = "SeriesChart";
export default Zigzag;
//# sourceMappingURL=Zigzag.js.map