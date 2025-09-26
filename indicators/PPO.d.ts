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
import type { SeriesPPOOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * PPO series
 */
declare const PPO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PPOSeries;
    type: string;
};
interface PPOSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPPOOptions>;
    children?: React.ReactNode;
}
export declare function PPOSeries(_props: PPOSeriesProps): any;
export declare namespace PPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default PPO;
