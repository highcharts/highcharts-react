/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
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
type SeriesOrganizationConfig = Omit<SeriesOrganizationOptions, "type">;
export interface OrganizationSeriesProps {
    id?: SeriesOrganizationConfig["id"];
    index?: SeriesOrganizationConfig["index"];
    name?: SeriesOrganizationConfig["name"];
    className?: SeriesOrganizationConfig["className"];
    color?: SeriesOrganizationConfig["color"];
    events?: SeriesOrganizationConfig["events"];
    data?: SeriesOrganizationConfig["data"];
    options?: SeriesOrganizationConfig;
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
