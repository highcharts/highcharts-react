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
import type { SeriesGaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Gauge series
 */
declare const Gauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GaugeSeries;
    type: string;
};
export interface GaugeSeriesProps {
    type?: "gauge";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesGaugeOptions, "type">;
}
export declare function GaugeSeries(_props: GaugeSeriesProps): any;
export declare namespace GaugeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Gauge;
