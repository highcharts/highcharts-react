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
import type { SeriesAPOOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * APO series
 */
declare const APO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof APOSeries;
    type: string;
};
export interface APOSeriesProps {
    type?: "apo";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAPOOptions, "type">;
}
export declare function APOSeries(_props: APOSeriesProps): any;
export declare namespace APOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default APO;
