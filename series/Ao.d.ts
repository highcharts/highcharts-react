/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */
import React from "react";
import type { SeriesAoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ao series
 */
declare const Ao: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AoSeries;
    type: string;
};
interface AoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAoOptions>;
    children?: React.ReactNode;
}
export declare function AoSeries(_props: AoSeriesProps): any;
export declare namespace AoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Ao;
