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
import type { SeriesCMOOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * CMO series
 */
declare const CMO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CMOSeries;
    type: string;
};
interface CMOSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCMOOptions>;
    children?: React.ReactNode;
}
export declare function CMOSeries(_props: CMOSeriesProps): any;
export declare namespace CMOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default CMO;
