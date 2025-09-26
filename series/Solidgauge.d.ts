/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesSolidGaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * SolidGauge series
 */
declare const SolidGauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SolidGaugeSeries;
    type: string;
};
interface SolidGaugeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSolidGaugeOptions>;
    children?: React.ReactNode;
}
export declare function SolidGaugeSeries(_props: SolidGaugeSeriesProps): any;
export declare namespace SolidGaugeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default SolidGauge;
