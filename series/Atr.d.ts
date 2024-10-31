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
import type { SeriesAtrOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Atr series
 */
declare const Atr: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AtrSeries;
    type: string;
};
interface AtrSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAtrOptions>;
}
export declare function AtrSeries(_props: AtrSeriesProps): any;
export declare namespace AtrSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Atr;
