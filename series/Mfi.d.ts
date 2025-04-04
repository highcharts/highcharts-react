/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */
import React from "react";
import type { SeriesMfiOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mfi series
 */
declare const Mfi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MfiSeries;
    type: string;
};
interface MfiSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMfiOptions>;
    children?: React.ReactNode;
}
export declare function MfiSeries(_props: MfiSeriesProps): any;
export declare namespace MfiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Mfi;
