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
import type { SeriesSunburstOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Sunburst series
 */
declare const Sunburst: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SunburstSeries;
    type: string;
};
type SeriesSunburstConfig = Omit<SeriesSunburstOptions, "type">;
export interface SunburstSeriesProps {
    id?: SeriesSunburstConfig["id"];
    index?: SeriesSunburstConfig["index"];
    name?: SeriesSunburstConfig["name"];
    className?: SeriesSunburstConfig["className"];
    color?: SeriesSunburstConfig["color"];
    events?: SeriesSunburstConfig["events"];
    data?: SeriesSunburstConfig["data"];
    options?: SeriesSunburstConfig;
}
export declare function SunburstSeries(_props: SunburstSeriesProps): any;
export declare namespace SunburstSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Sunburst;
