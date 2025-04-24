/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-24
 *
 */
import React from "react";
import type { SeriesOrganizationOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Organization series
 */
declare const Organization: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OrganizationSeries;
    type: string;
};
interface OrganizationSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesOrganizationOptions>;
    children?: React.ReactNode;
}
export declare function OrganizationSeries(_props: OrganizationSeriesProps): any;
export declare namespace OrganizationSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Organization;
