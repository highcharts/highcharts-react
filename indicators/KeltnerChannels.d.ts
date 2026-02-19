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
import type { SeriesKeltnerChannelsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * KeltnerChannels series
 */
declare const KeltnerChannels: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof KeltnerChannelsSeries;
    type: string;
};
export interface KeltnerChannelsSeriesProps {
    type?: "keltnerchannels";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesKeltnerChannelsOptions, "type">;
}
export declare function KeltnerChannelsSeries(_props: KeltnerChannelsSeriesProps): any;
export declare namespace KeltnerChannelsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default KeltnerChannels;
