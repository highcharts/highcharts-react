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
import type { SeriesDpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dpo series
 */
declare const Dpo: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DpoSeries;
    type: string;
};
interface DpoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDpoOptions>;
}
export declare function DpoSeries(_props: DpoSeriesProps): any;
export declare namespace DpoSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Dpo;
