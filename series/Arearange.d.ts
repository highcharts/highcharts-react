/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React from "react";
import type { SeriesArearangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Arearange series
 */
declare const Arearange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ArearangeSeries;
    type: string;
};
interface ArearangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesArearangeOptions>;
    children?: React.ReactNode;
}
export declare function ArearangeSeries(_props: ArearangeSeriesProps): any;
export declare namespace ArearangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Arearange;
