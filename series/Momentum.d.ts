/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React from "react";
import type { SeriesMomentumOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Momentum series
 */
declare const Momentum: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MomentumSeries;
    type: string;
};
interface MomentumSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMomentumOptions>;
    children?: React.ReactNode;
}
export declare function MomentumSeries(_props: MomentumSeriesProps): any;
export declare namespace MomentumSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Momentum;
