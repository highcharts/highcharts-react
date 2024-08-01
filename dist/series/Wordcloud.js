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
import SeriesMod from "highcharts/es-modules/Series/Wordcloud/WordcloudSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Wordcloud series
 */
var Wordcloud = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "wordcloud",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Wordcloud.Series = function (_props) { return React.createElement(React.Fragment, null); };
Wordcloud.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Wordcloud.Series.defaultProps = {
    type: "wordcloud",
};
Wordcloud.type = "SeriesChart";
export default Wordcloud;
//# sourceMappingURL=Wordcloud.js.map