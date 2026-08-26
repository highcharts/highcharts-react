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
import React from "react";
import type { SeriesWordcloudOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

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
declare function Wordcloud(props: ICommonAttributes): React.JSX.Element;
declare namespace Wordcloud {
    export { WordcloudSeries as Series };
    export var type: string;
}
type SeriesWordcloudConfig = Omit<SeriesWordcloudOptions, "type">;
/** Props for the `<WordcloudSeries />` component. */
export interface WordcloudSeriesProps {
    id?: SeriesWordcloudConfig["id"];
    index?: SeriesWordcloudConfig["index"];
    name?: SeriesWordcloudConfig["name"];
    className?: SeriesWordcloudConfig["className"];
    color?: SeriesWordcloudConfig["color"];
    events?: SeriesWordcloudConfig["events"];
    data?: SeriesWordcloudConfig["data"];
    options?: SeriesWordcloudConfig;
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
export declare function WordcloudSeries(_props: WordcloudSeriesProps): any;
export declare namespace WordcloudSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Wordcloud;
