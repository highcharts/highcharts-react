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
import type { SeriesSunburstOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Sunburst series
 */
declare const Sunburst: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SunburstSeries;
    type: string;
};
interface SunburstSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSunburstOptions>;
    children?: React.ReactNode;
}
export declare function SunburstSeries(_props: SunburstSeriesProps): any;
export declare namespace SunburstSeries {
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
export default Sunburst;
