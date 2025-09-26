/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesDPOOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * DPO series
 */
declare const DPO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DPOSeries;
    type: string;
};
interface DPOSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDPOOptions>;
    children?: React.ReactNode;
}
export declare function DPOSeries(_props: DPOSeriesProps): any;
export declare namespace DPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default DPO;
