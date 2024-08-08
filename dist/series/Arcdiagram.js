/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/ArcDiagram/ArcDiagramSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Arcdiagram series
 */
var Arcdiagram = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "arcdiagram",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Arcdiagram.Series = function (_props) { return React.createElement(React.Fragment, null); };
Arcdiagram.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Arcdiagram.Series.defaultProps = {
    type: "arcdiagram",
};
Arcdiagram.type = "SeriesChart";
export default Arcdiagram;
//# sourceMappingURL=Arcdiagram.js.map