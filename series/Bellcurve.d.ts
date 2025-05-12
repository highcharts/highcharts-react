/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
import React from "react";
import type { SeriesBellcurveOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bellcurve series
 */
declare const Bellcurve: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BellcurveSeries;
    type: string;
};
interface BellcurveSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBellcurveOptions>;
    children?: React.ReactNode;
}
export declare function BellcurveSeries(_props: BellcurveSeriesProps): any;
export declare namespace BellcurveSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Bellcurve;
