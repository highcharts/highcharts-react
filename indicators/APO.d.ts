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
import type { SeriesAPOOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * APO series
 */
declare const APO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof APOSeries;
    type: string;
};
interface APOSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAPOOptions>;
    children?: React.ReactNode;
}
export declare function APOSeries(_props: APOSeriesProps): any;
export declare namespace APOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default APO;
