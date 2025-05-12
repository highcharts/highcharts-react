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
import type { SeriesBbOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bb series
 */
declare const Bb: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BbSeries;
    type: string;
};
interface BbSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBbOptions>;
    children?: React.ReactNode;
}
export declare function BbSeries(_props: BbSeriesProps): any;
export declare namespace BbSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Bb;
