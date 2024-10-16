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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/WMA/WMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Wma series
 */
const Wma = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "wma",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Wma.Series = (_props) => React.createElement(React.Fragment, null);
Wma.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Wma.Series.defaultProps = {
    type: "wma",
};
Wma.type = "SeriesChart";
export default Wma;
//# sourceMappingURL=Wma.js.map