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
import type { SeriesWilliamsROptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * WilliamsR series
 */
declare const WilliamsR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WilliamsRSeries;
    type: string;
};
export interface WilliamsRSeriesProps {
    type?: "williamsr";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesWilliamsROptions, "type">;
}
export declare function WilliamsRSeries(_props: WilliamsRSeriesProps): any;
export declare namespace WilliamsRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default WilliamsR;
