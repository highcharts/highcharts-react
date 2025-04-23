/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React from "react";
import type { SeriesKlingerOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Klinger series
 */
declare const Klinger: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof KlingerSeries;
    type: string;
};
interface KlingerSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesKlingerOptions>;
    children?: React.ReactNode;
}
export declare function KlingerSeries(_props: KlingerSeriesProps): any;
export declare namespace KlingerSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Klinger;
