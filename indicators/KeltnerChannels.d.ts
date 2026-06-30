/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesKeltnerchannelsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * KeltnerChannels series
 */
declare const KeltnerChannels: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof KeltnerChannelsSeries;
    type: string;
};
type SeriesKeltnerchannelsConfig = Omit<SeriesKeltnerchannelsOptions, "type">;
export interface KeltnerChannelsSeriesProps {
    id?: SeriesKeltnerchannelsConfig["id"];
    index?: SeriesKeltnerchannelsConfig["index"];
    name?: SeriesKeltnerchannelsConfig["name"];
    className?: SeriesKeltnerchannelsConfig["className"];
    color?: SeriesKeltnerchannelsConfig["color"];
    events?: SeriesKeltnerchannelsConfig["events"];
    options?: SeriesKeltnerchannelsConfig;
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
