/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React from "react";
import type { SeriesCmoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Cmo series
 */
declare const Cmo: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CmoSeries;
    type: string;
};
interface CmoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCmoOptions>;
}
export declare function CmoSeries(_props: CmoSeriesProps): any;
export declare namespace CmoSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Cmo;
