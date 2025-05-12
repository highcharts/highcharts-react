/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
import React from "react";
import type { SeriesDpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dpo series
 */
declare const Dpo: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DpoSeries;
    type: string;
};
interface DpoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDpoOptions>;
    children?: React.ReactNode;
}
export declare function DpoSeries(_props: DpoSeriesProps): any;
export declare namespace DpoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Dpo;
