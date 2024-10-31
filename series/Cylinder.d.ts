/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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
}
export declare function CylinderSeries(_props: CylinderSeriesProps): any;
export declare namespace CylinderSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Cylinder;
