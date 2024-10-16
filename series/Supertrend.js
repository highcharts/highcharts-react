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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Supertrend/SupertrendIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Supertrend series
 */
const Supertrend = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "supertrend",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Supertrend.Series = (_props) => React.createElement(React.Fragment, null);
Supertrend.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Supertrend.Series.defaultProps = {
    type: "supertrend",
};
Supertrend.type = "SeriesChart";
export default Supertrend;
//# sourceMappingURL=Supertrend.js.map