/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesPivotPointsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * PivotPoints series
 */
declare const PivotPoints: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PivotPointsSeries;
    type: string;
};
interface PivotPointsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPivotPointsOptions>;
    children?: React.ReactNode;
}
export declare function PivotPointsSeries(_props: PivotPointsSeriesProps): any;
export declare namespace PivotPointsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default PivotPoints;
