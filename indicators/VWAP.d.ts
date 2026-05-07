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
import type { SeriesVwapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * VWAP series
 */
declare const VWAP: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VWAPSeries;
    type: string;
};
type SeriesVwapConfig = Omit<SeriesVwapOptions, "type">;
export interface VWAPSeriesProps {
    id?: SeriesVwapConfig["id"];
    index?: SeriesVwapConfig["index"];
    name?: SeriesVwapConfig["name"];
    className?: SeriesVwapConfig["className"];
    color?: SeriesVwapConfig["color"];
    events?: SeriesVwapConfig["events"];
    options?: SeriesVwapConfig;
}
export declare function VWAPSeries(_props: VWAPSeriesProps): any;
export declare namespace VWAPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default VWAP;
