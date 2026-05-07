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
import type { SeriesAroonOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Aroon series
 */
declare const Aroon: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AroonSeries;
    type: string;
};
type SeriesAroonConfig = Omit<SeriesAroonOptions, "type">;
export interface AroonSeriesProps {
    id?: SeriesAroonConfig["id"];
    index?: SeriesAroonConfig["index"];
    name?: SeriesAroonConfig["name"];
    className?: SeriesAroonConfig["className"];
    color?: SeriesAroonConfig["color"];
    events?: SeriesAroonConfig["events"];
    options?: SeriesAroonConfig;
}
export declare function AroonSeries(_props: AroonSeriesProps): any;
export declare namespace AroonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Aroon;
