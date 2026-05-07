/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesWordcloudOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Wordcloud series
 */
declare const Wordcloud: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WordcloudSeries;
    type: string;
};
type SeriesWordcloudConfig = Omit<SeriesWordcloudOptions, "type">;
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
