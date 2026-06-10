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
import type { SeriesVennOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Venn series
 */
declare const Venn: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VennSeries;
    type: string;
};
type SeriesVennConfig = Omit<SeriesVennOptions, "type">;
export interface VennSeriesProps {
    id?: SeriesVennConfig["id"];
    index?: SeriesVennConfig["index"];
    name?: SeriesVennConfig["name"];
    className?: SeriesVennConfig["className"];
    color?: SeriesVennConfig["color"];
    events?: SeriesVennConfig["events"];
    data?: SeriesVennConfig["data"];
    options?: SeriesVennConfig;
}
export declare function VennSeries(_props: VennSeriesProps): any;
export declare namespace VennSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Venn;
