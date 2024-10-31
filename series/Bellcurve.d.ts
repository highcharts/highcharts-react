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
}
export declare function BellcurveSeries(_props: BellcurveSeriesProps): any;
export declare namespace BellcurveSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Bellcurve;
