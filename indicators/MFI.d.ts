/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesMFIOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * MFI series
 */
declare const MFI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MFISeries;
    type: string;
};
interface MFISeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMFIOptions>;
    children?: React.ReactNode;
}
export declare function MFISeries(_props: MFISeriesProps): any;
export declare namespace MFISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default MFI;
