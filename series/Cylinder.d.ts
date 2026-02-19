/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesCylinderOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Cylinder series
 */
declare const Cylinder: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CylinderSeries;
    type: string;
};
export interface CylinderSeriesProps {
    type?: "cylinder";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesCylinderOptions, "type">;
}
export declare function CylinderSeries(_props: CylinderSeriesProps): any;
export declare namespace CylinderSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Cylinder;
