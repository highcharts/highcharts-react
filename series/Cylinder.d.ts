/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React from "react";
import type { SeriesCylinderOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Cylinder series
 */
declare const Cylinder: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CylinderSeries;
    type: string;
};
interface CylinderSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCylinderOptions>;
    children?: React.ReactNode;
}
export declare function CylinderSeries(_props: CylinderSeriesProps): any;
export declare namespace CylinderSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Cylinder;
