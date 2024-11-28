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
    var defaultProps: {
        type: string;
    };
}
export default Supertrend;
