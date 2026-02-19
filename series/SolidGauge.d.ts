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
import type { SeriesSolidGaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * SolidGauge series
 */
declare const SolidGauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SolidGaugeSeries;
    type: string;
};
export interface SolidGaugeSeriesProps {
    type?: "solidgauge";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesSolidGaugeOptions, "type">;
}
export declare function SolidGaugeSeries(_props: SolidGaugeSeriesProps): any;
export declare namespace SolidGaugeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SolidGauge;
