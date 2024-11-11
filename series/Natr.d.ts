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
import React from "react";
import type { SeriesNatrOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Natr series
 */
declare const Natr: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof NatrSeries;
    type: string;
};
interface NatrSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesNatrOptions>;
}
export declare function NatrSeries(_props: NatrSeriesProps): any;
export declare namespace NatrSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Natr;