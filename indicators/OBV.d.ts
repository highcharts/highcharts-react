/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesOBVOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * OBV series
 */
declare const OBV: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OBVSeries;
    type: string;
};
interface OBVSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesOBVOptions>;
    children?: React.ReactNode;
}
export declare function OBVSeries(_props: OBVSeriesProps): any;
export declare namespace OBVSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default OBV;
