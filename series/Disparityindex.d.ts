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
}
export declare function DisparityindexSeries(_props: DisparityindexSeriesProps): any;
export declare namespace DisparityindexSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Disparityindex;
