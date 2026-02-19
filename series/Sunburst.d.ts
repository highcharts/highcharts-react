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
import type { SeriesSunburstOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Sunburst series
 */
declare const Sunburst: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SunburstSeries;
    type: string;
};
export interface SunburstSeriesProps {
    type?: "sunburst";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesSunburstOptions, "type">;
}
export declare function SunburstSeries(_props: SunburstSeriesProps): any;
export declare namespace SunburstSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Sunburst;
