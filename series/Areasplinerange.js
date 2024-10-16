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
import SeriesMod from "highcharts/es-modules/Series/AreaSplineRange/AreaSplineRangeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Areasplinerange series
 */
const Areasplinerange = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "areasplinerange",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Areasplinerange.Series = (_props) => React.createElement(React.Fragment, null);
Areasplinerange.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Areasplinerange.Series.defaultProps = {
    type: "areasplinerange",
};
Areasplinerange.type = "SeriesChart";
export default Areasplinerange;
//# sourceMappingURL=Areasplinerange.js.map