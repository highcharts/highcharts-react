/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
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
}
export declare function MomentumSeries(_props: MomentumSeriesProps): any;
export declare namespace MomentumSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Momentum;
