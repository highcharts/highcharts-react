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
import type { SeriesSmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Sma series
 */
declare const Sma: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SmaSeries;
    type: string;
};
interface SmaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSmaOptions>;
}
export declare function SmaSeries(_props: SmaSeriesProps): any;
export declare namespace SmaSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Sma;
