/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React from "react";
import type { SeriesEmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ema series
 */
declare const Ema: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof EmaSeries;
    type: string;
};
interface EmaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesEmaOptions>;
    children?: React.ReactNode;
}
export declare function EmaSeries(_props: EmaSeriesProps): any;
export declare namespace EmaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Ema;
