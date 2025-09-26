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
import type { SeriesWMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * WMA series
 */
declare const WMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WMASeries;
    type: string;
};
interface WMASeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWMAOptions>;
    children?: React.ReactNode;
}
export declare function WMASeries(_props: WMASeriesProps): any;
export declare namespace WMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default WMA;
