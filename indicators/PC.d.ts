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
import type { SeriesPCOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * PC series
 */
declare const PC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PCSeries;
    type: string;
};
export interface PCSeriesProps {
    type?: "pc";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPCOptions, "type">;
}
export declare function PCSeries(_props: PCSeriesProps): any;
export declare namespace PCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PC;
