/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Wordcloud/WordcloudSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Wordcloud series
 */
const Wordcloud = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "wordcloud",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function WordcloudSeries(_props) {
    return null;
}
WordcloudSeries.type = "Series";
Wordcloud.Series = WordcloudSeries;
// TODO: Fix typings
// @ts-ignore:
WordcloudSeries.defaultProps = {
    type: "wordcloud",
};
Wordcloud.type = "SeriesChart";
export default Wordcloud;
//# sourceMappingURL=Wordcloud.js.map