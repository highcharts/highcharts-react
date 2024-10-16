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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DPO/DPOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Dpo series
 */
const Dpo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dpo",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Dpo.Series = (_props) => React.createElement(React.Fragment, null);
Dpo.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Dpo.Series.defaultProps = {
    type: "dpo",
};
Dpo.type = "SeriesChart";
export default Dpo;
//# sourceMappingURL=Dpo.js.map