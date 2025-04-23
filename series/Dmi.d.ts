/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React from "react";
import type { SeriesDmiOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dmi series
 */
declare const Dmi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DmiSeries;
    type: string;
};
interface DmiSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDmiOptions>;
    children?: React.ReactNode;
}
export declare function DmiSeries(_props: DmiSeriesProps): any;
export declare namespace DmiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Dmi;
