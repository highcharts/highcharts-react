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
import type { SeriesArearangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Arearange series
 */
declare const Arearange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ArearangeSeries;
    type: string;
};
interface ArearangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesArearangeOptions>;
}
export declare function ArearangeSeries(_props: ArearangeSeriesProps): any;
export declare namespace ArearangeSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Arearange;
