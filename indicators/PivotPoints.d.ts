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
import type { SeriesPivotPointsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * PivotPoints series
 */
declare const PivotPoints: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PivotPointsSeries;
    type: string;
};
export interface PivotPointsSeriesProps {
    type?: "pivotpoints";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesPivotPointsOptions, "type">;
}
export declare function PivotPointsSeries(_props: PivotPointsSeriesProps): any;
export declare namespace PivotPointsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PivotPoints;
