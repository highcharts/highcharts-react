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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/IKH/IKHIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Ikh series
 */
const Ikh = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ikh",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ikh.Series = (_props) => React.createElement(React.Fragment, null);
Ikh.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Ikh.Series.defaultProps = {
    type: "ikh",
};
Ikh.type = "SeriesChart";
export default Ikh;
//# sourceMappingURL=Ikh.js.map