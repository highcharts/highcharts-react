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
import type { SeriesDPOOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * DPO series
 */
declare const DPO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DPOSeries;
    type: string;
};
export interface DPOSeriesProps {
    type?: "dpo";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesDPOOptions, "type">;
}
export declare function DPOSeries(_props: DPOSeriesProps): any;
export declare namespace DPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DPO;
