/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React from "react";
import type { SeriesOrganizationOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * An organization chart is a diagram that shows the structure of an
 * organization and the relationships and relative ranks of its parts and
 * positions.
 *
 * A ready-made chart with `chart.type` set to `organization`. Declare the data
 * with `<Organization.Series>`, or use `OrganizationSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Organization>
 *   <Organization.Series data={[1, 2, 3]} />
 * </Organization>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.organization
 */
declare function Organization(props: ICommonAttributes): React.JSX.Element;
declare namespace Organization {
    export { OrganizationSeries as Series };
    export var type: string;
}
type SeriesOrganizationConfig = Omit<SeriesOrganizationOptions, "type">;
/** Props for the `<OrganizationSeries />` component. */
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
/**
 * An organization chart is a diagram that shows the structure of an
 * organization and the relationships and relative ranks of its parts and
 * positions.
 *
 * Renders the `organization` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <OrganizationSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.organization
 */
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
