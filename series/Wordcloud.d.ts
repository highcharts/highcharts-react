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
import React from "react";
import type { SeriesWordcloudOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Wordcloud series
 */
declare const Wordcloud: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: WordcloudSeriesProps): React.JSX.Element;
    type: string;
};
interface WordcloudSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWordcloudOptions>;
}
export default Wordcloud;
