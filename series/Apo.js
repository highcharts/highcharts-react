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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/APO/APOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Apo series
 */
const Apo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "apo",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Apo.Series = (_props) => React.createElement(React.Fragment, null);
Apo.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Apo.Series.defaultProps = {
    type: "apo",
};
Apo.type = "SeriesChart";
export default Apo;
//# sourceMappingURL=Apo.js.map