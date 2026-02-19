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
import type { SeriesPictorialOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Pictorial series
 */
declare const Pictorial: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PictorialSeries;
    type: string;
};
export interface PictorialSeriesProps {
    type?: "pictorial";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPictorialOptions, "type">;
}
export declare function PictorialSeries(_props: PictorialSeriesProps): any;
export declare namespace PictorialSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pictorial;
