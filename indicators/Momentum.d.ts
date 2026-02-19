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
import type { SeriesMomentumOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Momentum series
 */
declare const Momentum: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MomentumSeries;
    type: string;
};
export interface MomentumSeriesProps {
    type?: "momentum";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesMomentumOptions, "type">;
}
export declare function MomentumSeries(_props: MomentumSeriesProps): any;
export declare namespace MomentumSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Momentum;
