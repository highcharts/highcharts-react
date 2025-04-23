/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
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
    children?: React.ReactNode;
}
export declare function TemaSeries(_props: TemaSeriesProps): any;
export declare namespace TemaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Tema;
