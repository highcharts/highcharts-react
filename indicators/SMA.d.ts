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
import type { SeriesSMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * SMA series
 */
declare const SMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SMASeries;
    type: string;
};
export interface SMASeriesProps {
    type?: "sma";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesSMAOptions, "type">;
}
export declare function SMASeries(_props: SMASeriesProps): any;
export declare namespace SMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SMA;
