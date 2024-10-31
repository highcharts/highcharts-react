/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React from "react";
import type { SeriesHlcOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Hlc series
 */
declare const Hlc: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HlcSeries;
    type: string;
};
interface HlcSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHlcOptions>;
}
export declare function HlcSeries(_props: HlcSeriesProps): any;
export declare namespace HlcSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Hlc;
