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
import type { SeriesKeltnerChannelsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * KeltnerChannels series
 */
declare const KeltnerChannels: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof KeltnerChannelsSeries;
    type: string;
};
interface KeltnerChannelsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesKeltnerChannelsOptions>;
    children?: React.ReactNode;
}
export declare function KeltnerChannelsSeries(_props: KeltnerChannelsSeriesProps): any;
export declare namespace KeltnerChannelsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default KeltnerChannels;
