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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Momentum/MomentumIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Momentum series
 */
const Momentum = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "momentum",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Momentum.Series = (_props) => React.createElement(React.Fragment, null);
Momentum.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Momentum.Series.defaultProps = {
    type: "momentum",
};
Momentum.type = "SeriesChart";
export default Momentum;
//# sourceMappingURL=Momentum.js.map