/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesWaterfallOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Waterfall series
 */
declare const Waterfall: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WaterfallSeries;
    type: string;
};
type SeriesWaterfallConfig = Omit<SeriesWaterfallOptions, "type">;
export interface WaterfallSeriesProps {
    id?: SeriesWaterfallConfig["id"];
    index?: SeriesWaterfallConfig["index"];
    name?: SeriesWaterfallConfig["name"];
    className?: SeriesWaterfallConfig["className"];
    color?: SeriesWaterfallConfig["color"];
    events?: SeriesWaterfallConfig["events"];
    data?: SeriesWaterfallConfig["data"];
    options?: SeriesWaterfallConfig;
}
export declare function WaterfallSeries(_props: WaterfallSeriesProps): any;
export declare namespace WaterfallSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Waterfall;
