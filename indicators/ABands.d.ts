/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesAbandsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * ABands series
 */
declare const ABands: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ABandsSeries;
    type: string;
};
type SeriesAbandsConfig = Omit<SeriesAbandsOptions, "type">;
export interface ABandsSeriesProps {
    id?: SeriesAbandsConfig["id"];
    index?: SeriesAbandsConfig["index"];
    name?: SeriesAbandsConfig["name"];
    className?: SeriesAbandsConfig["className"];
    color?: SeriesAbandsConfig["color"];
    events?: SeriesAbandsConfig["events"];
    options?: SeriesAbandsConfig;
}
export declare function ABandsSeries(_props: ABandsSeriesProps): any;
export declare namespace ABandsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ABands;
