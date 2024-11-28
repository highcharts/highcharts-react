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
import type { SeriesGaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Gauge series
 */
declare const Gauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GaugeSeries;
    type: string;
};
interface GaugeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesGaugeOptions>;
    children?: React.ReactNode;
}
export declare function GaugeSeries(_props: GaugeSeriesProps): any;
export declare namespace GaugeSeries {
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
export default Gauge;
