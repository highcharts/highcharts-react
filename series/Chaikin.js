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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Chaikin/ChaikinIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Chaikin series
 */
const Chaikin = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "chaikin",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Chaikin.Series = (_props) => React.createElement(React.Fragment, null);
Chaikin.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Chaikin.Series.defaultProps = {
    type: "chaikin",
};
Chaikin.type = "SeriesChart";
export default Chaikin;
//# sourceMappingURL=Chaikin.js.map