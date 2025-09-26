/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesTRIXOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * TRIX series
 */
declare const TRIX: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TRIXSeries;
    type: string;
};
interface TRIXSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTRIXOptions>;
    children?: React.ReactNode;
}
export declare function TRIXSeries(_props: TRIXSeriesProps): any;
export declare namespace TRIXSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default TRIX;
