/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React from "react";
import type { SeriesKeltnerchannelsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Keltnerchannels series
 */
declare const Keltnerchannels: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof KeltnerchannelsSeries;
    type: string;
};
interface KeltnerchannelsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesKeltnerchannelsOptions>;
    children?: React.ReactNode;
}
export declare function KeltnerchannelsSeries(_props: KeltnerchannelsSeriesProps): any;
export declare namespace KeltnerchannelsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Keltnerchannels;
