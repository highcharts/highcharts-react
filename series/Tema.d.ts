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
import type { SeriesTemaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Tema series
 */
declare const Tema: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TemaSeries;
    type: string;
};
interface TemaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTemaOptions>;
}
export declare function TemaSeries(_props: TemaSeriesProps): any;
export declare namespace TemaSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Tema;
