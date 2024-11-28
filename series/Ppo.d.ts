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
import type { SeriesPpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ppo series
 */
declare const Ppo: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PpoSeries;
    type: string;
};
interface PpoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPpoOptions>;
    children?: React.ReactNode;
}
export declare function PpoSeries(_props: PpoSeriesProps): any;
export declare namespace PpoSeries {
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
export default Ppo;
