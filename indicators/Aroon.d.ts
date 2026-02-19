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
import type { SeriesAroonOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Aroon series
 */
declare const Aroon: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AroonSeries;
    type: string;
};
export interface AroonSeriesProps {
    type?: "aroon";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAroonOptions, "type">;
}
export declare function AroonSeries(_props: AroonSeriesProps): any;
export declare namespace AroonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Aroon;
