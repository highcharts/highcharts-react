/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesSankeyOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Sankey series
 */
declare const Sankey: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SankeySeries;
    type: string;
};
type SeriesSankeyConfig = Omit<SeriesSankeyOptions, "type">;
export interface SankeySeriesProps {
    id?: SeriesSankeyConfig["id"];
    index?: SeriesSankeyConfig["index"];
    name?: SeriesSankeyConfig["name"];
    className?: SeriesSankeyConfig["className"];
    color?: SeriesSankeyConfig["color"];
    events?: SeriesSankeyConfig["events"];
    data?: SeriesSankeyConfig["data"];
    options?: SeriesSankeyConfig;
}
export declare function SankeySeries(_props: SankeySeriesProps): any;
export declare namespace SankeySeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Sankey;
