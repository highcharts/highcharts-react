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
import type { SeriesAbandsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Abands series
 */
declare const Abands: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AbandsSeries;
    type: string;
};
interface AbandsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAbandsOptions>;
}
export declare function AbandsSeries(_props: AbandsSeriesProps): any;
export declare namespace AbandsSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Abands;
