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
import type { SeriesIKHOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * IKH series
 */
declare const IKH: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof IKHSeries;
    type: string;
};
export interface IKHSeriesProps {
    type?: "ikh";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesIKHOptions, "type">;
}
export declare function IKHSeries(_props: IKHSeriesProps): any;
export declare namespace IKHSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default IKH;
