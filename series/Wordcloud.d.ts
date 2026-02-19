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
export interface WordcloudSeriesProps {
    type?: "wordcloud";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesWordcloudOptions, "type">;
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
