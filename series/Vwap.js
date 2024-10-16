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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/VWAP/VWAPIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Vwap series
 */
const Vwap = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vwap",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Vwap.Series = (_props) => React.createElement(React.Fragment, null);
Vwap.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Vwap.Series.defaultProps = {
    type: "vwap",
};
Vwap.type = "SeriesChart";
export default Vwap;
//# sourceMappingURL=Vwap.js.map