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
import type { SeriesBbOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * BB series
 */
declare const BB: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BBSeries;
    type: string;
};
type SeriesBbConfig = Omit<SeriesBbOptions, "type">;
export interface BBSeriesProps {
    id?: SeriesBbConfig["id"];
    index?: SeriesBbConfig["index"];
    name?: SeriesBbConfig["name"];
    className?: SeriesBbConfig["className"];
    color?: SeriesBbConfig["color"];
    events?: SeriesBbConfig["events"];
    options?: SeriesBbConfig;
}
export declare function BBSeries(_props: BBSeriesProps): any;
export declare namespace BBSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default BB;
