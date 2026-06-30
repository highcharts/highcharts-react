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
import type { SeriesFunnelOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Funnel series
 */
declare const Funnel: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FunnelSeries;
    type: string;
};
type SeriesFunnelConfig = Omit<SeriesFunnelOptions, "type">;
export interface FunnelSeriesProps {
    id?: SeriesFunnelConfig["id"];
    index?: SeriesFunnelConfig["index"];
    name?: SeriesFunnelConfig["name"];
    className?: SeriesFunnelConfig["className"];
    color?: SeriesFunnelConfig["color"];
    events?: SeriesFunnelConfig["events"];
    data?: SeriesFunnelConfig["data"];
    options?: SeriesFunnelConfig;
}
export declare function FunnelSeries(_props: FunnelSeriesProps): any;
export declare namespace FunnelSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Funnel;
