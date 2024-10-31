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
import type { SeriesParetoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pareto series
 */
declare const Pareto: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ParetoSeries;
    type: string;
};
interface ParetoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesParetoOptions>;
}
export declare function ParetoSeries(_props: ParetoSeriesProps): any;
export declare namespace ParetoSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Pareto;
