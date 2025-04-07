/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */
import React from "react";
import type { SeriesDemaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dema series
 */
declare const Dema: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DemaSeries;
    type: string;
};
interface DemaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDemaOptions>;
    children?: React.ReactNode;
}
export declare function DemaSeries(_props: DemaSeriesProps): any;
export declare namespace DemaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Dema;
