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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/SMA/SMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Sma series
 */
const Sma = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sma",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Sma.Series = (_props) => React.createElement(React.Fragment, null);
Sma.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Sma.Series.defaultProps = {
    type: "sma",
};
Sma.type = "SeriesChart";
export default Sma;
//# sourceMappingURL=Sma.js.map