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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PriceEnvelopes/PriceEnvelopesIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Priceenvelopes series
 */
var Priceenvelopes = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "priceenvelopes",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Priceenvelopes.Series = function (_props) { return React.createElement(React.Fragment, null); };
Priceenvelopes.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Priceenvelopes.Series.defaultProps = {
    type: "priceenvelopes",
};
Priceenvelopes.type = "SeriesChart";
export default Priceenvelopes;
//# sourceMappingURL=Priceenvelopes.js.map