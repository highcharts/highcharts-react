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
import type { SeriesCCIOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * CCI series
 */
declare const CCI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CCISeries;
    type: string;
};
export interface CCISeriesProps {
    type?: "cci";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesCCIOptions, "type">;
}
export declare function CCISeries(_props: CCISeriesProps): any;
export declare namespace CCISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default CCI;
