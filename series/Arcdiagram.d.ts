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
import type { SeriesArcdiagramOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Arcdiagram series
 */
declare const Arcdiagram: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ArcdiagramSeries;
    type: string;
};
interface ArcdiagramSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesArcdiagramOptions>;
    children?: React.ReactNode;
}
export declare function ArcdiagramSeries(_props: ArcdiagramSeriesProps): any;
export declare namespace ArcdiagramSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Arcdiagram;
