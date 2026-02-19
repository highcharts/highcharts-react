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
import type { SeriesMFIOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MFI series
 */
declare const MFI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MFISeries;
    type: string;
};
export interface MFISeriesProps {
    type?: "mfi";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesMFIOptions, "type">;
}
export declare function MFISeries(_props: MFISeriesProps): any;
export declare namespace MFISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MFI;
