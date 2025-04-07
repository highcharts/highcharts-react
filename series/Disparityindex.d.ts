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
import type { SeriesDisparityindexOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Disparityindex series
 */
declare const Disparityindex: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DisparityindexSeries;
    type: string;
};
interface DisparityindexSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDisparityindexOptions>;
    children?: React.ReactNode;
}
export declare function DisparityindexSeries(_props: DisparityindexSeriesProps): any;
export declare namespace DisparityindexSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Disparityindex;
