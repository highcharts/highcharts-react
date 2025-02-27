/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-27
 *
 */
import React from "react";
import type { SeriesSupertrendOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Supertrend series
 */
declare const Supertrend: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SupertrendSeries;
    type: string;
};
interface SupertrendSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSupertrendOptions>;
    children?: React.ReactNode;
}
export declare function SupertrendSeries(_props: SupertrendSeriesProps): any;
export declare namespace SupertrendSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Supertrend;
