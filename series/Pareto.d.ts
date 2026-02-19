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
import type { SeriesParetoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Pareto series
 */
declare const Pareto: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ParetoSeries;
    type: string;
};
export interface ParetoSeriesProps {
    type?: "pareto";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesParetoOptions, "type">;
}
export declare function ParetoSeries(_props: ParetoSeriesProps): any;
export declare namespace ParetoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pareto;
