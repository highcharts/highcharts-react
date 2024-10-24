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
import type { SeriesPsarOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Psar series
 */
declare const Psar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PsarSeries;
    type: string;
};
interface PsarSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPsarOptions>;
}
export declare function PsarSeries(_props: PsarSeriesProps): any;
export declare namespace PsarSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Psar;
