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
import type { SeriesSMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * SMA series
 */
declare const SMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SMASeries;
    type: string;
};
interface SMASeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSMAOptions>;
    children?: React.ReactNode;
}
export declare function SMASeries(_props: SMASeriesProps): any;
export declare namespace SMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default SMA;
