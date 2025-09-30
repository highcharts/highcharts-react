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
import type { SeriesCMFOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * CMF series
 */
declare const CMF: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CMFSeries;
    type: string;
};
interface CMFSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCMFOptions>;
    children?: React.ReactNode;
}
export declare function CMFSeries(_props: CMFSeriesProps): any;
export declare namespace CMFSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default CMF;
