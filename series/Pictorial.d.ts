/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React from "react";
import type { SeriesPictorialOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pictorial series
 */
declare const Pictorial: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PictorialSeries;
    type: string;
};
interface PictorialSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPictorialOptions>;
    children?: React.ReactNode;
}
export declare function PictorialSeries(_props: PictorialSeriesProps): any;
export declare namespace PictorialSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Pictorial;
