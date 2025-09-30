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
import type { SeriesDMIOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * DMI series
 */
declare const DMI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DMISeries;
    type: string;
};
interface DMISeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDMIOptions>;
    children?: React.ReactNode;
}
export declare function DMISeries(_props: DMISeriesProps): any;
export declare namespace DMISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default DMI;
