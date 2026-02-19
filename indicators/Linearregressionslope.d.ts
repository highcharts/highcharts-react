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
import type { SeriesLinearregressionslopeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Linearregressionslope series
 */
declare const Linearregressionslope: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearregressionslopeSeries;
    type: string;
};
export interface LinearregressionslopeSeriesProps {
    type?: "linearregressionslope";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesLinearregressionslopeOptions, "type">;
}
export declare function LinearregressionslopeSeries(_props: LinearregressionslopeSeriesProps): any;
export declare namespace LinearregressionslopeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Linearregressionslope;
