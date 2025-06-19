/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React from "react";
import type { SeriesWordcloudOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Wordcloud series
 */
declare const Wordcloud: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WordcloudSeries;
    type: string;
};
interface WordcloudSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWordcloudOptions>;
    children?: React.ReactNode;
}
export declare function WordcloudSeries(_props: WordcloudSeriesProps): any;
export declare namespace WordcloudSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Wordcloud;
