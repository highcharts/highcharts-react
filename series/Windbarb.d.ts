/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React from "react";
import type { SeriesWindbarbOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Windbarb series
 */
declare const Windbarb: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WindbarbSeries;
    type: string;
};
interface WindbarbSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWindbarbOptions>;
}
export declare function WindbarbSeries(_props: WindbarbSeriesProps): any;
export declare namespace WindbarbSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Windbarb;
