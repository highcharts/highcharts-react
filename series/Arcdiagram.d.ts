/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
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
}
export declare function ArcdiagramSeries(_props: ArcdiagramSeriesProps): any;
export declare namespace ArcdiagramSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Arcdiagram;
