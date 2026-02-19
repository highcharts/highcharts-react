/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesPPOOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * PPO series
 */
declare const PPO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PPOSeries;
    type: string;
};
export interface PPOSeriesProps {
    type?: "ppo";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPPOOptions, "type">;
}
export declare function PPOSeries(_props: PPOSeriesProps): any;
export declare namespace PPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PPO;
