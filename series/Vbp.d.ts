/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */
import React from "react";
import type { SeriesVbpOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Vbp series
 */
declare const Vbp: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VbpSeries;
    type: string;
};
interface VbpSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVbpOptions>;
    children?: React.ReactNode;
}
export declare function VbpSeries(_props: VbpSeriesProps): any;
export declare namespace VbpSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Vbp;
