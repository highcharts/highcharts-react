/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
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
}
export declare function KlingerSeries(_props: KlingerSeriesProps): any;
export declare namespace KlingerSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Klinger;
