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
import type { SeriesDMIOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * DMI series
 */
declare const DMI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DMISeries;
    type: string;
};
export interface DMISeriesProps {
    type?: "dmi";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesDMIOptions, "type">;
}
export declare function DMISeries(_props: DMISeriesProps): any;
export declare namespace DMISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DMI;
