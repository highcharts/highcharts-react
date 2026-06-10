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
import type { SeriesRenkoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Renko series
 */
declare const Renko: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RenkoSeries;
    type: string;
};
type SeriesRenkoConfig = Omit<SeriesRenkoOptions, "type">;
export interface RenkoSeriesProps {
    id?: SeriesRenkoConfig["id"];
    index?: SeriesRenkoConfig["index"];
    name?: SeriesRenkoConfig["name"];
    className?: SeriesRenkoConfig["className"];
    color?: SeriesRenkoConfig["color"];
    events?: SeriesRenkoConfig["events"];
    data?: SeriesRenkoConfig["data"];
    options?: SeriesRenkoConfig;
}
export declare function RenkoSeries(_props: RenkoSeriesProps): any;
export declare namespace RenkoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Renko;
