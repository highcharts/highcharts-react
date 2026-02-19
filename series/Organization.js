/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/organization.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function OrganizationSeries(_props) {
    return null;
}
OrganizationSeries.type = "Series";
Organization.Series = OrganizationSeries;
OrganizationSeries._HCReact = {
    type: "Series",
    HCOption: "series.organization",
    childOption: "series.organization",
};
Organization.type = "SeriesChart";
export default Organization;
//# sourceMappingURL=Organization.js.map