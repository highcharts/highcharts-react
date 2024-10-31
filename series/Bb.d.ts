/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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
}
export declare function BbSeries(_props: BbSeriesProps): any;
export declare namespace BbSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Bb;
