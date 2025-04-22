/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-22
 *
 */
import React from "react";
import type { SeriesCciOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Cci series
 */
declare const Cci: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CciSeries;
    type: string;
};
interface CciSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCciOptions>;
    children?: React.ReactNode;
}
export declare function CciSeries(_props: CciSeriesProps): any;
export declare namespace CciSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Cci;
