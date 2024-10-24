/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React from "react";
import type { SeriesWmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Wma series
 */
declare const Wma: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WmaSeries;
    type: string;
};
interface WmaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWmaOptions>;
}
export declare function WmaSeries(_props: WmaSeriesProps): any;
export declare namespace WmaSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Wma;
