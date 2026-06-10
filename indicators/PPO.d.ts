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
import type { SeriesPpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * PPO series
 */
declare const PPO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PPOSeries;
    type: string;
};
type SeriesPpoConfig = Omit<SeriesPpoOptions, "type">;
export interface PPOSeriesProps {
    id?: SeriesPpoConfig["id"];
    index?: SeriesPpoConfig["index"];
    name?: SeriesPpoConfig["name"];
    className?: SeriesPpoConfig["className"];
    color?: SeriesPpoConfig["color"];
    events?: SeriesPpoConfig["events"];
    options?: SeriesPpoConfig;
}
export declare function PPOSeries(_props: PPOSeriesProps): any;
export declare namespace PPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PPO;
