/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/modules/wordcloud.src.js";
/**
 * A word cloud is a visualization of a set of words, where the size and
 * placement of a word is determined by how it is weighted.
 *
 * A ready-made chart with `chart.type` set to `wordcloud`. Declare the data
 * with `<Wordcloud.Series>`, or use `WordcloudSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Wordcloud>
 *   <Wordcloud.Series data={[1, 2, 3]} />
 * </Wordcloud>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.wordcloud
 */
function Wordcloud(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "wordcloud",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A word cloud is a visualization of a set of words, where the size and
 * placement of a word is determined by how it is weighted.
 *
 * Renders the `wordcloud` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <WordcloudSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.wordcloud
 */
export function WordcloudSeries(_props) {
    return null;
}
WordcloudSeries.type = "Series";
Wordcloud.Series = WordcloudSeries;
WordcloudSeries._HCReact = {
    type: "Series",
    HCOption: "series.wordcloud",
    childOption: "series.wordcloud",
};
Wordcloud.type = "SeriesChart";
export default Wordcloud;
