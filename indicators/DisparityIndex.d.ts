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
import type { SeriesDisparityIndexOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * DisparityIndex series
 */
declare const DisparityIndex: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DisparityIndexSeries;
    type: string;
};
export interface DisparityIndexSeriesProps {
    type?: "disparityindex";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesDisparityIndexOptions, "type">;
}
export declare function DisparityIndexSeries(_props: DisparityIndexSeriesProps): any;
export declare namespace DisparityIndexSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DisparityIndex;
