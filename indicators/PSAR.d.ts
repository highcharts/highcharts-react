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
import type { SeriesPSAROptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * PSAR series
 */
declare const PSAR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PSARSeries;
    type: string;
};
export interface PSARSeriesProps {
    type?: "psar";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPSAROptions, "type">;
}
export declare function PSARSeries(_props: PSARSeriesProps): any;
export declare namespace PSARSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PSAR;
