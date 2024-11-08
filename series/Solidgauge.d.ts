/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesSolidgaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Solidgauge series
 */
declare const Solidgauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SolidgaugeSeries;
    type: string;
};
interface SolidgaugeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSolidgaugeOptions>;
}
export declare function SolidgaugeSeries(_props: SolidgaugeSeriesProps): any;
export declare namespace SolidgaugeSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Solidgauge;
