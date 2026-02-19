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
import type { SeriesKlingerOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Klinger series
 */
declare const Klinger: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof KlingerSeries;
    type: string;
};
export interface KlingerSeriesProps {
    type?: "klinger";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesKlingerOptions, "type">;
}
export declare function KlingerSeries(_props: KlingerSeriesProps): any;
export declare namespace KlingerSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Klinger;
