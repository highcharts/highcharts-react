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
import type { SeriesOrganizationOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Organization series
 */
declare const Organization: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OrganizationSeries;
    type: string;
};
export interface OrganizationSeriesProps {
    type?: "organization";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesOrganizationOptions, "type">;
}
export declare function OrganizationSeries(_props: OrganizationSeriesProps): any;
export declare namespace OrganizationSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Organization;
