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
import type { SeriesSupertrendOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Supertrend series
 */
declare const Supertrend: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SupertrendSeries;
    type: string;
};
export interface SupertrendSeriesProps {
    type?: "supertrend";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesSupertrendOptions, "type">;
}
export declare function SupertrendSeries(_props: SupertrendSeriesProps): any;
export declare namespace SupertrendSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Supertrend;
