/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesCmfOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Cmf series
 */
declare const Cmf: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CmfSeries;
    type: string;
};
interface CmfSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCmfOptions>;
    children?: React.ReactNode;
}
export declare function CmfSeries(_props: CmfSeriesProps): any;
export declare namespace CmfSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Cmf;
