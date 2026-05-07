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
import type { SeriesIkhOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * IKH series
 */
declare const IKH: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof IKHSeries;
    type: string;
};
type SeriesIkhConfig = Omit<SeriesIkhOptions, "type">;
export interface IKHSeriesProps {
    id?: SeriesIkhConfig["id"];
    index?: SeriesIkhConfig["index"];
    name?: SeriesIkhConfig["name"];
    className?: SeriesIkhConfig["className"];
    color?: SeriesIkhConfig["color"];
    events?: SeriesIkhConfig["events"];
    options?: SeriesIkhConfig;
}
export declare function IKHSeries(_props: IKHSeriesProps): any;
export declare namespace IKHSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default IKH;
