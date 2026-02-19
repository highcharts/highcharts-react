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
import type { SeriesDEMAOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * DEMA series
 */
declare const DEMA: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DEMASeries;
    type: string;
};
export interface DEMASeriesProps {
    type?: "dema";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesDEMAOptions, "type">;
}
export declare function DEMASeries(_props: DEMASeriesProps): any;
export declare namespace DEMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DEMA;
