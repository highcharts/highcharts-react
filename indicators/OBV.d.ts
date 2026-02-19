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
import type { SeriesOBVOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * OBV series
 */
declare const OBV: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OBVSeries;
    type: string;
};
export interface OBVSeriesProps {
    type?: "obv";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesOBVOptions, "type">;
}
export declare function OBVSeries(_props: OBVSeriesProps): any;
export declare namespace OBVSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default OBV;
