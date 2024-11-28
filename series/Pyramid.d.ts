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
import type { SeriesPyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pyramid series
 */
declare const Pyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PyramidSeries;
    type: string;
};
interface PyramidSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPyramidOptions>;
    children?: React.ReactNode;
}
export declare function PyramidSeries(_props: PyramidSeriesProps): any;
export declare namespace PyramidSeries {
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
export default Pyramid;
