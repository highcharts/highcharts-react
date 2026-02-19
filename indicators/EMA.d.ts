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
import type { SeriesEMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * EMA series
 */
declare const EMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof EMASeries;
    type: string;
};
export interface EMASeriesProps {
    type?: "ema";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesEMAOptions, "type">;
}
export declare function EMASeries(_props: EMASeriesProps): any;
export declare namespace EMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default EMA;
