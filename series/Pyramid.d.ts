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
import type { SeriesPyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Pyramid series
 */
declare const Pyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PyramidSeries;
    type: string;
};
export interface PyramidSeriesProps {
    type?: "pyramid";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPyramidOptions, "type">;
}
export declare function PyramidSeries(_props: PyramidSeriesProps): any;
export declare namespace PyramidSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pyramid;
