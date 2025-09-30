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
import type { SeriesCCIOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * CCI series
 */
declare const CCI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CCISeries;
    type: string;
};
interface CCISeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCCIOptions>;
    children?: React.ReactNode;
}
export declare function CCISeries(_props: CCISeriesProps): any;
export declare namespace CCISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default CCI;
