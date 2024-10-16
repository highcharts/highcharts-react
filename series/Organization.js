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
import SeriesMod from "highcharts/es-modules/Series/Organization/OrganizationSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Organization series
 */
const Organization = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "organization",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Organization.Series = (_props) => React.createElement(React.Fragment, null);
Organization.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Organization.Series.defaultProps = {
    type: "organization",
};
Organization.type = "SeriesChart";
export default Organization;
//# sourceMappingURL=Organization.js.map