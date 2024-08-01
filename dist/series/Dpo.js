/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-01
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DPO/DPOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Dpo series
 */
var Dpo = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "dpo",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Dpo.Series = function (_props) { return React.createElement(React.Fragment, null); };
Dpo.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Dpo.Series.defaultProps = {
    type: "dpo",
};
Dpo.type = "SeriesChart";
export default Dpo;
//# sourceMappingURL=Dpo.js.map