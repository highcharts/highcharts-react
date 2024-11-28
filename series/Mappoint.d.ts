/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesMappointOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mappoint series
 */
declare const Mappoint: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MappointSeries;
    type: string;
};
interface MappointSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMappointOptions>;
    children?: React.ReactNode;
}
export declare function MappointSeries(_props: MappointSeriesProps): any;
export declare namespace MappointSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Mappoint;
