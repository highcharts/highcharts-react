/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/PointAndFigure/PointAndFigureSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Pointandfigure series
 */
const Pointandfigure = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pointandfigure",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PointandfigureSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PointandfigureSeries.type = "Series";
Pointandfigure.Series = PointandfigureSeries;
PointandfigureSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pointandfigure",
    childOption: "series.pointandfigure",
};
// TODO: Fix typings
// @ts-ignore:
PointandfigureSeries.defaultProps = {
    type: "pointandfigure",
};
Pointandfigure.type = "SeriesChart";
export default Pointandfigure;
//# sourceMappingURL=Pointandfigure.js.map