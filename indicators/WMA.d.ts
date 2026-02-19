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
import type { SeriesWMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * WMA series
 */
declare const WMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WMASeries;
    type: string;
};
export interface WMASeriesProps {
    type?: "wma";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesWMAOptions, "type">;
}
export declare function WMASeries(_props: WMASeriesProps): any;
export declare namespace WMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default WMA;
